import knex, { Knex } from 'knex'

import PokemonLikeTable from './schema/PokemonLikeTable'

class Database {
  public readonly pokemonLikeTable: PokemonLikeTable

  constructor(config: Knex.Config) {
    const database = knex(config)
    this.pokemonLikeTable = new PokemonLikeTable(database)
  }
}

export default Database
