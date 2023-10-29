import PokemonLike from '@/lib/pokemon/domain/pokemon-like/model/pokemon-like'
import { PokemonLikeRepository } from '@/lib/pokemon/domain/pokemon-like/services/pokemon-like-repository'

class DislikePokemonUseCase {
  constructor(private readonly pokemonLikeRepository: PokemonLikeRepository) {}

  async with(id: number): Promise<void> {
    const pokemonLike = await this.pokemonLikeRepository.find(id)

    await this.pokemonLikeRepository.save(PokemonLike.dislike(pokemonLike))
  }
}

export default DislikePokemonUseCase
