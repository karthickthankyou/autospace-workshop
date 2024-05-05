import { OmitType } from '@nestjs/swagger'
import { SlotEntity } from '../entity/slot.entity'

export class CreateSlot extends OmitType(SlotEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
