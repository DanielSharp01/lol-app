import fetch from 'node-fetch';
import { RequestScheduler } from '../request-scheduler/RequestScheduler';
import { ActiveGame } from './models/ActiveGame';
import { safeLong } from './models/constants';
import { LeagueEntry } from './models/LeagueEntry';
import { Match } from './models/Match';
import { MatchTimeline } from './models/MatchTimeline';
import { MathListResponse } from './models/MathList';
import { Summoner } from './models/Summoner';

export class RiotApi {
    private readonly platform: string = 'https://eun1.api.riotgames.com';
    constructor(private token: string, private requestScheduler: RequestScheduler) {
    }

    requestSummonerByAccountId(accountId: string): Promise<Summoner> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/summoner/v4/summoners/by-account/${accountId}?api_key=${this.token}`)
                .then(res => res.json()));
    }
    
    requestSummonerByName(name: string): Promise<Summoner> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/summoner/v4/summoners/by-name/${name}?api_key=${this.token}`)
                .then(res => res.json()));
    }

    requestSummonerByPUUID(puuid: string): Promise<Summoner> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${this.token}`)
                .then(res => res.json()));
    }

    requestSummonerBySummonerId(summonerId: string): Promise<Summoner> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/summoner/v4/summoners/${summonerId}?api_key=${this.token}`)
                .then(res => res.json()));
    }

    requestActiveGame(summonerId: string): Promise<ActiveGame | null> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/spectator/v4/active-games/by-summoner/${summonerId}/?api_key=${this.token}`)
                .then(res => res.status === 404 ? null : res.json()))
    }

    requestMatch(gameId: safeLong): Promise<Match> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/match/v4/matches/${gameId}/?api_key=${this.token}`)
                .then(res => res.json()))
    }

    requestMatchTimeline(gameId: safeLong): Promise<MatchTimeline> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/match/v4/timelines/by-match/${gameId}/?api_key=${this.token}`)
                .then(res => res.json()))
    }

    requestSummonerLeagueEntires(summonerId: string): Promise<Array<LeagueEntry>> {
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/league/v4/entries/by-summoner/${summonerId}/?api_key=${this.token}`))
            .then(res => res.json())
    }

    requestMatchList(
        accountId: string,
        startIndex?: number,
        endIndex?: number,
        queue?: number,
        champion?: number
    ): Promise<MathListResponse> {
        let queryParams = '';
        if (startIndex != undefined) queryParams += `&startIndex=${startIndex}`;
        if (endIndex != undefined) queryParams += `&endIndex=${endIndex}`;
        if (queue != undefined) queryParams += `&queue=${queue}`;
        if (champion != undefined) queryParams += `&champion=${champion}`;
        return this.requestScheduler.request(() =>
            fetch(`${this.platform}/lol/match/v4/matchlists/by-account/${accountId}/?api_key=${this.token}${queryParams}`)
                .then(res => res.json()))
    }
}