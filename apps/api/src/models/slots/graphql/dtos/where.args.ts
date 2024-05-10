import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class SlotWhereUniqueInput {
  id: number
}

@InputType()
export class EnumSlotTypeFilter {
  @Field(() => $Enums.SlotType, { nullable: true })
  equals?: $Enums.SlotType;
  @Field(() => [$Enums.SlotType], { nullable: true })
  in?: $Enums.SlotType[]
  @Field(() => [$Enums.SlotType], { nullable: true })
  notIn?: $Enums.SlotType[]
  @Field(() => $Enums.SlotType, { nullable: true })
  not?: $Enums.SlotType
}

@InputType()
export class SlotWhereInputStrict
  implements RestrictProperties<SlotWhereInputStrict, Prisma.SlotWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  pricePerHour: FloatFilter
  length: IntFilter
  width: IntFilter
  height: IntFilter

  type: EnumSlotTypeFilter
  garageId: IntFilter
  Garage: GarageRelationFilter
  Bookings: BookingListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SlotWhereInput[]
  OR: SlotWhereInput[]
  NOT: SlotWhereInput[]
}

@InputType()
export class SlotWhereInput extends PartialType(SlotWhereInputStrict) {}

@InputType()
export class SlotListRelationFilter {
  every?: SlotWhereInput
  some?: SlotWhereInput
  none?: SlotWhereInput
}

@InputType()
export class SlotRelationFilter {
  is?: SlotWhereInput
  isNot?: SlotWhereInput
}
