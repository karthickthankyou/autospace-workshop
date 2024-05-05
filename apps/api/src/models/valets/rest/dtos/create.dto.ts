import { OmitType } from '@nestjs/swagger'
import { ValetEntity } from '../entity/valet.entity'

export class CreateValet extends OmitType(ValetEntity, [
  'createdAt',
  'updatedAt',
]) {}
