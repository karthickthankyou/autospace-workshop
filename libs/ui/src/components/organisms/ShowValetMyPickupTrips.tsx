import { useTakeSkip } from '@autospace/util/hooks/pagination'
import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  MyPickupTripsDocument,
  SortOrder,
} from '@autospace/network/src/gql/generated'
import { ShowData } from './ShowData'
import { ValetTripCard } from './ValetTripCard'
import { Reveal } from '../molecules/Reveal'
import { AssignValetButton } from './AssignValetButton'

export const ShowValetMyPickupTrips = ({ uid }: { uid: string }) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()

  const { data, loading } = useQuery(MyPickupTripsDocument, {
    variables: {
      skip,
      take,
      orderBy: { startTime: SortOrder.Asc },
      where: {
        BookingTimeline: {
          none: {
            status: BookingStatus.CheckedIn,
          },
        },
        ValetAssignment: {
          is: {
            pickupValetId: { equals: uid },
          },
        },
      },
    },
  })

  return (
    <ShowData
      loading={loading}
      pagination={{
        setSkip,
        setTake,
        skip,
        take,
        resultCount: data?.bookingsForValet.length || 0,
        totalCount: data?.bookingsCount.count || 0,
      }}
    >
      {data?.bookingsForValet.map((booking) => (
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
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-xl font-semibold ">
                {booking.vehicleNumber}
              </div>

              <Reveal
                secret={booking.passcode}
                showIntruction={false}
                className="w-full"
              />
            </div>

            <div className="text-sm">
              {booking.status?.split('_').join(' ')}
            </div>

            {booking.status === BookingStatus.ValetAssignedForCheckIn ? (
              <AssignValetButton
                bookingId={booking.id}
                status={BookingStatus.ValetPickedUp}
              >
                Pickup
              </AssignValetButton>
            ) : null}
          </div>
        </ValetTripCard>
      ))}
    </ShowData>
  )
}
