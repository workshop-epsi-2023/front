import { Context, useContext } from 'react'

export function useUndefinedContext<C>(context: Context<C | null>) {
  const value = useContext<C | null>(context)
  if (!value) {
    throw new Error('Context value is undefined')
  }
  return value
}
