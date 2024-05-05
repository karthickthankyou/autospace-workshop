import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Booking as BookingType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.BookingStatus, {
  name: 'BookingStatus',
})

@ObjectType()
export class Booking implements RestrictProperties<Booking, BookingType> {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  pricePerHour: number
  @Field({ nullable: true })
  totalPrice: number
  startTime: Date
  endTime: Date
  vehicleNumber: string
  @Field({ nullable: true })
  phoneNumber: string
  @Field({ nullable: true })
  passcode: string
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus
  slotId: number
  customerId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
