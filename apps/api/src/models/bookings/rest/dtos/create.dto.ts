import { OmitType } from '@nestjs/swagger'
import { BookingEntity } from '../entity/booking.entity'

export class CreateBooking extends OmitType(BookingEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
