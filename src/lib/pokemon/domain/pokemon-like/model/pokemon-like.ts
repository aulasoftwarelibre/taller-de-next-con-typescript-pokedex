interface PokemonLike {
  id: number
  liked: boolean
}

const PokemonLike = {
  dislike: (props: PokemonLike): PokemonLike => ({ ...props, liked: false }),
  like: (props: PokemonLike): PokemonLike => ({ ...props, liked: true }),
  with: ({ ...props }: { id: number; liked: boolean }): PokemonLike =>
    <PokemonLike>{ ...props },
}

export default PokemonLike
