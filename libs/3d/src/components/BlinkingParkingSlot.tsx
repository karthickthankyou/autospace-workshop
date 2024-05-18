import { yellowColor } from '../util/constants'
import { Square, SquareProps } from './Square'
import { useEffect, useState } from 'react'

interface BlinkingParkingSlotProps extends SquareProps {
  blinkDuration?: number
}

export const BlinkingParkingSlot = ({
  borderColor = yellowColor,
  blinkDuration = 1000,
  ...props
}: BlinkingParkingSlotProps) => {
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevState) => !prevState)
    }, blinkDuration)

    return () => {
      clearInterval(interval)
    }
  }, [blinkDuration])

  if (isBlinking) return null

  return <Square {...props} borderColor={borderColor} />
}
