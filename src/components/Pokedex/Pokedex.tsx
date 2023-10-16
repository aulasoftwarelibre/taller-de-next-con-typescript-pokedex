import { Divider } from '@nextui-org/react'

import PokedexContent from '../PokedexContent/PokedexContent'
import PokedexPaginator from '../PokedexPaginator/PokedexPaginator'
import { PokedexProps } from './types'

export default function Pokedex(props: PokedexProps) {
  const {
    page: { specimens, ...pagination },
  } = props

  return (
    <div className="container max-w-[1100px] mx-auto py-12">
      <div className="flex flex-col gap-4">
        <PokedexContent specimens={specimens} />
        <Divider />
        <PokedexPaginator {...pagination} />
      </div>
    </div>
  )
}
