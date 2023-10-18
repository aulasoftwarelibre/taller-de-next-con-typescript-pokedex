import { Spinner } from '@nextui-org/spinner'

export default function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  )
}
