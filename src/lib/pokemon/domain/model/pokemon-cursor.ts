import Pokemon from './pokemon'

export interface PokemonCursor {
  count: number
  next?: { limit: number; offset: number }
  previous?: { limit: number; offset: number }
  specimens: Pokemon[]
}
