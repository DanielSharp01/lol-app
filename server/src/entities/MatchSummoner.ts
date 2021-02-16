import { Field, Int, ObjectType } from "type-graphql";
import { Champion } from "./Champion";
import { Item } from "./Item";
import { Keystone } from "./Keystone";
import { LeagueEntry } from "./Summoner";
import { SummonerSpell } from "./SummonerSpell";


@ObjectType()
export class MatchSummoner {
    @Field()
    id: string;

    @Field()
    accountId: string;

    @Field()
    name: string;

    @Field(() => Int)
    profileIconId: number;

    @Field()
    profileIcon: string;

    @Field({ nullable: true })
    rankedSoloDuo?: LeagueEntry;

    @Field(() => Champion)
    champion: Champion;
    @Field(() => Int)
    championLevel: number;
    @Field(() => Int)
    kills: number;
    @Field(() => Int)
    deaths: number;
    @Field(() => Int)
    assists: number;
    @Field(() => Int)
    cs: number;
    @Field(() => Int)
    vision: number;
    @Field(() => Int)
    gold: number;
    @Field(() => Keystone, { nullable: true })
    keystone: Keystone | null;
    @Field(() => SummonerSpell)
    summonerD: SummonerSpell;
    @Field(() => SummonerSpell)
    summonerF: SummonerSpell;
    @Field(() => [Item])
    items: Array<Item>;
    @Field(() => Item, { nullable: true })
    trinket: Item | null;
}
