import { LatLng } from '@autospace/util/types'
import { IconMap2 } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface IMapLinkProps {
  waypoints: LatLng[]
  children?: ReactNode
  className?: string
}

export const MapLink = ({
  waypoints,
  children = <IconMap2 />,
  className,
}: IMapLinkProps) => {
  if (waypoints.length === 0) {
    return null
  }

  if (waypoints.length === 1) {
    const { lat, lng } = waypoints[0]
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

    return (
      <Link
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Link>
    )
  }

  const origin = waypoints[0]
  const destination = waypoints[waypoints.length - 1]
  const waypointsParam = waypoints
    .slice(1, -1)
    .map(({ lat, lng }) => `${lat},${lng}`)
    .join('|')

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&waypoints=${waypointsParam}`
  return (
    <Link
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  )
}
