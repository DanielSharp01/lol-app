import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class Champion {
    @Field()
    name: string;
    @Field()
    id: string;
}
