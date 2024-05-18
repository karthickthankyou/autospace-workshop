import * as THREE from 'three'
import { ReactNode, useState, useRef } from 'react'
import { WORLD_DURATION } from '../util/constants'
import { SpawnedElement } from '../util/types'
import { useFrame } from '@react-three/fiber'

interface SpawnerProps {
  startPosition: THREE.Vector3
  endPosition: THREE.Vector3
  duration?: number
  spawnInterval: number
  children: ReactNode
}

export const Spawner = ({
  spawnInterval,
  startPosition,
  endPosition,
  children,
  duration = WORLD_DURATION,
}: SpawnerProps) => {
  const [elements, setElements] = useState<Array<SpawnedElement>>([])
  const lastSpawnTime = useRef<number>(Date.now())

  useFrame((_, delta) => {
    if (Date.now() - lastSpawnTime.current >= spawnInterval * 1000) {
      const id = Date.now()
      lastSpawnTime.current = id
      setElements((prevElements) => [...prevElements, { id, progress: 0 }])
    }

    setElements((prevElements) =>
      prevElements
        .map((elem) => ({
          ...elem,
          progress: elem.progress + delta / duration,
        }))
        .filter((elem) => elem.progress < 1),
    )
  })

  return (
    <>
      {elements.map((elem) => {
        const position = new THREE.Vector3().lerpVectors(
          startPosition,
          endPosition,
          elem.progress,
        )
        return (
          <group key={elem.id} position={position}>
            {children}
          </group>
        )
      })}
    </>
  )
}
