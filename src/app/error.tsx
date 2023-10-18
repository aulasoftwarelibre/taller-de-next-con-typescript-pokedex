'use client'

import { Button, Image } from '@nextui-org/react'
import { useEffect } from 'react'

import { ErrorBoundaryProps } from '@/lib/next/types'

export default function Error({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <div className="grid h-screen -px-4 place-content-center gap-4">
        <Image
          alt="Uh-oh! Error"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
          height={375}
          width={375}
        />

        <p className="text-2xl font-bold tracking-tight sm:text-4xl text-center">
          Uh-oh!
        </p>

        <p className="text-gray-500">
          We get this error: {error.message}
          {error.digest && ` [code: {error.digest}]`}.
        </p>

        <Button onClick={() => reset()}>Go Back Home</Button>

        <div className="h-[300px]"></div>
      </div>
    </>
  )
}
