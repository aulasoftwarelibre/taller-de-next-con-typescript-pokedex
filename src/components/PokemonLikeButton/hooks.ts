'use client'

import { useTransition } from 'react'

import { PokemonLikeButtonProps } from '@/components/PokemonLikeButton/types'
import { dislike, like } from '@/lib/pokemon/infrastructure/actions'

export const useController = (props: PokemonLikeButtonProps) => {
  const {
    pokemon: { id },
  } = props
  const [isLoading, startTransaction] = useTransition()

  const onLiked = () => {
    startTransaction(() => like(id))
  }

  const onDisliked = () => {
    startTransaction(() => dislike(id))
  }

  return { isLoading, onDisliked, onLiked, ...props }
}
