import Pokemon from '../model/pokemon'
import { PokemonCursor } from '../model/pokemon-cursor'

export interface PokemonRepository {
  all(limit: number, offset: number): Promise<PokemonCursor>
  find(id: number | string): Promise<Pokemon>
  save(pokemon: Pokemon): Promise<void>
}
