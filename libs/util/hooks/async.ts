import { useEffect, useState } from 'react'

export const useDebounce = <T>(
  value: T,
  delay = 1000,
): [T, { debouncing: boolean }] => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  const [debouncing, setDebouncing] = useState<boolean>(false)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
      setDebouncing(false)
    }, delay)

    setDebouncing(true)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return [debouncedValue, { debouncing }]
}
