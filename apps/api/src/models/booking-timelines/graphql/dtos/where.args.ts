import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class BookingTimelineWhereUniqueInput {
  id: number
}

@InputType()
export class BookingTimelineWhereInputStrict
  implements
    RestrictProperties<
      BookingTimelineWhereInputStrict,
      Prisma.BookingTimelineWhereInput
    >
{
  id: IntFilter
  timestamp: DateTimeFilter
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus
  bookingId: IntFilter
  valetId: StringFilter
  managerId: StringFilter
  Booking: BookingRelationFilter
  Valet: ValetRelationFilter
  Manager: ManagerRelationFilter

  AND: BookingTimelineWhereInput[]
  OR: BookingTimelineWhereInput[]
  NOT: BookingTimelineWhereInput[]
}

@InputType()
export class BookingTimelineWhereInput extends PartialType(
  BookingTimelineWhereInputStrict,
) {}

@InputType()
export class BookingTimelineListRelationFilter {
  every?: BookingTimelineWhereInput
  some?: BookingTimelineWhereInput
  none?: BookingTimelineWhereInput
}

@InputType()
export class BookingTimelineRelationFilter {
  is?: BookingTimelineWhereInput
  isNot?: BookingTimelineWhereInput
}
