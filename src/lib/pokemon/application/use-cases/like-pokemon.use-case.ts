import { PokemonRepository } from '@/lib/pokemon/domain/services/pokemon-repository'

import Pokemon from '../../domain/model/pokemon'

class LikePokemonUseCase {
  constructor(private readonly pokemon: PokemonRepository) {}

  async with(id: number): Promise<void> {
    const pokemon = await this.pokemon.find(id)

    await this.pokemon.save(Pokemon.like(pokemon))
  }
}

export default LikePokemonUseCase
