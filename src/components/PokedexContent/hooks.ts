'use client'

import { useRouter } from 'next/navigation'

import { PokedexContentProps } from './types'

const useController = (props: PokedexContentProps) => {
  const { specimens } = props
  const router = useRouter()

  const onLike = async (id: number) => {
    await fetch(`/api/pokemon/${id}/like`, { method: 'POST' })

    router.refresh()
  }

  const onDislike = async (id: number) => {
    await fetch(`/api/pokemon/${id}/dislike`, { method: 'POST' })

    router.refresh()
  }

  return { onDislike, onLike, specimens }
}

export default useController
