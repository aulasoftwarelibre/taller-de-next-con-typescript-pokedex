import { PokedexPaginatorProps } from './types'

export const useController = (props: PokedexPaginatorProps) => {
  const { count, current, next, previous } = props

  const pagination = {
    next,
    page: {
      from: current.offset + 1,
      to: current.offset + current.limit,
      total: count,
    },
    pages: {
      initialPage: Math.floor(current.offset + current.limit) / current.limit,
      total: Math.floor(count / current.limit),
    },
    previous,
  }

  return { pagination }
}
