import Container from '@/services/container/container'

export const globalForContainer = global as unknown as {
  container: typeof Container
}

const container = globalForContainer.container || Container

if (process.env.NODE_ENV !== 'production')
  globalForContainer.container = container

export const likePokemon = container.likePokemon
export const dislikePokemon = container.dislikePokemon
export const findAllPokemon = container.findAllPokemon
