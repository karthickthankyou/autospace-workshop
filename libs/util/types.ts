import { ReactNode } from 'react'

export type Role = 'admin' | 'manager' | 'valet'

export type BaseComponent = {
  children?: ReactNode
  className?: string
}

export type MenuItem = { label: string; href: string }

export type ViewState = {
  latitude: number
  longitude: number
  zoom?: number
}

export type LocationInfo = { placeName: string; latLng: [number, number] }

export type TotalPrice = {
  parkingCharge: number
  valetChargeDropoff: number
  valetChargePickup: number
}

export type LatLng = {
  lat: number
  lng: number
}

export type LngLatTuple = [number, number]
