import {
  BookingStatus,
  CreateBookingTimelineDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'
import { useMutation } from '@apollo/client'
import { Button } from '../atoms/Button'

export const CheckInOutButton = ({
  bookingId,
  buttonText,
  status,
}: {
  bookingId: number
  status: BookingStatus
  buttonText: string
}) => {
  const [checkIn, { data, loading }] = useMutation(
    CreateBookingTimelineDocument,
  )
  return (
    <Button
      loading={loading}
      onClick={() => {
        checkIn({
          variables: {
            createBookingTimelineInput: {
              bookingId,
              status,
            },
          },
          awaitRefetchQueries: true,
          refetchQueries: [namedOperations.Query.BookingsForGarage],
        })
      }}
      color="white"
      className="mt-1"
      fullWidth
    >
      {buttonText}
    </Button>
  )
}
