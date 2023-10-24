import { Container } from '@/services/container/container'

export const globalForContainer = global as unknown as {
  container: ReturnType<typeof Container.init>
}

export const container = globalForContainer.container || Container.init()

if (process.env.NODE_ENV !== 'production')
  globalForContainer.container = container

export default container
