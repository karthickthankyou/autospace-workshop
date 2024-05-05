import { OmitType } from '@nestjs/swagger'
import { ReviewEntity } from '../entity/review.entity'

export class CreateReview extends OmitType(ReviewEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
