import { useRef, useState } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

export const RotatingCamera = ({
  speed = 0.003,
  minFov = 30,
  maxFov = 60,
  radius = 80,
}) => {
  const [angle, setAngle] = useState(() => MathUtils.randInt(0, radius))
  const [fov, setFov] = useState(() => MathUtils.randInt(minFov, maxFov))

  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  useFrame((state, delta) => {
    if (cameraRef.current) {
      setAngle((prevAngle) => (prevAngle + speed) % (2 * Math.PI))

      cameraRef.current.position.x = radius * Math.sin(angle)
      cameraRef.current.position.z = radius * Math.cos(angle)
      cameraRef.current.position.y = 200
      cameraRef.current.lookAt(1, 0, 1)

      const amplitude = (maxFov - minFov) / 2
      const oscillationSpeed = 0.05
      setFov(
        minFov +
          amplitude +
          Math.sin(state.clock.elapsedTime * oscillationSpeed) * amplitude,
      )
    }
  })

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={fov}
        near={0.1}
        far={1000}
        position={[0, 100, 0]}
      />
    </>
  )
}
