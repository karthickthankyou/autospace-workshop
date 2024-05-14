import { Injectable } from '@nestjs/common'
import { FindManyGarageArgs, FindUniqueGarageArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateGarageInput } from './dtos/create-garage.input'
import { UpdateGarageInput } from './dtos/update-garage.input'
import { CreateSlotInputWithoutGarageId } from 'src/models/slots/graphql/dtos/create-slot.input'
import { Prisma, SlotType } from '@prisma/client'

@Injectable()
export class GaragesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    Address,
    companyId,
    description,
    displayName,
    images,
    Slots,
  }: CreateGarageInput & { companyId: number }) {
    // Check if any slot has a count greater than 20
    if (Slots.some((slot) => slot.count > 10)) {
      throw new Error('Slot count cannot be more than 20 for any slot type.')
    }
    return this.prisma.$transaction(async (tx) => {
      const createdGarage = await tx.garage.create({
        data: {
          Address: { create: Address },
          companyId,
          description,
          displayName,
          images,
        },
      })
      const slotsByType = this.groupSlotsByType(Slots, createdGarage.id)

      const createSlots = await tx.slot.createMany({
        data: slotsByType,
      })

      return createdGarage
    })
  }

  findAll(args: FindManyGarageArgs) {
    return this.prisma.garage.findMany(args)
  }

  findOne(args: FindUniqueGarageArgs) {
    return this.prisma.garage.findUnique(args)
  }

  update(updateGarageInput: UpdateGarageInput) {
    const { id, Address, Slots, ...data } = updateGarageInput
    return this.prisma.garage.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueGarageArgs) {
    return this.prisma.garage.delete(args)
  }

  groupSlotsByType(
    slots: CreateSlotInputWithoutGarageId[],
    garageId: number,
  ): Prisma.SlotCreateManyInput[] {
    const slotsByType = []
    const slotCounts = {
      CAR: 0,
      HEAVY: 0,
      BIKE: 0,
      BICYCLE: 0,
    }

    slots.forEach(({ count, ...slot }) => {
      for (let i = 0; i < count; i++) {
        slotsByType.push({
          ...slot,
          displayName: `${slot.type} ${slotCounts[slot.type]}`,
          garageId,
        })
        slotCounts[slot.type]++
      }
    })

    return slotsByType
  }
}
