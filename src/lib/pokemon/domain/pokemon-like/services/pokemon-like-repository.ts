import PokemonLike from '@/lib/pokemon/domain/pokemon-like/model/pokemon-like'

export interface PokemonLikeRepository {
  find(id: number): Promise<PokemonLike>
  save(pokemon: PokemonLike): Promise<void>
}
