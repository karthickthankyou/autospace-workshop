import { InputType, OmitType, PickType } from '@nestjs/graphql'
import { BookingTimeline } from '../entity/booking-timeline.entity'

@InputType()
export class CreateBookingTimelineInput extends PickType(
  BookingTimeline,
  ['bookingId', 'status'],
  InputType,
) {}
