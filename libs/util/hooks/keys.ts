import { useEffect } from 'react'

export const useKeypress = (keys: string[], action: () => void) => {
  useEffect(() => {
    const onKeyup = (e: { key: any }) => {
      if (keys.includes(e.key)) action()
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [action, keys])
}
