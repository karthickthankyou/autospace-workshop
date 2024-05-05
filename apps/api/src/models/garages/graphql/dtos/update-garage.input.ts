import { CreateGarageInput } from './create-garage.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Garage } from '@prisma/client'

@InputType()
export class UpdateGarageInput extends PartialType(CreateGarageInput) {
  id: Garage['id']
}
