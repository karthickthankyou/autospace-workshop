import { OmitType } from '@nestjs/swagger'
import { ManagerEntity } from '../entity/manager.entity'

export class CreateManager extends OmitType(ManagerEntity, [
  'createdAt',
  'updatedAt',
]) {}
