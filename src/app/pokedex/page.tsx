import type { Metadata } from 'next'

import Pokedex from '@/components/Pokedex/Pokedex'
import { findAllPokemon } from '@/services/container/container'

export const metadata: Metadata = {
  description: 'Demo application for the Software Architecture Workshop',
  title: 'Pokedex',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { limit = '6', offset = '0' } = searchParams

  const page = await findAllPokemon.with(Number(limit), Number(offset))

  return (
    <>
      <Pokedex page={page} />
    </>
  )
}
