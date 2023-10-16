import {
  PokeAPIPokemonCollection,
  PokeAPIPokemonItem,
  PokeAPIPokemonSpeciesItem,
} from './types'

class PokeAPI {
  constructor() {}

  async getPokemonCollection(
    limit: number,
    offset: number,
  ): Promise<PokeAPIPokemonCollection> {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data getPokemonCollection')
    }

    const { count, next, previous, results } = (await res.json()) as {
      count: number
      next?: string
      previous?: string
      results: { name: string; url: string }[]
    }

    return {
      count,
      next: this.extractOffsetAndLimitFromUrl(next),
      previous: this.extractOffsetAndLimitFromUrl(previous),
      results: results.map(({ name }) => name),
    }
  }

  async getPokemonItem(id: number | string): Promise<PokeAPIPokemonItem> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data getPokemonItem https://pokeapi.co/api/v2/pokemon/${id} ${await res.text()}`,
      )
    }

    return res.json()
  }

  async getPokemonSpeciesItem(
    id: number | string,
  ): Promise<PokeAPIPokemonSpeciesItem> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data getPokemonSpeciesItem')
    }

    return res.json()
  }

  private extractOffsetAndLimitFromUrl(url: string | undefined) {
    if (url) {
      const urlObject = new URL(url)
      const offset = Number(urlObject.searchParams.get('offset'))
      const limit = Number(urlObject.searchParams.get('limit'))

      if (offset !== null && limit !== null) {
        return { limit, offset }
      }
    }

    return undefined
  }
}

export default PokeAPI
