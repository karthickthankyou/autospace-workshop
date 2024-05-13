'use client'
import { IsLoggedIn } from '@autospace/ui/src/components/organisms/IsLoggedIn'
import { IsManager } from '@autospace/ui/src/components/organisms/IsManager'

export default function Home() {
  return (
    <IsLoggedIn>
      <IsManager>Hello Manager</IsManager>
    </IsLoggedIn>
  )
}
