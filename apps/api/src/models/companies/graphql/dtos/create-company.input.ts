import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Company } from '../entity/company.entity'

@InputType()
export class CreateCompanyInput extends OmitType(
  Company,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {
  managerId: string
}
