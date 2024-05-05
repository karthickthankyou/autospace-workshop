import { Module } from '@nestjs/common'
import { BookingTimelinesService } from './graphql/booking-timelines.service'
import { BookingTimelinesResolver } from './graphql/booking-timelines.resolver'
import { BookingTimelinesController } from './rest/booking-timelines.controller'

@Module({
  providers: [BookingTimelinesResolver, BookingTimelinesService],
  exports: [BookingTimelinesService],
  controllers: [BookingTimelinesController],
})
export class BookingTimelinesModule {}
