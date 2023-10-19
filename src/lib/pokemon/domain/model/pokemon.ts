import { PokemonColor } from './pokemon-color'

interface Pokemon {
  color: PokemonColor
  id: number
  image: string
  liked: boolean
  name: string
  types: string[]
}

const Pokemon = {
  dislike: (props: Pokemon): Pokemon => ({ ...props, liked: false }),
  like: (props: Pokemon): Pokemon => ({ ...props, liked: true }),
  with: ({
    ...props
  }: {
    color: string
    id: number
    image: string
    liked: boolean
    name: string
    types: string[]
  }): Pokemon => <Pokemon>{ ...props },
}

export default Pokemon
