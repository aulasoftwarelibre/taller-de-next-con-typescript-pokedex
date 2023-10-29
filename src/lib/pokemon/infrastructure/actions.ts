'use server'

import { revalidateTag } from 'next/cache'

import { dislikePokemon, likePokemon } from '@/services/container'

async function like(id: number) {
  await likePokemon.with(id)

  revalidateTag(`pokemon-like-${id}`)
}

async function dislike(id: number) {
  await dislikePokemon.with(id)

  revalidateTag(`pokemon-like-${id}`)
}

export { dislike, like }
