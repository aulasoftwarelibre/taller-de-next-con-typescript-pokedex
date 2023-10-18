'use client'

import { Button, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()
  return (
    <>
      <div className="grid h-screen -px-4 place-content-center gap-6">
        <Image
          isBlurred
          alt="Uh-oh! 404"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
          height={375}
          width={375}
        />

        <p className="text-2xl font-bold tracking-tight sm:text-4xl text-center">
          Uh-oh!
        </p>

        <p className="text-gray-500 text-center">
          404 | This page could not be found.
        </p>

        <Button color="primary" onClick={() => router.back()}>
          Go Back
        </Button>

        <div className="h-[300px]"></div>
      </div>
    </>
  )
}
