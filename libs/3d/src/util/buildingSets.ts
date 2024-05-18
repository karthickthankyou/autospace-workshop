const SIDE_SMALL = 18
const SIDE_MEDIUM = 38
const SIDE_LARGE = 58

export type BuildingSet = {
  position: [number, number, number]
  width: number
  length: number
}

const buildingSet1 = [
  { position: [20, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [0, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [20, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [0, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [20, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [0, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
]

const buildingSet2x2_1x1 = [
  { position: [10, 0, 10], width: SIDE_MEDIUM, length: SIDE_MEDIUM },
  { position: [-20, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [0, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [20, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
]

const buildingSetLShape = [
  { position: [20, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [0, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, 20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [20, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [0, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [20, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
]

const buildingSetWhole = [
  { position: [0, 0, 0], width: SIDE_LARGE, length: SIDE_LARGE },
]

const buildingSetWhole2 = [
  { position: [0, 0, -10], width: SIDE_LARGE, length: SIDE_MEDIUM },
]

const buildingSetWhole3 = [
  { position: [0, 0, -20], width: SIDE_LARGE, length: SIDE_SMALL },
]

const buildingSet4 = [
  { position: [0, 0, 20], width: SIDE_LARGE, length: SIDE_SMALL },

  { position: [20, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },

  { position: [-20, 0, 0], width: SIDE_SMALL, length: SIDE_SMALL },

  { position: [0, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
  { position: [-20, 0, -20], width: SIDE_SMALL, length: SIDE_SMALL },
]

export const BUILDING_SETS = [
  buildingSet1,
  buildingSet2x2_1x1,
  buildingSet4,
  buildingSetLShape,
  buildingSetWhole,
  buildingSetWhole2,
  buildingSetWhole3,
]
