import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { GarageOrderByWithRelationInput } from 'src/models/garages/graphql/dtos/order-by.args'

@InputType()
export class SlotOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      SlotOrderByWithRelationInputStrict,
      Prisma.SlotOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  pricePerHour: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  length: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  width: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  height: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  type: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  garageId: Prisma.SortOrder
  Garage: GarageOrderByWithRelationInput
  Bookings: BookingOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class SlotOrderByWithRelationInput extends PartialType(
  SlotOrderByWithRelationInputStrict,
) {}

@InputType()
export class SlotOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
