import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Item {
    @Field({ nullable: true })
    name?: string;
    @Field({ nullable: true })
    id?: string;
}