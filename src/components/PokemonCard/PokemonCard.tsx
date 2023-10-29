import { Card, CardBody, CardFooter, Chip, Image } from '@nextui-org/react'
import NextImage from 'next/image'

import PokemonLikeButton from '@/components/PokemonLikeButton/PokemonLikeButton'

import { PokemonStyle } from './constants'
import { PokemonMiniCardProps } from './types'

export default function PokemonMiniCard({
  pokemonLiked,
}: PokemonMiniCardProps) {
  const { color, id, image, name, types } = pokemonLiked
  const style = PokemonStyle[color as keyof typeof PokemonStyle]

  return (
    <Card
      radius="lg"
      shadow="sm"
      className={`border-none w-[320px] h-[400px] ${style.background}`}
    >
      <CardBody className="flex gap-3">
        <div className="flex flex-row justify-between items-center">
          <p className={`text-2xl ${style.text} align-baseline`}>
            #{id.toString().padStart(3, '0')}
          </p>
          <PokemonLikeButton pokemonLiked={pokemonLiked} />
        </div>
        <div className="flex flew-row justify-between items-end">
          <p className={`text-3xl capitalize ${style.text} align-baseline`}>
            {name}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          {types.map((el) => (
            <Chip
              key={el}
              className={`${style.chip} px-2 capitalize ${style.text}`}
            >
              {el}
            </Chip>
          ))}
        </div>
      </CardBody>

      <CardFooter>
        <div className="grow flex justify-center">
          <Image
            as={NextImage}
            alt={name}
            height={200}
            src={image}
            width={200}
            className="object-bottom object-scale-down"
            isBlurred
            disableSkeleton={true}
          />
        </div>
      </CardFooter>
    </Card>
  )
}
