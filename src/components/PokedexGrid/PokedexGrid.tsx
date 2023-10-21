'use client'

import { PokedexGridProps } from './types'

export default function PokedexGrid(props: PokedexGridProps) {
  const { cards } = props

  return (
    <div className="grown grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {cards}
    </div>
  )
}
