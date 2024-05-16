import {
  BookingStatus,
  BookingsForGarageDocument,
  QueryMode,
} from '@autospace/network/src/gql/generated'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useTakeSkip } from '@autospace/util/hooks/pagination'
import { ShowData } from './ShowData'
import { ManageBookingCard } from './ManageBookingCard'
import { CheckInOutButton } from './CheckInOutButtons'

export const ShowGarageBookings = ({
  garageId,
  statuses,
  showCheckIn = false,
  showCheckOut = false,
}: {
  garageId: number
  statuses: BookingStatus[]
  showCheckIn?: boolean
  showCheckOut?: boolean
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { take, setTake, skip, setSkip } = useTakeSkip()

  const { data, loading, error } = useQuery(BookingsForGarageDocument, {
    variables: {
      skip,
      take,
      where: {
        status: { in: statuses },
        Slot: {
          is: {
            garageId: { equals: garageId },
          },
        },
        ...(searchTerm && {
          vehicleNumber: {
            contains: searchTerm,
            mode: QueryMode.Insensitive,
          },
        }),
      },
    },
  })

  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <div className="flex justify-start items-center gap-2 w-full max-w-xl  rounded-full shadow-xl bg-white px-4">
          <IconSearch />
          <input
            placeholder="Search vehicle number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow py-4 bg-transparent"
          />
        </div>
      </div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.bookingsForGarage.length,
          totalCount: data?.bookingsCount.count,
          setSkip,
          setTake,
        }}
      >
        {data?.bookingsForGarage.map((booking) => (
          <div key={booking.id}>
            <ManageBookingCard booking={booking} />
            {showCheckIn ? (
              <CheckInOutButton
                status={BookingStatus.CheckedIn}
                buttonText="CHECK IN"
                bookingId={booking.id}
              />
            ) : null}
            {showCheckOut ? (
              <CheckInOutButton
                status={BookingStatus.CheckedOut}
                buttonText="CHECK OUT"
                bookingId={booking.id}
              />
            ) : null}
          </div>
        ))}
      </ShowData>
    </div>
  )
}
