import { CreateValetInput } from './create-valet.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Valet } from '@prisma/client'

@InputType()
export class UpdateValetInput extends PartialType(CreateValetInput) {
  uid: Valet['uid']
}
