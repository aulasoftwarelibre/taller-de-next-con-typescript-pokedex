import Pokemon from '../../domain/model/pokemon'

export interface FindAllPokemonResponse {
  count: number
  current: { limit: number; offset: number }
  next?: { limit: number; offset: number }
  previous?: { limit: number; offset: number }
  specimens: Pokemon[]
}
