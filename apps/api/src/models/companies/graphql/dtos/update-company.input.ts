import { CreateCompanyInput } from './create-company.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Company } from '@prisma/client'

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  id: Company['id']
}
