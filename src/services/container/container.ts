import 'server-only'

import DislikePokemonUseCase from '@/lib/pokemon/application/use-cases/dislike-pokemon.use-case'
import FindAllPokemonUseCase from '@/lib/pokemon/application/use-cases/find-all-pokemon.use-case'
import LikePokemonUseCase from '@/lib/pokemon/application/use-cases/like-pokemon.use-case'
import InMemoryPokemonLikeRepository from '@/lib/pokemon/infrastructure/services/in-memory-pokemon-like-repository'
import PokeAPIPokemonRepository from '@/lib/pokemon/infrastructure/services/poke-api-pokemon-repository'
import SQLitePokemonLikeRepository from '@/lib/pokemon/infrastructure/services/sqlite-pokemon-like-repository'

import Database from '../database/database'
import PokeAPI from '../poke-api/poke-api'
import config from './config'

const activeInMemoryRepository = ['1', 't', 'true'].includes(
  process.env.REPOSITORY_IN_MEMORY || 'f',
)

export class Container {
  static init() {
    // You can change the database repository implementation in .env file
    const { pokemonLikeRepository, pokemonRepository } =
      this.configureRepositories()

    const findAllPokemon = new FindAllPokemonUseCase(
      pokemonRepository,
      pokemonLikeRepository,
    )

    const likePokemon = new LikePokemonUseCase(pokemonLikeRepository)

    const dislikePokemon = new DislikePokemonUseCase(pokemonLikeRepository)

    return {
      dislikePokemon,
      findAllPokemon,
      likePokemon,
    }
  }

  private static configureRepositories() {
    const pokeAPI = new PokeAPI()

    const pokemonRepository = new PokeAPIPokemonRepository(pokeAPI)

    const pokemonLikeRepository = activeInMemoryRepository
      ? new InMemoryPokemonLikeRepository()
      : new SQLitePokemonLikeRepository(
          new Database(config.database).pokemonLikeTable,
        )

    return { pokemonLikeRepository, pokemonRepository }
  }
}

export default Container.init()
