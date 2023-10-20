import { Knex } from 'knex'

import { POKEMON_LIKE_TABLE } from './constants'
import { PokemonLike } from './types'

class PokemonLikeTable {
  constructor(private readonly database: Knex) {}

  async create() {
    const exists = await this.database.schema.hasTable(POKEMON_LIKE_TABLE)

    if (exists) {
      console.info('Database already configured.')
      return
    }

    await this.database.schema.createTable(POKEMON_LIKE_TABLE, (table) => {
      table.integer('id').primary()
      table.boolean('is_liked').notNullable()
      table.index('id')
    })

    console.info('Schema created.')
  }

  async find(id: number) {
    return this.database<PokemonLike>(POKEMON_LIKE_TABLE)
      .select('*')
      .where('id', id)
      .first()
  }

  async save(data: PokemonLike) {
    await this.database<PokemonLike>(POKEMON_LIKE_TABLE)
      .insert(data)
      .onConflict('id')
      .merge()
  }
}

export default PokemonLikeTable
