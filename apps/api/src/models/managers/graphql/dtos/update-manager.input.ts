import { CreateManagerInput } from './create-manager.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Manager } from '@prisma/client'

@InputType()
export class UpdateManagerInput extends PartialType(CreateManagerInput) {
  uid: Manager['uid']
}
