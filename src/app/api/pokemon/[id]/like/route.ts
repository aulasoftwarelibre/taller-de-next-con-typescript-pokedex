import { NextRequest } from 'next/server'

import { likePokemon } from '@/services/container/container'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const id = Number(params.id)

  await likePokemon.with(id)

  return new Response(null, {
    status: 204,
  })
}
