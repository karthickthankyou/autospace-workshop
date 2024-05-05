import { OmitType } from '@nestjs/swagger'
import { AddressEntity } from '../entity/address.entity'

export class CreateAddress extends OmitType(AddressEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
