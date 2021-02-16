import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class Keystone {
    @Field()
    name: string;
    @Field()
    id: string;
}
