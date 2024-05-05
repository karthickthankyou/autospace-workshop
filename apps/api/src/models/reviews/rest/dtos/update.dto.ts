import { PartialType } from '@nestjs/swagger'
import { CreateReview } from './create.dto'
import { Review } from '@prisma/client'

export class UpdateReview extends PartialType(CreateReview) {
  id: Review['id']
}
