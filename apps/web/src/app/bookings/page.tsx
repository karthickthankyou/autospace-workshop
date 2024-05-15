import { ListCustomerBookings } from '@autospace/ui/src/components/templates/ListCustomerBookings'
import { IsLoggedIn } from '@autospace/ui/src/components/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ListCustomerBookings />
    </IsLoggedIn>
  )
}
