import { PokemonRepository } from '../../domain/services/pokemon-repository'
import { FindAllPokemonResponse } from './types'

class FindAllPokemonUseCase {
  constructor(private readonly pokemon: PokemonRepository) {}

  async with(limit: number, offset: number): Promise<FindAllPokemonResponse> {
    const page = await this.pokemon.all(limit, offset)

    return {
      ...page,
      current: { limit, offset },
      specimens: page.specimens,
    }
  }
}

export default FindAllPokemonUseCase
