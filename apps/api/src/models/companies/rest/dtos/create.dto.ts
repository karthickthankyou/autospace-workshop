import { OmitType } from '@nestjs/swagger'
import { CompanyEntity } from '../entity/company.entity'

export class CreateCompany extends OmitType(CompanyEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
