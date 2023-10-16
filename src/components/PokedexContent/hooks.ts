'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { PokedexContentProps } from './types'

const useController = (props: PokedexContentProps) => {
  const [specimens, setSpecimens] = useState(props.specimens)
  const searchParams = useSearchParams()

  const onLike = async (id: number) => {
    await fetch(`/api/pokemon/${id}/like`, { method: 'POST' })

    setSpecimens(
      specimens.map((specimen) =>
        specimen.id === id
          ? {
              ...specimen,
              liked: !specimen.liked,
            }
          : specimen,
      ),
    )
  }

  const onDislike = async (id: number) => {
    await fetch(`/api/pokemon/${id}/dislike`, { method: 'POST' })

    setSpecimens(
      specimens.map((specimen) =>
        specimen.id === id
          ? {
              ...specimen,
              liked: !specimen.liked,
            }
          : specimen,
      ),
    )
  }

  useEffect(() => {
    let ignore = false

    async function updatePage() {
      const limit = Number(searchParams.get('limit')) || 6
      const offset = Number(searchParams.get('offset')) || 0

      const result = await fetch(`/api/pokemon?limit=${limit}&offset=${offset}`)

      if (!result.ok) {
        throw new Error('Loading Error')
      }

      const { data } = await result.json()

      if (!ignore) {
        setSpecimens(data.specimens)
      }
    }

    updatePage()

    return () => {
      ignore = true
    }
  }, [searchParams])

  return { onDislike, onLike, specimens }
}

export default useController
