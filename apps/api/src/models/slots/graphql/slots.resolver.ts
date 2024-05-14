import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { SlotsService } from './slots.service'
import { ReturnCount, Slot } from './entity/slot.entity'
import { FindManySlotArgs, FindUniqueSlotArgs } from './dtos/find.args'
import { CreateSlotInput } from './dtos/create-slot.input'
import { UpdateSlotInput } from './dtos/update-slot.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Garage } from 'src/models/garages/graphql/entity/garage.entity'
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity'

@Resolver(() => Slot)
export class SlotsResolver {
  constructor(
    private readonly slotsService: SlotsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async createSlot(
    @Args('createSlotInput') args: CreateSlotInput,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.garageId },
      include: { Company: { include: { Managers: true } } },
    })
    checkRowLevelPermission(
      user,
      garage.Company.Managers.map((manager) => manager.uid),
    )
    return this.slotsService.create(args)
  }

  @AllowAuthenticated('manager')
  @Mutation(() => ReturnCount)
  async createManySlots(
    @Args('createSlotInput') args: CreateSlotInput,
    @Args('count', {
      type: () => Number,
    })
    count: number,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.garageId },
      include: {
        Company: {
          include: { Managers: true },
        },
      },
    })

    checkRowLevelPermission(
      user,
      garage.Company.Managers.map((manager) => manager.uid),
    )

    const typeCount = await this.prisma.slot.count({
      where: { garageId: args.garageId, type: args.type },
    })

    const slots = Array.from({ length: count }).map((num, index) => ({
      ...args,
      displayName: `${args.type} ${typeCount + index + 1}`,
    }))

    return this.prisma.slot.createMany({ data: slots })
  }

  @Query(() => [Slot], { name: 'slots' })
  findAll(@Args() args: FindManySlotArgs) {
    return this.slotsService.findAll(args)
  }

  @Query(() => Slot, { name: 'slot' })
  findOne(@Args() args: FindUniqueSlotArgs) {
    return this.slotsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async updateSlot(
    @Args('updateSlotInput') args: UpdateSlotInput,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique({
      where: { id: args.id },
      include: {
        Garage: {
          include: {
            Company: {
              include: { Managers: true },
            },
          },
        },
      },
    })
    checkRowLevelPermission(
      user,
      slot.Garage.Company.Managers.map((man) => man.uid),
    )
    return this.slotsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async removeSlot(
    @Args() args: FindUniqueSlotArgs,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique({
      where: { id: args.where.id },
      include: {
        Garage: {
          include: {
            Company: {
              include: { Managers: true },
            },
          },
        },
      },
    })
    checkRowLevelPermission(
      user,
      slot.Garage.Company.Managers.map((man) => man.uid),
    )
    return this.slotsService.remove(args)
  }

  @ResolveField(() => Garage)
  garage(@Parent() slot: Slot) {
    return this.prisma.garage.findUnique({ where: { id: slot.garageId } })
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() slot: Slot) {
    return this.prisma.booking.findMany({ where: { slotId: slot.id } })
  }
}
