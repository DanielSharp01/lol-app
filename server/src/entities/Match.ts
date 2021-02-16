import { Field, Int, ObjectType } from "type-graphql";
import { MatchSummoner } from "./MatchSummoner";

@ObjectType()
export class MatchTeam {
    @Field()
    win: boolean;

    @Field(() => [MatchSummoner])
    summoners: Array<MatchSummoner>;
}

@ObjectType()
export class Match {
    @Field()
    gameMode: string;

    @Field(() => Int)
    gameLength: number;

    @Field(() => MatchTeam)
    blueTeam: MatchTeam;

    @Field(() => MatchTeam)
    redTeam: MatchTeam;
}