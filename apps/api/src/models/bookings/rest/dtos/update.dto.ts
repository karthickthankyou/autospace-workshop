import { PartialType } from '@nestjs/swagger'
import { CreateBooking } from './create.dto'
import { Booking } from '@prisma/client'

export class UpdateBooking extends PartialType(CreateBooking) {
  id: Booking['id']
}
