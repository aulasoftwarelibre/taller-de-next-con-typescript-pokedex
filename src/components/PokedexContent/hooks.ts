'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { PokedexContentProps } from './types'

const useController = (props: PokedexContentProps) => {
  const [specimens, setSpecimens] = useState(props.specimens)
  const router = useRouter()

  useEffect(() => {
    setSpecimens(props.specimens)
  }, [props.specimens])

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

    router.refresh()
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

    router.refresh()
  }

  return { onDislike, onLike, specimens }
}

export default useController
