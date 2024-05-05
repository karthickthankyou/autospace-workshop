import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingTimelineOrderByRelationAggregateInput } from 'src/models/booking-timelines/graphql/dtos/order-by.args'
import { CustomerOrderByWithRelationInput } from 'src/models/customers/graphql/dtos/order-by.args'
import { SlotOrderByWithRelationInput } from 'src/models/slots/graphql/dtos/order-by.args'
import { ValetAssignmentOrderByWithRelationInput } from 'src/models/valet-assignments/graphql/dtos/order-by.args'

@InputType()
export class BookingOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingOrderByWithRelationInputStrict,
      Prisma.BookingOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  pricePerHour: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  totalPrice: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  startTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  endTime: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  vehicleNumber: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  phoneNumber: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  passcode: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  slotId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  customerId: Prisma.SortOrder
  ValetAssignment: ValetAssignmentOrderByWithRelationInput
  Customer: CustomerOrderByWithRelationInput
  Slot: SlotOrderByWithRelationInput
  BookingTimeline: BookingTimelineOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class BookingOrderByWithRelationInput extends PartialType(
  BookingOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
