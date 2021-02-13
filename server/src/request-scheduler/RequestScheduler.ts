import chalk from "chalk";
import { Observable, Subject } from "rxjs";
import { RateLimiter } from "./RateLimiter";

interface Poll {
    lockNumber: number;
    targetRate: number;
    rate: number;
}

export class RequestScheduler {
    rateLimiter: RateLimiter;
    polls: { [key: string]: Poll } = { };

    constructor(secondMax: number, private max: number, private windowSeconds: number, private reserveCount: number) {
        this.rateLimiter = new RateLimiter(secondMax, max, windowSeconds);
    }

    request<T>(callback: () => Promise<T>, retryCount: number = Infinity): Promise<T> {
        return new Promise((resolve, reject) => this.rateLimiter.request({
            callback: async () => {
                resolve(await callback());
            },
            failCallback: () => reject(new Error('Maximum retries exceeded')),
            requeueTolerance: retryCount,
        }));
    }

    setupPoll<T>(id: string, callback: () => Promise<T>, pollingRate: number, requestImmediately: boolean = true): Observable<T> {
        if (pollingRate === 0) pollingRate = 1;
        const subj = new Subject<T>();
        const lockNumber = Math.floor(Math.random() * 1000000000);
        this.polls[id] = { lockNumber, rate: 0, targetRate: pollingRate };
        this.recalculatePollingRates();
        const recursiveTimeout = () => {
            if (this.polls[id]?.lockNumber !== lockNumber) return;
            setTimeout(() => {
                this.request(callback).then(res => subj.next(res)).catch(err => 
                    console.error(err),
                );
                recursiveTimeout();
            }, this.polls[id].rate * 1000);
        }
        if (requestImmediately) {
            this.request(callback).then(res => subj.next(res)).catch(err => 
                console.error(err),
            );
        }
        recursiveTimeout();
        return subj.asObservable();
    }

    stopPolling(id: string) {
        delete this.polls[id];
        this.recalculatePollingRates();
    }

    recalculatePollingRates() {
        const unitCost = Object.values(this.polls).reduce((acc, p) => acc + 1 / p.targetRate, 0)
            * this.windowSeconds / (this.max - this.reserveCount);

        if (unitCost > 1) {
            Object.values(this.polls).forEach(p => p.rate = p.targetRate * unitCost);
            console.error(chalk.red('Throttling polling rates!'), this.polls);
        } else {
            Object.values(this.polls).forEach(p => p.rate = p.targetRate);
            console.error(chalk.green('Normal polling rates!'), this.polls);
        }
    }
}