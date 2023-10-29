import { PokemonColor } from './pokemon-color'

interface Pokemon {
  color: PokemonColor
  id: number
  image: string
  name: string
  types: string[]
}

const Pokemon = {
  with: ({
    ...props
  }: {
    color: string
    id: number
    image: string
    name: string
    types: string[]
  }): Pokemon => <Pokemon>{ ...props },
}

export default Pokemon
