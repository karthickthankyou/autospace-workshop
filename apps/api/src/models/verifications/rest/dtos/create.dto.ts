import { OmitType } from '@nestjs/swagger'
import { VerificationEntity } from '../entity/verification.entity'

export class CreateVerification extends OmitType(VerificationEntity, [
  'createdAt',
  'updatedAt',
]) {}
