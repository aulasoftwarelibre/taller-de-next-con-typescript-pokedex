import PokemonLike from '@/lib/pokemon/domain/pokemon-like/model/pokemon-like'
import { PokemonLikeRepository } from '@/lib/pokemon/domain/pokemon-like/services/pokemon-like-repository'

class InMemoryPokemonLikeRepository implements PokemonLikeRepository {
  private like: Record<number, boolean>

  constructor() {
    this.like = {}
  }

  async find(id: number): Promise<PokemonLike> {
    const liked = this.like[id] || false

    return PokemonLike.with({
      id,
      liked,
    })
  }

  async save(pokemon: PokemonLike): Promise<void> {
    const { id, liked } = pokemon
    this.like[id] = liked
  }
}

export default InMemoryPokemonLikeRepository
