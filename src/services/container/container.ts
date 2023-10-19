import Database from '../database/database'
import config from './config'

const { pokemonLikeTable } = new Database(config.database)

export { pokemonLikeTable }
