import { InputType, PickType } from '@nestjs/graphql'
import { Customer } from '../entity/customer.entity'

@InputType()
export class CreateCustomerInput extends PickType(
  Customer,
  ['uid', 'displayName'],
  InputType,
) {}
