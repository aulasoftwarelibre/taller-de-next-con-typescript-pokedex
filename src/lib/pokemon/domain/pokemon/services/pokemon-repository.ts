import Pokemon from '@/lib/pokemon/domain/pokemon/model/pokemon'
import { PokemonCursor } from '@/lib/pokemon/domain/pokemon/model/pokemon-cursor'

export interface PokemonRepository {
  all(limit: number, offset: number): Promise<PokemonCursor>
  find(id: number | string): Promise<Pokemon>
}
