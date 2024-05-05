import { OmitType } from '@nestjs/swagger'
import { CustomerEntity } from '../entity/customer.entity'

export class CreateCustomer extends OmitType(CustomerEntity, [
  'createdAt',
  'updatedAt',
]) {}
