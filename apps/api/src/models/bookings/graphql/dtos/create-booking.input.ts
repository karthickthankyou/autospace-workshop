import { Field, Float, InputType, OmitType, PickType } from '@nestjs/graphql'
import { Booking } from '../entity/booking.entity'
import { Garage, SlotType } from '@prisma/client'
import { CreateValetAssignmentInputWithoutBookingId } from 'src/models/valet-assignments/graphql/dtos/create-valet-assignment.input'

@InputType()
export class CreateBookingInput extends PickType(
  Booking,
  ['customerId', 'endTime', 'startTime', 'vehicleNumber', 'phoneNumber'],
  InputType,
) {
  garageId: Garage['id']
  @Field(() => SlotType)
  type: SlotType

  @Field(() => Float)
  pricePerHour?: number
  @Field(() => Float)
  totalPrice?: number

  valetAssignment?: CreateValetAssignmentInputWithoutBookingId
}
