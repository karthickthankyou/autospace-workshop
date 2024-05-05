import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateBookingTimeline } from './dtos/create.dto'
import { BookingTimelineQueryDto } from './dtos/query.dto'
import { UpdateBookingTimeline } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { BookingTimelineEntity } from './entity/booking-timeline.entity'

@ApiTags('booking-timelines')
@Controller('booking-timelines')
export class BookingTimelinesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BookingTimelineEntity })
  @Post()
  create(
    @Body() createBookingTimelineDto: CreateBookingTimeline,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createBookingTimelineDto.managerId)
    return this.prisma.bookingTimeline.create({
      data: createBookingTimelineDto,
    })
  }

  @ApiOkResponse({ type: [BookingTimelineEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: BookingTimelineQueryDto) {
    return this.prisma.bookingTimeline.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: BookingTimelineEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.bookingTimeline.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: BookingTimelineEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookingTimelineDto: UpdateBookingTimeline,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, bookingTimeline.managerId)
    return this.prisma.bookingTimeline.update({
      where: { id },
      data: updateBookingTimelineDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, bookingTimeline.managerId)
    return this.prisma.bookingTimeline.delete({ where: { id } })
  }
}
