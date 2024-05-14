import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Slot } from '../entity/slot.entity'

@InputType()
export class CreateSlotInput extends OmitType(
  Slot,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {}

@InputType()
export class CreateSlotInputWithoutGarageId extends OmitType(
  CreateSlotInput,
  ['garageId'],
  InputType,
) {
  count: number
}
