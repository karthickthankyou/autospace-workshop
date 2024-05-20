import { Injectable, NotFoundException } from '@nestjs/common'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingInput } from './dtos/create-booking.input'
import { UpdateBookingInput } from './dtos/update-booking.input'
import { generateSixDigitNumber } from 'src/common/util'
import { SlotType } from '@prisma/client'

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    customerId,
    endTime,
    garageId,
    startTime,
    type,
    vehicleNumber,
    phoneNumber,
    pricePerHour,
    totalPrice,
    valetAssignment,
  }: CreateBookingInput) {
    // Create customer
    const customer = await this.prisma.customer.findUnique({
      where: { uid: customerId },
    })

    if (!customer?.uid) {
      await this.prisma.customer.create({
        data: { uid: customerId },
      })
    }

    const passcode = generateSixDigitNumber().toString()

    let startDate: Date
    let endDate: Date

    // If startTime or endTime are strings, convert them to Date objects
    if (typeof startTime === 'string') {
      startDate = new Date(startTime)
    }
    if (typeof endTime === 'string') {
      endDate = new Date(endTime)
    }

    const slot = await this.getFreeSlot({
      endTime: endDate,
      startTime: startDate,
      garageId,
      type,
    })

    if (!slot) {
      throw new NotFoundException('No slots found.')
    }

    return this.prisma.$transaction(async (tx) => {
      const booking = await tx.booking.create({
        data: {
          endTime: new Date(endTime).toISOString(),
          startTime: new Date(startTime).toISOString(),
          vehicleNumber,
          customerId,
          phoneNumber,
          passcode,
          slotId: slot.id,
          pricePerHour,
          totalPrice,
          ...(valetAssignment
            ? { ValetAssignment: { create: valetAssignment } }
            : null),
        },
      })
      await tx.bookingTimeline.create({
        data: { bookingId: booking.id, status: 'BOOKED' },
      })

      return booking
    })
  }

  findAll(args: FindManyBookingArgs) {
    return this.prisma.booking.findMany(args)
  }

  findOne(args: FindUniqueBookingArgs) {
    return this.prisma.booking.findUnique(args)
  }

  update(updateBookingInput: UpdateBookingInput) {
    const { id, ...data } = updateBookingInput
    return this.prisma.booking.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueBookingArgs) {
    return this.prisma.booking.delete(args)
  }

  getFreeSlot({
    garageId,
    startTime,
    endTime,
    type,
  }: {
    garageId: number
    startTime: string | Date
    endTime: string | Date
    type: SlotType
  }) {
    return this.prisma.slot.findFirst({
      where: {
        garageId: garageId,
        type: type,
        Bookings: {
          none: {
            OR: [
              { startTime: { lt: endTime }, endTime: { gt: startTime } },
              { startTime: { gt: startTime }, endTime: { lt: endTime } },
            ],
          },
        },
      },
    })
  }
}
