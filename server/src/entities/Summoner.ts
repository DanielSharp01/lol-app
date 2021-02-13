import { Field, ObjectType } from "type-graphql";

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
}