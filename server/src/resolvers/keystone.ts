import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { Keystone } from "../entities/Keystone";
import { LoLAppContext } from "../LoLAppContext";

@Resolver(() => Keystone)
export class KeystoneResolver {
    @FieldResolver()
    async name(@Ctx() { dataDragon }: LoLAppContext, @Root() keystone: Keystone): Promise<string> {
        return 'TODO IMPLEMENT'; // TODO: 
    }
}