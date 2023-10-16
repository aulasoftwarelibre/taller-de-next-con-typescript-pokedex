export interface PokedexPaginatorProps {
  count: number
  current: { limit: number; offset: number }
  next?: { limit: number; offset: number }
  previous?: { limit: number; offset: number }
}
