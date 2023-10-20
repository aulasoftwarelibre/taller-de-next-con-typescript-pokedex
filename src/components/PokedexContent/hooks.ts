'use client'

import { dislike, like } from '@/app/pokedex/actions'

import { PokedexContentProps } from './types'

const useController = (props: PokedexContentProps) => {
  const { specimens } = props

  const onLike = async (id: number) => {
    await like(id)
  }

  const onDislike = async (id: number) => {
    await dislike(id)
  }

  return { onDislike, onLike, specimens }
}

export default useController
