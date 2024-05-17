import { IsAdmin } from '@autospace/ui/src/components/organisms/IsAdmin'
import { AdminHome } from '@autospace/ui/src/components/templates/AdminHome'

export default function Home() {
  return (
    <main>
      <IsAdmin>
        <AdminHome />
      </IsAdmin>
    </main>
  )
}
