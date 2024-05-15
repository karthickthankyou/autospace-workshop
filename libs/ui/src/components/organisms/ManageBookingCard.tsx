import { BookingsForGarageQuery } from '@autospace/network/src/gql/generated'
import { TitleStrongValue, TitleValue } from '../atoms/TitleValue'
import { Reveal } from '../molecules/Reveal'
import { StartEndDateCard } from './DateCard'
import { Accordion } from '../atoms/Accordion'
import { format } from 'date-fns'

export interface IManageBookingCardProps {
  booking: BookingsForGarageQuery['bookingsForGarage'][0]
}

export const ManageBookingCard = ({ booking }: IManageBookingCardProps) => {
  return (
    <div className="p-4 space-y-3 bg-white ">
      <div className="flex items-start justify-between">
        <TitleStrongValue title={'Vehicle number'}>
          <div className="text-3xl font-bold">{booking.vehicleNumber}</div>
        </TitleStrongValue>
        <div className="px-1 py-0.5 border border-primary">
          <TitleValue title={'Slot'}>{booking.slot.displayName}</TitleValue>
        </div>
      </div>
      <StartEndDateCard
        startTime={booking.startTime}
        endTime={booking.endTime}
      />
      <TitleStrongValue title={'Code'}>
        <Reveal showIntruction={false} secret={booking.passcode || ''} />
      </TitleStrongValue>

      <Accordion
        defaultOpen={false}
        title={
          <TitleStrongValue title={'Status'}>
            <div className="font-bold">
              {booking.status.split('_').join(' ')}
            </div>
          </TitleStrongValue>
        }
      >
        <div className="flex flex-col gap-2">
          {booking.bookingTimeline.map((timeline) => (
            <div key={timeline.timestamp}>
              <TitleValue title={timeline.status}>
                {format(new Date(timeline.timestamp), 'PPp')}
              </TitleValue>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  )
}
