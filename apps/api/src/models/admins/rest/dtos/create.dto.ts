import { OmitType } from '@nestjs/swagger'
import { AdminEntity } from '../entity/admin.entity'

export class CreateAdmin extends OmitType(AdminEntity, [
  'createdAt',
  'updatedAt',
]) {}
