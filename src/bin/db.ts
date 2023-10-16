import { pokemonLikeTable } from '@/services/container/container'

async function createTables() {
  await pokemonLikeTable.create()
}

createTables()
  .then(() => {
    console.log('Tables created')
  })
  .catch((error) => {
    console.error(String(error))
  })
  .finally(() => process.exit(0))
