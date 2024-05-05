import { Module } from '@nestjs/common'
import { BookingsService } from './graphql/bookings.service'
import { BookingsResolver } from './graphql/bookings.resolver'
import { BookingsController } from './rest/bookings.controller'

@Module({
  providers: [BookingsResolver, BookingsService],
  exports: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
