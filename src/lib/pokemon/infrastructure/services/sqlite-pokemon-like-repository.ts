// eslint-disable-next-line camelcase
import { trace } from '@opentelemetry/api'
import { unstable_cache as cache } from 'next/cache'

import PokemonLike from '@/lib/pokemon/domain/pokemon-like/model/pokemon-like'
import { PokemonLikeRepository } from '@/lib/pokemon/domain/pokemon-like/services/pokemon-like-repository'
import PokemonLikeTable from '@/services/database/schema/PokemonLikeTable'

class SQLitePokemonLikeRepository implements PokemonLikeRepository {
  constructor(private readonly pokemonLikeTable: PokemonLikeTable) {}

  async save(pokemonLike: PokemonLike): Promise<void> {
    return await trace
      .getTracer('pokedex-app')
      .startActiveSpan('SQLitePokemonLikeRepository::save', async (span) => {
        try {
          const { id, liked } = pokemonLike
          // eslint-disable-next-line camelcase
          await this.pokemonLikeTable.save({ id, is_liked: liked })
        } finally {
          span.end()
        }
      })
  }

  async find(id: number): Promise<PokemonLike> {
    return await trace
      .getTracer('pokedex-app')
      .startActiveSpan('SQLitePokemonLikeRepository::find', async (span) => {
        try {
          const liked = await cache(
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
        } finally {
          span.end()
        }
      })
  }
}

export default SQLitePokemonLikeRepository
