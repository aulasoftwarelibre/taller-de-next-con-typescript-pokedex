import { PokemonColor } from '@/lib/pokemon/domain/pokemon/model/pokemon-color'

export interface PokemonLiked {
  color: PokemonColor
  id: number
  image: string
  liked: boolean
  name: string
  types: string[]
}

export interface FindAllPokemonResponse {
  count: number
  current: { limit: number; offset: number }
  next?: { limit: number; offset: number }
  previous?: { limit: number; offset: number }
  specimens: PokemonLiked[]
}
