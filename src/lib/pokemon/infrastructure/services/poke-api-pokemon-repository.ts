// eslint-disable-next-line camelcase
import Pokemon from '@/lib/pokemon/domain/pokemon/model/pokemon'
import { PokemonCursor } from '@/lib/pokemon/domain/pokemon/model/pokemon-cursor'
import { PokemonRepository } from '@/lib/pokemon/domain/pokemon/services/pokemon-repository'
import PokeAPI from '@/services/poke-api/poke-api'

class PokeAPIPokemonRepository implements PokemonRepository {
  constructor(private readonly pokeAPI: PokeAPI) {}

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

  async find(id: number | string): Promise<Pokemon> {
    const pokemon = await this.pokeAPI.getPokemonItem(id)
    const species = await this.pokeAPI.getPokemonSpeciesItem(id)

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
      name,
      types,
    })
  }
}

export default PokeAPIPokemonRepository
