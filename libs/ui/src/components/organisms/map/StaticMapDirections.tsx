import { LatLng } from '@autospace/util/types'
import polyline from '@mapbox/polyline'
import Image from 'next/image'

export const StaticMapDirections = ({
  start,
  end,
  padding = [100, 100, 100],
  coordinates,
  className = 'w-full shadow-xl aspect-square',
}: {
  start: LatLng
  end: LatLng
  padding?: [number, number, number]
  coordinates: [number, number][]
  className?: string
}) => {
  if (!coordinates.length) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }

  const encodedPolyline = polyline.fromGeoJSON({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates,
    },
    properties: {},
  })

  const boundingBox = [
    Math.min(start.lng, end.lng),
    Math.min(start.lat, end.lat),
    Math.max(start.lng, end.lng),
    Math.max(start.lat, end.lat),
  ].join(',')

  const paddingString = padding.join(',')

  const url = `https://api.mapbox.com/styles/v1/iamkarthick/clk4em1h900i201pf3jvuei21/static/pin-s-a+000(${
    start.lng
  },${start.lat}),pin-s-b+000(${end.lng},${
    end.lat
  }),path-2+000(${encodeURIComponent(
    encodedPolyline,
  )})/[${boundingBox}]/600x600?padding=${paddingString}&access_token=${
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  }`

  return (
    <Image
      width={300}
      height={300}
      src={url}
      alt="Map"
      className={` ${className}`}
    />
  )
}
