import { Slot } from '@prisma/client'

const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

const slotRanges = {
  CAR: {
    length: { min: 12, max: 18 },
    width: { min: 8, max: 10 },
    height: { min: 15, max: 20 },
    pricePerHour: { min: 15, max: 25 },
    count: { min: 2, max: 6 },
  },
  HEAVY: {
    length: { min: 22, max: 30 },
    width: { min: 10, max: 18 },
    height: { min: 20, max: 30 },
    pricePerHour: { min: 30, max: 50 },
    count: { min: 2, max: 6 },
  },
  BIKE: {
    length: { min: 6, max: 8 },
    width: { min: 2, max: 3 },
    height: { min: 15, max: 20 },
    pricePerHour: { min: 5, max: 10 },
    count: { min: 2, max: 6 },
  },
  BICYCLE: {
    length: { min: 4, max: 6 },
    width: { min: 1, max: 2 },
    height: { min: 15, max: 20 },
    pricePerHour: { min: 2, max: 5 },
    count: { min: 2, max: 6 },
  },
}

export const generateSlots = ({ type }: Pick<Slot, 'type'>) => {
  const slots = []
  const ranges = slotRanges[type]

  const count = randomRange(ranges.count.min, ranges.count.max)
  const length = randomRange(ranges.length.min, ranges.length.max)
  const width = randomRange(ranges.width.min, ranges.width.max)
  const height = randomRange(ranges.height.min, ranges.height.max)
  const pricePerHour = Math.floor(
    randomRange(ranges.pricePerHour.min, ranges.pricePerHour.max),
  )
  for (let i = 0; i < count; i++) {
    slots.push({
      displayName: `${type} ${i + 1}`,
      pricePerHour,
      length,
      width,
      height,
      type,
    })
  }
  return slots
}
