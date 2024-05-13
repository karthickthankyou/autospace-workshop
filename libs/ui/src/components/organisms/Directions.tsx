import { useDebounce } from '@autospace/util/hooks/async'
import { LatLng, LngLatTuple } from '@autospace/util/types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Source, Layer } from 'react-map-gl'

export const Directions = ({
  origin,
  destination,
  setDistance,
  sourceId,
}: {
  origin?: LatLng
  destination?: Partial<LatLng>
  setDistance?: (distance?: number) => void
  sourceId: string
}) => {
  const [coordinates, setCoordinates] = useState<LngLatTuple[]>([])
  const prevDistanceRef = useRef<number | undefined>(undefined)

  const originDebounced = useDebounce(origin, 400)
  const destinationDebounced = useDebounce(destination, 400)

  useEffect(() => {
    if (!originDebounced || !destinationDebounced) {
      setCoordinates([])
      return
    }

    ;(async () => {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/walking/${originDebounced.lng},${originDebounced.lat};${destinationDebounced.lng},${destinationDebounced.lat}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&steps=true&overview=simplified`,
      )
      const data = await response.json()

      const coordinates =
        data?.routes[0]?.legs[0]?.steps?.map(
          (step: { maneuver: { location: any } }) => step.maneuver.location,
        ) || []

      const newDistance = data.routes[0].distance || 0

      setCoordinates(coordinates)

      if (newDistance !== prevDistanceRef.current && setDistance) {
        setDistance(newDistance)
        prevDistanceRef.current = newDistance
      }
    })()
  }, [originDebounced, destinationDebounced])

  const dataOne = useMemo(
    () => ({
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates,
      },
    }),
    [coordinates],
  )

  return (
    <Source id={sourceId} type="geojson" data={dataOne}>
      <Layer
        id={sourceId}
        type="line"
        source="my-data"
        paint={{
          'line-color': 'rgb(0,0,0)',
          'line-width': 2,
        }}
      />
    </Source>
  )
}
