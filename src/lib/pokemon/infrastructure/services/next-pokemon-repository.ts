// eslint-disable-next-line camelcase
import { unstable_cache } from 'next/cache'

import { PokemonRepository } from '@/lib/pokemon/domain/services/pokemon-repository'
import PokemonLikeTable from '@/services/database/schema/PokemonLikeTable'
import PokeAPI from '@/services/poke-api/poke-api'

import Pokemon from '../../domain/model/pokemon'
import { PokemonCursor } from '../../domain/model/pokemon-cursor'

class NextPokemonRepository implements PokemonRepository {
  constructor(
    private readonly pokeAPI: PokeAPI,
    private readonly pokemonLikeTable: PokemonLikeTable,
  ) {}

  async save(pokemon: Pokemon): Promise<void> {
    const { id, liked } = pokemon
    // eslint-disable-next-line camelcase
    await this.pokemonLikeTable.save({ id, is_liked: liked })
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

  async find(id: number | string): Promise<Pokemon> {
    const pokemon = await this.pokeAPI.getPokemonItem(id)
    const species = await this.pokeAPI.getPokemonSpeciesItem(id)

    const { is_liked: liked = false } =
      (await unstable_cache(
        async (_id) => await this.pokemonLikeTable.find(_id),
        [`pokemon-like`],
        {
          tags: [`pokemon-like-${pokemon.id}`],
        },
      )(pokemon.id)) || {}

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
}

export default NextPokemonRepository
