import { NextRequest } from 'next/server'

import { dislikePokemon } from '@/services/container/container'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const id = Number(params.id)

  await dislikePokemon.with(id)

  return new Response(null, {
    status: 204,
  })
}
