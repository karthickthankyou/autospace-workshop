export const radians = (degrees: number) => degrees * (Math.PI / 180)

export const randExp = (min = 0, max = 10, exponent = 4): number => {
  const randomValue = Math.random()
  const expValue = Math.pow(randomValue, exponent)
  const range = max - min

  return min + range * expValue
}
