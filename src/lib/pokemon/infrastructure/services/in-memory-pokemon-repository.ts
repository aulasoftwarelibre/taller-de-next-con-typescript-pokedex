import PokeAPI from '@/services/poke-api/poke-api'

import Pokemon from '../../domain/model/pokemon'
import { PokemonCursor } from '../../domain/model/pokemon-cursor'
import { PokemonRepository } from '../../domain/services/pokemon-repository'

class InMemoryPokemonRepository implements PokemonRepository {
  private like: Record<number, boolean>

  constructor(private readonly pokeAPI: PokeAPI) {
    this.like = {}
  }

  async all(limit: number, offset: number): Promise<PokemonCursor> {
    const { results, ...props } = await this.pokeAPI.getPokemonCollection(
      limit,
      offset,
    )

    const specimens = await Promise.all(
      results.map(async (specimen) => await this.find(specimen)),
    )

    return {
      ...props,
      specimens,
    }
  }

  async find(id: string | number): Promise<Pokemon> {
    const pokemon = await this.pokeAPI.getPokemonItem(id)
    const species = await this.pokeAPI.getPokemonSpeciesItem(id)

    const liked = this.like[pokemon.id] || false

    const {
      name,
      sprites: {
        other: {
          'official-artwork': { front_default: image },
        },
      },
      types: typesSlots,
    } = pokemon

    const types = typesSlots.map((typeSlot) => typeSlot.type.name)

    const {
      color: { name: color },
    } = species

    return Pokemon.with({
      color,
      id: pokemon.id,
      image,
      liked,
      name,
      types,
    })
  }

  async save(pokemon: Pokemon): Promise<void> {
    const { id, liked } = pokemon
    this.like[id] = liked
  }
}

export default InMemoryPokemonRepository
