import { ManageValets } from '@autospace/ui/src/components/templates/ManageValets'
import { IsLoggedIn } from '@autospace/ui/src/components/organisms/IsLoggedIn'

export default function Page() {
  return (
    <IsLoggedIn>
      <ManageValets />
    </IsLoggedIn>
  )
}
