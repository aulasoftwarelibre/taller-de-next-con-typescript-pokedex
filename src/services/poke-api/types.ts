// GET /pokemon

export interface PokeAPIPokemonCollection {
  count: number
  next?: {
    limit: number
    offset: number
  }
  previous?: {
    limit: number
    offset: number
  }
  results: string[]
}

// GET /pokemon/{id}

export interface PokeAPIPokemonItem {
  id: number
  name: string
  species: {
    name: string
    url: string
  }
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}

// GET /pokemon-species/1/

export interface PokeAPIPokemonSpeciesItem {
  color: {
    name: string
    url: string
  }
  id: number
}
