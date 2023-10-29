import type { Metadata } from 'next'

import Pokedex from '@/components/Pokedex/Pokedex'
import { Params } from '@/lib/next/types'
import { all } from '@/lib/pokemon/infrastructure/actions'

export const metadata: Metadata = {
  description: 'Demo application for the Software Architecture Workshop',
  title: 'Pokedex',
}

export default async function Page({ searchParams }: { searchParams: Params }) {
  const { limit = '6', offset = '0' } = searchParams

  const page = await all(Number(limit), Number(offset))

  return (
    <>
      <Pokedex page={page} />
    </>
  )
}
