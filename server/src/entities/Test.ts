import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Test {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field()
    @Property()
    text!: string;
}