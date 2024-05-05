import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Address } from '../entity/address.entity'

@InputType()
export class CreateAddressInput extends OmitType(
  Address,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {}
