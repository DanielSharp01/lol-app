import fetch from 'node-fetch';
import { Champion, ChampionDetailed } from "./ddmodels/Champion";
import { ItemsResponse } from './ddmodels/Item';
import { Image } from './ddmodels/Image';
import { SummonerSpell } from './ddmodels/SummonerSpell';

export class DataDragon {
    private versionPromise = Promise.resolve();
    constructor(private version?: string) {
        if (!version) {
            this.versionPromise = fetch('https://ddragon.leagueoflegends.com/api/versions.json')
                .then(res => res.json())
                .then(res => {
                    this.version = res[0];
                });
        }
    }

    async awaitVersion() {
        await this.versionPromise;
        console.log(`Using DataDragon version ${this.version}`);
    }

    get url() {
        return `https://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US`;
    }

    requestChampions(): Promise<{ [key: string]: Champion }> {
        return fetch(`${this.url}/champion.json`)
                .then(res => res.json().then(res => res.data));
    }

    requestChampionDetails(id: string): Promise<ChampionDetailed> {
        return fetch(`${this.url}/champions/${id}.json`)
                .then(res => res.json())
                .then(res => res.data);
    }

    requestItems(): Promise<ItemsResponse> {
        return fetch(`${this.url}/item.json`)
                .then(res => res.json());
    }

    requestSummonerSpells(): Promise<{ [key: string]: SummonerSpell }> {
        return fetch(`${this.url}/summoner.json`)
                .then(res => res.json())
                .then(res => res.data);
    }

    requestProfileIcons(): Promise<{ [key: string]: Image }> {
        function extractImage(data: { [key: string]: { id: string, image: Image } }): { [key: string]: Image } {
            return Object.values(data).reduce((acc: { [key: string]: Image }, item) => {
                acc[item.id] = item.image;
                    return acc;
            }, { });
        }
        
        return fetch(`${this.url}/profileicon.json`)
                .then(res => res.json())
                .then(res => res.data)
                .then(res => extractImage(res));
    }
}