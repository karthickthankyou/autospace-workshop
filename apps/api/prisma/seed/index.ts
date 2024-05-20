import { PrismaClient } from '@prisma/client'
import { garages } from './data'

let prisma

async function main() {
  prisma = new PrismaClient()

  for (const garage of garages) {
    await prisma.garage.create({
      data: garage,
    })
  }
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
