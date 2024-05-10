import { InputType, ObjectType, PickType } from '@nestjs/graphql'
import { FindManyGarageArgs } from './find.args'
import { Slot } from 'src/models/slots/graphql/entity/slot.entity'

@InputType()
export class DateFilterInput {
  start: string
  end: string
}

@InputType()
export class GarageFilter extends PickType(
  FindManyGarageArgs,
  ['where', 'orderBy', 'skip', 'take'],
  InputType,
) {}

@ObjectType()
export class MinimalSlotGroupBy extends PickType(Slot, [
  'type',
  'pricePerHour',
]) {
  count: number
}
