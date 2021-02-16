import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { Champion } from "../entities/Champion";
import { LoLAppContext } from "../LoLAppContext";

@Resolver(() => Champion)
export class ChampionResolver {
    @FieldResolver()
    async name(@Ctx() { dataDragon }: LoLAppContext, @Root() champion: Champion): Promise<string> {
        return Object.values(await dataDragon.requestChampions()).find(s => s.key === champion.id)?.name ?? '';
    }
}