import { Divider } from '@nextui-org/react'
import { useMemo } from 'react'

import PokedexGrid from '@/components/PokedexGrid/PokedexGrid'
import PokemonMiniCard from '@/components/PokemonCard/PokemonCard'

import PokedexPaginator from '../PokedexPaginator/PokedexPaginator'
import { PokedexProps } from './types'

export default function Pokedex(props: PokedexProps) {
  const {
    page: { specimens, ...pagination },
  } = props

  const cards = useMemo(
    () =>
      specimens.map((specimen) => (
        <PokemonMiniCard key={specimen.id} pokemonLiked={specimen} />
      )),
    [specimens],
  )

  return (
    <div className="container max-w-[1100px] mx-auto py-12">
      <div className="flex flex-col gap-4">
        <PokedexGrid cards={cards} />
        <Divider />
        <PokedexPaginator {...pagination} />
      </div>
    </div>
  )
}
