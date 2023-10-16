'use client'

import PokemonMiniCard from '../PokemonCard/PokemonCard'
import useController from './hooks'
import { PokedexContentProps as PokedexContentProps } from './types'

export default function PokedexContent(props: PokedexContentProps) {
  const { onDislike, onLike, specimens } = useController(props)

  return (
    <div className="grown grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {specimens.map((specimen) => (
        <PokemonMiniCard
          key={specimen.id}
          pokemon={specimen}
          onLiked={onLike}
          onDisliked={onDislike}
        />
      ))}
    </div>
  )
}
