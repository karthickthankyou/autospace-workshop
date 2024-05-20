import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ValetsService } from './valets.service'
import { Valet } from './entity/valet.entity'
import { FindManyValetArgs, FindUniqueValetArgs } from './dtos/find.args'
import { CreateValetInput } from './dtos/create-valet.input'
import { UpdateValetInput } from './dtos/update-valet.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { ValetWhereInput } from './dtos/where.args'
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity'
import { PaginationInput } from 'src/common/dtos/common.input'
import { BookingStatus } from '@prisma/client'
import { BadGatewayException } from '@nestjs/common'

@Resolver(() => Valet)
export class ValetsResolver {
  constructor(
    private readonly valetsService: ValetsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Valet)
  async createValet(
    @Args('createValetInput') args: CreateValetInput,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findFirst({
      where: { Managers: { some: { uid: user.uid } } },
    })

    if (!company) {
      throw new BadGatewayException('You do not have a company.')
    }
    return this.valetsService.create({ ...args, companyId: company.id })
  }

  @Query(() => [Valet], { name: 'valets' })
  findAll(@Args() args: FindManyValetArgs) {
    return this.valetsService.findAll(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async assignValet(
    @Args('bookingId') bookingId: number,
    @Args('status') status: BookingStatus,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      select: {
        Slot: {
          select: {
            Garage: {
              select: {
                Company: { select: { Managers: true, Valets: true } },
              },
            },
          },
        },
      },
    })

    checkRowLevelPermission(user, [
      ...booking.Slot.Garage.Company.Managers.map((manager) => manager.uid),
      ...booking.Slot.Garage.Company.Valets.map((valet) => valet.uid),
    ])

    const [updatedBooking, bookingTimeline] = await this.prisma.$transaction([
      this.prisma.booking.update({
        where: { id: bookingId },
        data: {
          status,
          ...(status === BookingStatus.VALET_ASSIGNED_FOR_CHECK_IN && {
            ValetAssignment: {
              update: { pickupValetId: user.uid },
            },
          }),
          ...(status === BookingStatus.VALET_ASSIGNED_FOR_CHECK_OUT && {
            ValetAssignment: {
              update: { returnValetId: user.uid },
            },
          }),
        },
      }),
      this.prisma.bookingTimeline.create({
        data: {
          bookingId,
          valetId: user.uid,
          status,
        },
      }),
    ])

    return updatedBooking
  }

  @AllowAuthenticated('manager', 'admin')
  @Query(() => [Valet], { name: 'companyValets' })
  async companyValets(
    @Args() args: FindManyValetArgs,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findFirst({
      where: { Managers: { some: { uid: user.uid } } },
    })
    return this.valetsService.findAll({
      ...args,
      where: { ...args.where, companyId: { equals: company.id } },
    })
  }

  @AllowAuthenticated()
  @Query(() => Number)
  async companyValetsTotal(
    @Args('where', { nullable: true }) where: ValetWhereInput,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findFirst({
      where: { Managers: { some: { uid: user.uid } } },
    })

    return this.prisma.valet.count({
      where: { ...where, companyId: { equals: company.id } },
    })
  }

  @Query(() => Valet, { name: 'valet' })
  findOne(@Args() args: FindUniqueValetArgs) {
    return this.valetsService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Valet, { name: 'valetMe', nullable: true })
  valetMe(@GetUser() user: GetUserType) {
    return this.valetsService.findOne({ where: { uid: user.uid } })
  }

  @AllowAuthenticated('valet')
  @Query(() => [Booking], { name: 'valetPickups' })
  async valetPickups(
    @Args() { skip, take }: PaginationInput,
    @GetUser() user: GetUserType,
  ) {
    const valet = await this.valetsService.validValet(user.uid)
    return this.prisma.booking.findMany({
      skip,
      take,
      where: {
        Slot: { Garage: { companyId: valet.companyId } },
        ValetAssignment: {
          pickupLat: { not: undefined },
          pickupValetId: null,
        },
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => Number)
  async valetPickupsTotal(@GetUser() user: GetUserType) {
    const valet = await this.valetsService.validValet(user.uid)
    return this.prisma.booking.count({
      where: {
        Slot: { Garage: { companyId: valet.companyId } },
        ValetAssignment: {
          pickupLat: { not: undefined },
          pickupValetId: null,
        },
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => [Booking], { name: 'valetDrops' })
  async valetDrops(
    @Args() { skip, take }: PaginationInput,
    @GetUser() user: GetUserType,
  ) {
    const valet = await this.valetsService.validValet(user.uid)

    return this.prisma.booking.findMany({
      skip,
      take,
      where: {
        Slot: { Garage: { companyId: valet.companyId } },
        ValetAssignment: {
          returnLat: { not: null },
          returnValetId: null,
        },
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => Number)
  async valetDropsTotal(@GetUser() user: GetUserType) {
    const valet = await this.valetsService.validValet(user.uid)

    return this.prisma.booking.count({
      where: {
        Slot: { Garage: { companyId: valet.companyId } },
        ValetAssignment: {
          returnLat: { not: null },
          returnValetId: null,
        },
      },
    })
  }

  @AllowAuthenticated()
  @Mutation(() => Valet)
  async updateValet(
    @Args('updateValetInput') args: UpdateValetInput,
    @GetUser() user: GetUserType,
  ) {
    const valet = await this.prisma.valet.findUnique({
      where: { uid: args.uid },
    })
    checkRowLevelPermission(user, valet.uid)
    return this.valetsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Valet)
  async removeValet(
    @Args() args: FindUniqueValetArgs,
    @GetUser() user: GetUserType,
  ) {
    const valet = await this.prisma.valet.findUnique(args)
    checkRowLevelPermission(user, valet.uid)
    return this.valetsService.remove(args)
  }
}
