// eslint-disable-next-line camelcase
import { unstable_cache } from 'next/cache'

import PokemonLike from '@/lib/pokemon/domain/pokemon-like/model/pokemon-like'
import { PokemonLikeRepository } from '@/lib/pokemon/domain/pokemon-like/services/pokemon-like-repository'
import PokemonLikeTable from '@/services/database/schema/PokemonLikeTable'

class NextPokemonLikeRepository implements PokemonLikeRepository {
  constructor(private readonly pokemonLikeTable: PokemonLikeTable) {}

  async save(pokemon: PokemonLike): Promise<void> {
    const { id, liked } = pokemon
    // eslint-disable-next-line camelcase
    await this.pokemonLikeTable.save({ id, is_liked: liked })
  }

  async find(id: number): Promise<PokemonLike> {
    const liked = await unstable_cache(
      async (_id: number) =>
        (await this.pokemonLikeTable.find(_id))?.is_liked || false,
      [`pokemon-like`],
      {
        tags: [`pokemon-like-${id}`],
      },
    )(id)

    return PokemonLike.with({
      id,
      liked,
    })
  }
}

export default NextPokemonLikeRepository
