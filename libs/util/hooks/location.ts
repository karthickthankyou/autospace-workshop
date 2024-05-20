import { useEffect, useState } from 'react'
import { LocationInfo } from '../types'
import { useDebounce } from './async'

export const useSearchLocation = () => {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [locationInfo, setLocationInfo] = useState<LocationInfo[]>(() => [])

  const [debouncedSearchText] = useDebounce(searchText, 400)

  useEffect(() => {
    setLoading(true)

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearchText}.json?fuzzyMatch=true&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.features?.map((x: any) => ({
          placeName: x.place_name,
          latLng: [x.center[1], x.center[0]],
        }))

        setLocationInfo(filtered)
      })
      .finally(() => setLoading(false))
  }, [debouncedSearchText])
  return { loading, setLoading, searchText, setSearchText, locationInfo }
}
