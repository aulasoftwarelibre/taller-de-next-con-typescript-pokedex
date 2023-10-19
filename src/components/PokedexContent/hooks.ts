'use client'

import { PokedexContentProps } from './types'

const useController = (props: PokedexContentProps) => {
  const onLike = async (id: number) => {}

  const onDislike = async (id: number) => {}

  return { onDislike, onLike, specimens: props.specimens }
}

export default useController
