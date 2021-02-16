import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { Item } from "../entities/Item";
import { LoLAppContext } from "../LoLAppContext";

@Resolver(() => Item)
export class ItemResolver {
    @FieldResolver()
    async name(@Ctx() { dataDragon }: LoLAppContext, @Root() item: Item): Promise<string> {
        return (await dataDragon.requestItems()).data[item.id ?? '']?.name ?? '';
    }
}