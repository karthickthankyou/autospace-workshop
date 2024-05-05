import { OmitType } from '@nestjs/swagger'
import { GarageEntity } from '../entity/garage.entity'

export class CreateGarage extends OmitType(GarageEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
