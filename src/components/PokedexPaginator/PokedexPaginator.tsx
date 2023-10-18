import { Button, ButtonGroup } from '@nextui-org/react'
import NextLink from 'next/link'

import { useController } from './hooks'
import { PokedexPaginatorProps } from './types'

export default function PokedexPaginator(props: PokedexPaginatorProps) {
  const {
    pagination: { next, page, previous },
  } = useController(props)

  return (
    <div className="flex  justify-between">
      <div>
        Showing {page.from} to {page.to} of {page.total} results
      </div>
      <div>
        <ButtonGroup>
          {previous ? (
            <Button
              color="primary"
              as={NextLink}
              href={`/pokedex?limit=${previous.limit}&offset=${previous.offset}`}
            >
              Previous
            </Button>
          ) : (
            <Button isDisabled>Previous</Button>
          )}
          {next ? (
            <Button
              color="primary"
              as={NextLink}
              href={`/pokedex?limit=${next.limit}&offset=${next.offset}`}
            >
              Next
            </Button>
          ) : (
            <Button isDisabled>Next</Button>
          )}
        </ButtonGroup>
      </div>
    </div>
  )
}
