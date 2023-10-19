import type { Metadata } from 'next'

import Pokedex from '@/components/Pokedex/Pokedex'
import { FindAllPokemonResponse } from '@/lib/pokemon/application/use-cases/types'
import { PokemonColor } from '@/lib/pokemon/domain/model/pokemon-color'

export const metadata: Metadata = {
  description: 'Demo application for the Software Architecture Workshop',
  title: 'Pokedex',
}

export default async function Page() {
  const page: FindAllPokemonResponse = {
    count: 1,
    current: {
      limit: 1,
      offset: 0,
    },
    specimens: [
      {
        color: PokemonColor.Green,
        id: 1,
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        liked: false,
        name: 'bulbasaur',
        types: ['grass', 'poison'],
      },
    ],
  }

  return (
    <>
      <Pokedex page={page} />
    </>
  )
}
