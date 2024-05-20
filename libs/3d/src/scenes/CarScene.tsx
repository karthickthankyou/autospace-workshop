import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Plane } from '@react-three/drei'
import { radians } from '../util'
import { Spawner } from '../components/Spawner'
import {
  WORLD_DURATION,
  WORLD_END,
  WORLD_START,
  roadColor,
} from '../util/constants'
import * as THREE from 'three'
import { Square } from '../components/Square'
import { Car } from '../components/Car'
import { Building } from '../components/Building'
import { BuildingSet } from '../components/BuildingSet'

export const CarScene = ({
  children,
  camera,
  className = 'h-[calc(100vh-2rem)]',
  orbitControls = true,
  hideAllComments = false,
}: {
  camera?: React.ReactNode
  children?: React.ReactNode
  className?: string
  orbitControls?: boolean
  hideAllComments?: boolean
}) => {
  return (
    <Canvas
      style={{
        background:
          'linear-gradient(to top right, hsl(0, 0%, 8%), hsl(52, 0%, 18%))',
      }}
    >
      {camera || (
        <PerspectiveCamera
          makeDefault
          fov={45}
          near={0.1}
          far={1000}
          position={[40, 200, 40]}
          rotation={[radians(60), 0, 0]}
        />
      )}
      {children}

      {orbitControls ? (
        <OrbitControls
          minPolarAngle={radians(0)}
          maxPolarAngle={radians(30)}
          //   minAzimuthAngle={radians(0)}
          //   maxAzimuthAngle={radians(270)}
          minDistance={30}
          maxDistance={180}
        />
      ) : null}

      {/* Road */}

      <Plane
        args={[1000, 24]}
        position={[0, -0.2, 0]}
        rotation={[radians(-90), 0, 0]}
      >
        <meshBasicMaterial color={roadColor} />
      </Plane>

      {/* Cars */}

      <Spawner
        spawnInterval={8.2}
        duration={WORLD_DURATION - 6}
        startPosition={new THREE.Vector3(WORLD_START, 0, -10)}
        endPosition={new THREE.Vector3(WORLD_END, 0, -10)}
      >
        <Car forward={false} searching comment={!hideAllComments && true} />
      </Spawner>
      <Spawner
        spawnInterval={4.3}
        duration={WORLD_DURATION - 12}
        startPosition={new THREE.Vector3(WORLD_START, 0, -6)}
        endPosition={new THREE.Vector3(WORLD_END, 0, -6)}
      >
        <Car forward={false} />
      </Spawner>
      <Spawner
        spawnInterval={7.4}
        duration={WORLD_DURATION - 18}
        startPosition={new THREE.Vector3(WORLD_START, 0, -2)}
        endPosition={new THREE.Vector3(WORLD_END, 0, -2)}
      >
        <Car forward={false} />
      </Spawner>

      <Spawner
        spawnInterval={9.8}
        duration={WORLD_DURATION - 18}
        endPosition={new THREE.Vector3(WORLD_START, 0, 2)}
        startPosition={new THREE.Vector3(WORLD_END, 0, 2)}
      >
        <Car />
      </Spawner>
      <Spawner
        spawnInterval={7}
        duration={WORLD_DURATION - 12}
        endPosition={new THREE.Vector3(WORLD_START, 0, 6)}
        startPosition={new THREE.Vector3(WORLD_END, 0, 6)}
      >
        <Car />
      </Spawner>
      {/* My Car */}
      <group position={new THREE.Vector3(0, 0, 10)}>
        <Car searching comment={!hideAllComments && true} />
      </group>

      {/* Buildings Left */}
      <Spawner
        spawnInterval={3.6}
        duration={WORLD_DURATION}
        startPosition={new THREE.Vector3(WORLD_START, 0, 76)}
        endPosition={new THREE.Vector3(WORLD_END, 0, 76)}
      >
        <BuildingSet />
      </Spawner>
      {/* Buildings Right */}
      <Spawner
        spawnInterval={3.6}
        duration={WORLD_DURATION}
        startPosition={new THREE.Vector3(WORLD_START, 0, -76)}
        endPosition={new THREE.Vector3(WORLD_END, 0, -76)}
      >
        <BuildingSet />
      </Spawner>
    </Canvas>
  )
}
