import { OmitType } from '@nestjs/swagger'
import { BookingTimelineEntity } from '../entity/booking-timeline.entity'

export class CreateBookingTimeline extends OmitType(BookingTimelineEntity, [
  'id',
]) {}
