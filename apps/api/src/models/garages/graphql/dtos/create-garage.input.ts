import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Garage } from '../entity/garage.entity'

@InputType()
export class CreateGarageInput extends OmitType(
  Garage,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {}
