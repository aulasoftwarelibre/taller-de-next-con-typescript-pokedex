import DislikePokemonUseCase from '@/lib/pokemon/application/use-cases/dislike-pokemon.use-case'
import FindAllPokemonUseCase from '@/lib/pokemon/application/use-cases/find-all-pokemon.use-case'
import LikePokemonUseCase from '@/lib/pokemon/application/use-cases/like-pokemon.use-case'
import NextPokemonRepository from '@/lib/pokemon/infrastructure/services/next-pokemon-repository'

import Database from '../database/database'
import PokeAPI from '../poke-api/poke-api'
import config from './config'

const pokeAPI = new PokeAPI()

const { pokemonLikeTable } = new Database(config.database)

// You can change here the database repository implementation
const pokemonRepository = new NextPokemonRepository(pokeAPI, pokemonLikeTable)

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
