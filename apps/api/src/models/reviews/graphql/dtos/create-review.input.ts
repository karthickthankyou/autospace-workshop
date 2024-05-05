import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { Review } from '../entity/review.entity'

@InputType()
export class CreateReviewInput extends OmitType(
  Review,
  ['createdAt', 'updatedAt', 'id'],
  InputType,
) {}
