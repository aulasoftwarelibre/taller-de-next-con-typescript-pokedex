import Pokemon from '@/lib/pokemon/domain/model/pokemon'

export interface PokemonMiniCardProps {
  onDisliked: (id: number) => void
  onLiked: (id: number) => void
  pokemon: Pokemon
}
