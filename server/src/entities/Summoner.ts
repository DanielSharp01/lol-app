import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Promo {
    @Field()
    wins: number;
    @Field()
    losses: number;
    @Field()
    games: number;
}

@ObjectType()
export class LeagueEntry {
    @Field()
    tier: string;
    @Field()
    division: string;
    @Field()
    lp: number;

    @Field({ nullable: true })
    promo?: Promo;
}

@ObjectType()
export class Summoner {
    @Field()
    id: string;

    @Field()
    accountId: string;

    @Field()
    name: string;

    @Field()
    profileIconId: number;

    @Field()
    profileIcon: string;

    @Field()
    summonerLevel: number;

    @Field({ nullable: true })
    rankedSoloDuo?: LeagueEntry;
}