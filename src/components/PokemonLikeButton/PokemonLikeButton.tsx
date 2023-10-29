'use client'

import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as FullHeartIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/react'

import { useController } from '@/components/PokemonLikeButton/hooks'
import { PokemonLikeButtonProps } from '@/components/PokemonLikeButton/types'

export default function PokemonLikeButton(props: PokemonLikeButtonProps) {
  const {
    isLoading,
    onDisliked,
    onLiked,
    pokemonLiked: { liked },
  } = useController(props)

  return (
    <Button
      isDisabled={isLoading}
      isIconOnly
      radius="full"
      variant="light"
      onClick={() => (liked ? onDisliked() : onLiked())}
    >
      {liked ? (
        <FullHeartIcon className="text-red-700" height="32" />
      ) : (
        <HeartIcon height="32" />
      )}
    </Button>
  )
}
