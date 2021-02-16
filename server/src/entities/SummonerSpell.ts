import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class SummonerSpell {
    @Field()
    name: string;
    @Field()
    id: string;
}
