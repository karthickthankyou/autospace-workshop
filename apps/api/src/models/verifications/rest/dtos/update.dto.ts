import { PartialType } from '@nestjs/swagger'
import { CreateVerification } from './create.dto'
import { Verification } from '@prisma/client'

export class UpdateVerification extends PartialType(CreateVerification) {
  garageId: Verification['garageId']
}
