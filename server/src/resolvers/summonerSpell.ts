import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { SummonerSpell } from "../entities/SummonerSpell";
import { LoLAppContext } from "../LoLAppContext";

@Resolver(() => SummonerSpell)
export class SummonerSpellResolver {
    @FieldResolver()
    async name(@Ctx() { dataDragon }: LoLAppContext, @Root() spell: SummonerSpell): Promise<string> {
        return Object.values(await dataDragon.requestSummonerSpells()).find(s => s.key === spell.id)?.name ?? '';
    }
}