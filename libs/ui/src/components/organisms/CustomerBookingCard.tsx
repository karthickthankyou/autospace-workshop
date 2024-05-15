import { BookingsForCustomerQuery } from '@autospace/network/src/gql/generated'
import { StartEndDateCard } from './DateCard'
import { MapLink } from '../molecules/MapLink'
import { StaticMapSimple } from './map/StaticMapSimple'
import { TitleStrongValue, TitleValue } from '../atoms/TitleValue'
import { Reveal } from '../molecules/Reveal'
import { Accordion } from '../atoms/Accordion'
import { format } from 'date-fns'

export interface IBookingCardProps {
  booking: NonNullable<BookingsForCustomerQuery['bookingsForCustomer']>[number]
}

export const CustomerBookingCard = ({ booking }: IBookingCardProps) => {
  const lat = booking.slot.garage.address?.lat || 0
  const lng = booking.slot.garage.address?.lng || 0

  return (
    <div className="shadow-lg bg-white p-2">
      <div className="flex flex-col gap-2">
        <StartEndDateCard
          startTime={booking.startTime}
          endTime={booking.endTime}
        />
        <MapLink waypoints={[{ lat, lng }]}>
          <StaticMapSimple
            position={{
              lat,
              lng,
            }}
            className="h-full w-full"
          />
        </MapLink>
      </div>
      <div className="grid grid-cols-2 w-full gap-2 mt-2  ">
        <TitleStrongValue title={'Slot'}>
          {booking.slot.displayName}
        </TitleStrongValue>
        <TitleStrongValue title={'Vehicle number'}>
          {booking.vehicleNumber}
        </TitleStrongValue>

        <TitleStrongValue title={'Address'}>
          <div>
            {booking.slot.garage.address?.address}
            <div className="text-gray text-xs">
              {lat.toFixed(2)} {lng.toFixed(2)}
            </div>
          </div>
        </TitleStrongValue>
        <TitleStrongValue title={'Code'}>
          <Reveal secret={booking.passcode || ''} />
        </TitleStrongValue>
      </div>
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
