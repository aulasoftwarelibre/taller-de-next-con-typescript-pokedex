export interface Params {
  [key: string]: string | string[] | undefined
}

export interface ErrorBoundaryProps {
  error: Error & { digest: string }
  reset: () => void
}
