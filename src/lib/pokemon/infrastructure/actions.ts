'use server'

import { revalidateTag } from 'next/cache'

import container from '@/services/container'

async function like(id: number) {
  await container.likePokemon.with(id)

  revalidateTag(`pokemon-like-${id}`)
}

async function dislike(id: number) {
  await container.dislikePokemon.with(id)

  revalidateTag(`pokemon-like-${id}`)
}

export { dislike, like }
