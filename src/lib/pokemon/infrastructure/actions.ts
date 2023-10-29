'use server'

import { trace } from '@opentelemetry/api'
import { revalidateTag } from 'next/cache'

import { FindAllPokemonResponse } from '@/lib/pokemon/application/use-cases/types'
import {
  dislikePokemon,
  findAllPokemon,
  likePokemon,
} from '@/services/container'

async function all(
  limit: number,
  offset: number,
): Promise<FindAllPokemonResponse> {
  return await trace
    .getTracer('pokedex-app')
    .startActiveSpan('actions::all', async (span) => {
      try {
        return await findAllPokemon.with(limit, offset)
      } finally {
        span.end()
      }
    })
}

async function like(id: number) {
  return await trace
    .getTracer('pokedex-app')
    .startActiveSpan('actions::like', async (span) => {
      try {
        await likePokemon.with(id)

        revalidateTag(`pokemon-like-${id}`)
      } finally {
        span.end()
      }
    })
}

async function dislike(id: number) {
  return await trace
    .getTracer('pokedex-app')
    .startActiveSpan('actions::dislike', async (span) => {
      try {
        await dislikePokemon.with(id)

        revalidateTag(`pokemon-like-${id}`)
      } finally {
        span.end()
      }
    })
}

export { all, dislike, like }
