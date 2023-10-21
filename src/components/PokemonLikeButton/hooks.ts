'use client'

import { useTransition } from 'react'

import { dislike, like } from '@/app/pokedex/actions'
import { PokemonLikeButtonProps } from '@/components/PokemonLikeButton/types'

export const useController = (props: PokemonLikeButtonProps) => {
  const {
    pokemon: { id },
  } = props
  const [isLoading, startTransaction] = useTransition()

  const onLiked = async () => {
    startTransaction(() => like(id))
  }

  const onDisliked = async () => {
    startTransaction(() => dislike(id))
  }

  return { isLoading, onDisliked, onLiked, ...props }
}
