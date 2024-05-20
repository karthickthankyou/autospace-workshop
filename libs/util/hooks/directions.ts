import { LatLng } from '../types'
import { useEffect, useState } from 'react'

export const useMapboxDirections = (
  start?: Partial<LatLng> | null,
  end?: Partial<LatLng> | null,
) => {
  const [data, setData] = useState<[number, number][]>([])
  const [distance, setDistance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!start || !end) {
      setData([])
      setDistance(null)
      return
    }
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&steps=true&overview=simplified`,
        )
        const data = await response.json()
        const coordinates =
          data?.routes[0]?.legs[0]?.steps?.map(
            (step: { maneuver: { location: any } }) => step.maneuver.location,
          ) || []
        setData(coordinates)
        setDistance(data.routes[0].distance)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [start, end])

  return { data, distance, loading, error }
}
