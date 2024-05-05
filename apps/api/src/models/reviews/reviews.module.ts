import { Module } from '@nestjs/common'
import { ReviewsService } from './graphql/reviews.service'
import { ReviewsResolver } from './graphql/reviews.resolver'
import { ReviewsController } from './rest/reviews.controller'

@Module({
  providers: [ReviewsResolver, ReviewsService],
  exports: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
