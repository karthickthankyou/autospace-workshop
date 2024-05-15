import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BookingTimelinesService } from './booking-timelines.service'
import { BookingTimeline } from './entity/booking-timeline.entity'
import {
  FindManyBookingTimelineArgs,
  FindUniqueBookingTimelineArgs,
} from './dtos/find.args'
import { CreateBookingTimelineInput } from './dtos/create-booking-timeline.input'
import { UpdateBookingTimelineInput } from './dtos/update-booking-timeline.input'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@Resolver(() => BookingTimeline)
export class BookingTimelinesResolver {
  constructor(
    private readonly bookingTimelinesService: BookingTimelinesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin', 'manager')
  @Mutation(() => BookingTimeline)
  async createBookingTimeline(
    @Args('createBookingTimelineInput')
    { bookingId, status }: CreateBookingTimelineInput,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      select: {
        Slot: {
          select: {
            Garage: {
              select: {
                Company: {
                  select: { Managers: { select: { uid: true } } },
                },
              },
            },
          },
        },
      },
    })
    checkRowLevelPermission(
      user,
      booking.Slot.Garage.Company.Managers.map((manager) => manager.uid),
    )

    const [updatedBooking, bookingTimeline] = await this.prisma.$transaction([
      this.prisma.booking.update({
        data: { status: status },
        where: { id: bookingId },
      }),
      this.prisma.bookingTimeline.create({
        data: { bookingId, managerId: user.uid, status },
      }),
    ])
    return bookingTimeline
  }

  @Query(() => [BookingTimeline], { name: 'bookingTimelines' })
  findAll(@Args() args: FindManyBookingTimelineArgs) {
    return this.bookingTimelinesService.findAll(args)
  }

  @Query(() => BookingTimeline, { name: 'bookingTimeline' })
  findOne(@Args() args: FindUniqueBookingTimelineArgs) {
    return this.bookingTimelinesService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => BookingTimeline)
  async updateBookingTimeline(
    @Args('updateBookingTimelineInput') args: UpdateBookingTimelineInput,
  ) {
    return this.bookingTimelinesService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => BookingTimeline)
  async removeBookingTimeline(@Args() args: FindUniqueBookingTimelineArgs) {
    return this.bookingTimelinesService.remove(args)
  }
}
