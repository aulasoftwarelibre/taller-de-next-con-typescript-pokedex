import DislikePokemonUseCase from '@/lib/pokemon/application/use-cases/dislike-pokemon.use-case'
import FindAllPokemonUseCase from '@/lib/pokemon/application/use-cases/find-all-pokemon.use-case'
import LikePokemonUseCase from '@/lib/pokemon/application/use-cases/like-pokemon.use-case'
import PokemonRepository from '@/lib/pokemon/infrastructure/services/pokemon-repository'

import Database from '../database/database'
import PokeAPI from '../poke-api/poke-api'
import config from './config'

const pokeAPI = new PokeAPI()

const { pokemonLikeTable } = new Database(config.database)

const pokemonRepository = new PokemonRepository(pokeAPI, pokemonLikeTable)

const findAllPokemon = new FindAllPokemonUseCase(pokemonRepository)

const likePokemon = new LikePokemonUseCase(pokemonRepository)

const dislikePokemon = new DislikePokemonUseCase(pokemonRepository)

export {
  dislikePokemon,
  findAllPokemon,
  likePokemon,
  pokeAPI,
  pokemonLikeTable,
  pokemonRepository,
}
