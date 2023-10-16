import { NextRequest } from 'next/server'

import { findAllPokemon } from '@/services/container/container'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = Number(searchParams.get('limit')) || 6
  const offset = Number(searchParams.get('offset')) || 0

  const data = await findAllPokemon.with(limit, offset)

  return Response.json({ data })
}
