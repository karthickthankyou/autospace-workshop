import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByWithRelationInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { ValetOrderByWithRelationInput } from 'src/models/valets/graphql/dtos/order-by.args'

@InputType()
export class ValetAssignmentOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ValetAssignmentOrderByWithRelationInputStrict,
      Prisma.ValetAssignmentOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  bookingId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  pickupLat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  pickupLng: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  returnLat: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  returnLng: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  pickupValetId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  returnValetId: Prisma.SortOrder
  PickupValet: ValetOrderByWithRelationInput
  ReturnValet: ValetOrderByWithRelationInput
  Booking: BookingOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ValetAssignmentOrderByWithRelationInput extends PartialType(
  ValetAssignmentOrderByWithRelationInputStrict,
) {}

@InputType()
export class ValetAssignmentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
