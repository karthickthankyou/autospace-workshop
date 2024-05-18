import { useEffect, useState } from 'react'
import { MathUtils } from 'three'
import { BUILDING_SETS } from '../util/buildingSets'
import { randExp } from '../util'
import { Building } from './Building'

export const BuildingSet = ({
  minHeight = 2,
  maxHeight = 20,
}: {
  minHeight?: number
  maxHeight?: number
}) => {
  const [buildingSetIndex, setBuildingSetIndex] = useState<number>(0)
  const [floors, setFloors] = useState<number[]>([])

  useEffect(() => {
    setBuildingSetIndex(MathUtils.randInt(0, BUILDING_SETS.length - 1))

    setFloors(
      BUILDING_SETS[buildingSetIndex].map(() => {
        const randHeight = randExp(minHeight, maxHeight, 7)
        return Math.floor(randHeight)
      }),
    )
  }, [])

  return (
    <group>
      {BUILDING_SETS[buildingSetIndex].map(({ length, position, width }, i) => (
        <Building
          position={position.map((pos) => pos * 2) as [number, number, number]}
          size={[width * 2, length * 2]}
          floors={floors[i]}
        />
      ))}
    </group>
  )
}
