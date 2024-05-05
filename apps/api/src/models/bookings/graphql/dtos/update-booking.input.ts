import { CreateBookingInput } from './create-booking.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Booking } from '@prisma/client'

@InputType()
export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  id: Booking['id']
}
