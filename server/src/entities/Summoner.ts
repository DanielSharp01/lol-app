import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Promo {
    @Field(() => Int)
    wins: number;
    @Field(() => Int)
    losses: number;
    @Field(() => Int)
    games: number;
}

@ObjectType()
export class LeagueEntry {
    @Field()
    tier: string;
    @Field()
    division: string;
    @Field(() => Int)
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

    @Field(() => Int)
    profileIconId: number;

    @Field()
    profileIcon: string;

    @Field(() => Int)
    summonerLevel: number;

    @Field({ nullable: true })
    rankedSoloDuo?: LeagueEntry;
}