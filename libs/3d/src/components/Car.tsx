import { Color } from '@react-three/fiber'
import { Euler, MathUtils, Vector3 } from 'three'
import { useEffect, useState } from 'react'
import { getRamdomComment } from '../util/comments'
import { Box, Html } from '@react-three/drei'
import { radians } from '../util'
import { BlinkingParkingSlot } from './BlinkingParkingSlot'
import { GradientPlane } from './GradientPlane'

interface CarProps {
  color?: Color
  position?: Vector3
  size?: [number, number, number]
  searching?: boolean
  comment?: boolean
  trail?: boolean
  forward?: boolean
}

export const Car: React.FC<CarProps> = ({
  color = '#fff',
  position = new Vector3(0, 0, 0),
  forward = true,
  trail = true,
  searching = false,
  comment = false,
  size,
}) => {
  const [vehicleSize, setVehicleSize] = useState<[number, number, number]>([
    0, 0, 0,
  ])

  useEffect(() => {
    const newSize = size || [
      MathUtils.randFloat(1.9, 2.3),
      0.1,
      MathUtils.randFloat(4, 5.6),
    ]
    setVehicleSize(newSize)
  }, [size])

  const [randomComment, setRandomComment] = useState(() => getRamdomComment())

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomComment(getRamdomComment())
    }, 16000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Box
        position={position}
        rotation={[radians(0), radians(90), 0]}
        args={vehicleSize}
      >
        <meshBasicMaterial color={color} />
      </Box>
      {searching ? (
        <>
          <BlinkingParkingSlot position={[0, 2, 0]} />
        </>
      ) : null}

      {comment ? (
        <Html
          position={[0, 10, 0]}
          center
          style={{ maxWidth: '30rem', width: '100%' }}
          transform={false}
        >
          <div
            style={{
              color: '#aaa',
              fontSize: '.75rem',
              outline: 1,
              outlineColor: 'black',
              maxWidth: '30rem',
              width: '100%',
              whiteSpace: 'pre',
              userSelect: 'none',
            }}
          >
            {randomComment}
          </div>
        </Html>
      ) : null}
      {trail ? (
        forward ? (
          <GradientPlane
            position={new Vector3(vehicleSize[2] / 1.3, -0.02, position.z)}
            size={[3, 2]}
          />
        ) : (
          <GradientPlane
            rotation={new Euler(radians(-90), radians(0), radians(180))}
            position={new Vector3(-(vehicleSize[2] / 1.3), -0.02, position.z)}
            size={[3, vehicleSize[0]]}
          />
        )
      ) : null}
    </>
  )
}
