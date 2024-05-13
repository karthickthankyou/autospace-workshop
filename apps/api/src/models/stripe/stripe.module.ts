import { Module } from '@nestjs/common'

import { StripeController } from './stripe.controller'
import StripeService from './stripe.service'
import { BookingsService } from '../bookings/graphql/bookings.service'

@Module({
  controllers: [StripeController],
  providers: [StripeService, BookingsService],
})
export class StripeModule {}
