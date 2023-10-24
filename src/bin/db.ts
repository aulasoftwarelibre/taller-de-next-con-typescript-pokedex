import config from '@/services/container/config'
import Database from '@/services/database/database'

async function createTables() {
  const database = new Database(config.database)
  await database.pokemonLikeTable.create()
}

createTables()
  .then(() => {
    console.log('Tables created')
  })
  .catch((error) => {
    console.error(String(error))
  })
  .finally(() => process.exit(0))
