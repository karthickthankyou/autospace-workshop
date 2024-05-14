import { LocationInfo } from './types'

export const initialViewState = {
  latitude: 40.7128,
  longitude: -74.006,
  zoom: 11.5,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Chennai, Tamil Nadu, India',
    latLng: [13.0827, 80.2707],
  },
  {
    placeName: 'New York, New York, United States',
    latLng: [40.7128, -74.006],
  },
  {
    placeName: 'London, Greater London, England, United Kingdom',
    latLng: [51.5074, -0.1278],
  },
  {
    placeName: 'Paris, France',
    latLng: [48.8566, 2.3522],
  },
  {
    placeName: 'Berlin, Germany',
    latLng: [52.52, 13.405],
  },
  {
    placeName: 'Sydney, New South Wales, Australia',
    latLng: [-33.8688, 151.2093],
  },
  {
    placeName: 'Rio de Janeiro, Brazil',
    latLng: [-22.9068, -43.1729],
  },
  {
    placeName: 'Cape Town, Western Cape, South Africa',
    latLng: [-33.9249, 18.4241],
  },
  {
    placeName: 'Moscow, Russia',
    latLng: [55.7558, 37.6176],
  },
  {
    placeName: 'Beijing, China',
    latLng: [39.9042, 116.4074],
  },
]

export const VALET_CHARGE_PER_METER = 0.005

export const TAKE_COUNT = 12
