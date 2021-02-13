export interface Request {
    callback: () => void;
    failCallback?: () => void;
    requeueTolerance: number;
}

export class RateLimiter {
    private window: number[];
    private queue: Request[] = [];

    constructor(private secondMax: number, private max: number, windowSeconds: number) {
        this.window = Array(windowSeconds).fill(0);
        setInterval(() => this.secondElapsed(), 1000);
    }

    request(request: Request) {
        if (!this.tryRequest(request)) {
            if (request.requeueTolerance === 0) {
                if (request.failCallback) request.failCallback();
                return;
            } else request.requeueTolerance--;
            this.queue.unshift(request);
        }
    }

    private tryRequest(request: Request) {
        if (this.window[0] === this.secondMax || this.window.reduce((acc, num) => acc + num, 0) === this.max) {
            return false;
        }
        request?.callback();
        this.window[0]++;
        return true;
    }

    private secondElapsed() {
        this.window.pop();
        this.window.unshift(0);
        while (this.queue.length > 0) {
            const top = this.queue[this.queue.length - 1];
            if (this.tryRequest(top)) this.queue.pop();
            else break;
        }

        const newQueue = [];
        for (const element of this.queue) {
            if (element.requeueTolerance === 0) {
                if (element.failCallback) element.failCallback();
            } else newQueue.push(element);
        }
        this.queue = this.queue.filter(e => e.requeueTolerance !== 0);

        for (const element of this.queue) {
            element.requeueTolerance--;
        }
    }
}