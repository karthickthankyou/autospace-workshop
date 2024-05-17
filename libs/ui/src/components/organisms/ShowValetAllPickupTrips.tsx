import {
  BookingStatus,
  ValetPickupsDocument,
} from '@autospace/network/src/gql/generated'
import { useQuery } from '@apollo/client'
import { useTakeSkip } from '@autospace/util/hooks/pagination'
import { ShowData } from './ShowData'
import { ValetTripCard } from './ValetTripCard'
import { AssignValetButton } from './AssignValetButton'

export const ShowValetAllPickupTrips = () => {
  const { loading, data } = useQuery(ValetPickupsDocument)
  const { setSkip, setTake, skip, take } = useTakeSkip()
  return (
    <ShowData
      loading={loading}
      pagination={{
        setSkip,
        setTake,
        skip,
        take,
        resultCount: data?.valetPickups.length || 0,
        totalCount: data?.valetPickupsTotal || 0,
      }}
    >
      {data?.valetPickups.map((booking) => (
        <ValetTripCard
          key={booking.id}
          booking={{
            id: booking.id,
            time: booking.startTime,
          }}
          start={{
            lat: booking.valetAssignment?.pickupLat,
            lng: booking.valetAssignment?.pickupLng,
          }}
          end={booking.slot.garage.address}
        >
          <AssignValetButton
            bookingId={booking.id}
            status={BookingStatus.ValetAssignedForCheckIn}
          >
            Accept
          </AssignValetButton>
        </ValetTripCard>
      ))}
    </ShowData>
  )
}
