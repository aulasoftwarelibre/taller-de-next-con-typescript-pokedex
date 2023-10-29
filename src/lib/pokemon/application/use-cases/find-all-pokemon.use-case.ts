import { PokemonRepository } from '@/lib/pokemon/domain/pokemon/services/pokemon-repository'
import { PokemonLikeRepository } from '@/lib/pokemon/domain/pokemon-like/services/pokemon-like-repository'

import { FindAllPokemonResponse } from './types'

class FindAllPokemonUseCase {
  constructor(
    private readonly pokemonRepository: PokemonRepository,
    private readonly pokemonLikeRepository: PokemonLikeRepository,
  ) {}

  async with(limit: number, offset: number): Promise<FindAllPokemonResponse> {
    const page = await this.pokemonRepository.all(limit, offset)

    const specimens = await Promise.all(
      page.specimens.map(async (pokemon) => ({
        ...pokemon,
        ...(await this.pokemonLikeRepository.find(pokemon.id)),
      })),
    )

    return {
      ...page,
      current: { limit, offset },
      specimens,
    }
  }
}

export default FindAllPokemonUseCase
