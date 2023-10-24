import 'server-only'

import DislikePokemonUseCase from '@/lib/pokemon/application/use-cases/dislike-pokemon.use-case'
import FindAllPokemonUseCase from '@/lib/pokemon/application/use-cases/find-all-pokemon.use-case'
import LikePokemonUseCase from '@/lib/pokemon/application/use-cases/like-pokemon.use-case'
import InMemoryPokemonRepository from '@/lib/pokemon/infrastructure/services/in-memory-pokemon-repository'
import NextPokemonRepository from '@/lib/pokemon/infrastructure/services/next-pokemon-repository'

import Database from '../database/database'
import PokeAPI from '../poke-api/poke-api'
import config from './config'

const activeInMemoryRepository = ['1', 't', 'true'].includes(
  process.env.REPOSITORY_IN_MEMORY || 'f',
)

export class Container {
  static init() {
    // You can change the database repository implementation in .env file
    const pokemonRepository = this.configureRepository()

    const findAllPokemon = new FindAllPokemonUseCase(pokemonRepository)

    const likePokemon = new LikePokemonUseCase(pokemonRepository)

    const dislikePokemon = new DislikePokemonUseCase(pokemonRepository)

    return {
      dislikePokemon,
      findAllPokemon,
      likePokemon,
    }
  }

  private static configureRepository() {
    const pokeAPI = new PokeAPI()

    return activeInMemoryRepository
      ? new InMemoryPokemonRepository(pokeAPI)
      : new NextPokemonRepository(
          pokeAPI,
          new Database(config.database).pokemonLikeTable,
        )
  }
}
