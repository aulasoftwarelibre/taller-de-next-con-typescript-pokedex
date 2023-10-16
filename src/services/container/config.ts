import { Knex } from 'knex'

const config = {
  database: {
    client: 'better-sqlite3',
    connection: {
      filename: 'pokemon.sqlite3',
    },
    useNullAsDefault: true,
  } as Knex.Config,
}

export default config
