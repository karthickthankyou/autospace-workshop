import { MouseEventHandler, ReactNode } from 'react'

import { IconMinus, IconParking, IconPlus } from '@tabler/icons-react'

import { useMap } from 'react-map-gl'

export interface IZoomControlsProps {}

const MapControls = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col overflow-hidden gap-0.5 space-y rounded shadow-lg divide-primary-800 backdrop-blur-sm">
    {children}
  </div>
)

const ZoomControlButton = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}) => (
  <button
    className=" hover:bg-white bg-white/40"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
)

const ZoomIn = () => {
  const { current: map } = useMap()

  return (
    <ZoomControlButton onClick={() => map?.zoomIn()}>
      <IconPlus className="w-8 h-8 p-1.5 text-black" />
    </ZoomControlButton>
  )
}

const ZoomOut = () => {
  const { current: map } = useMap()
  return (
    <ZoomControlButton onClick={() => map?.zoomOut()}>
      <IconMinus className="w-8 h-8 p-1.5 text-black" />
    </ZoomControlButton>
  )
}

export const CenterOfMap = ({
  onClick,
  Icon = IconParking,
}: {
  onClick: (latLng: { lng: number; lat: number }) => void
  Icon?: typeof IconParking
}) => {
  const { current: map } = useMap()
  return (
    <ZoomControlButton
      onClick={() => {
        const { lat, lng } = map?.getCenter() as { lng: number; lat: number }
        onClick({ lat, lng })
      }}
    >
      <Icon className="w-8 h-8 p-1.5 text-black" />
    </ZoomControlButton>
  )
}

MapControls.ZoomIn = ZoomIn
MapControls.ZoomOut = ZoomOut
MapControls.CenterOfMap = CenterOfMap

export default MapControls

export const DefaultZoomControls = ({ children }: { children?: ReactNode }) => (
  <MapControls>
    <ZoomIn />
    <ZoomOut />
    {children}
  </MapControls>
)
