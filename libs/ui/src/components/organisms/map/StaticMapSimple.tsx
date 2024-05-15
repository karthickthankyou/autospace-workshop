import Image from 'next/image'

export const StaticMapSimple = ({
  position,
  padding = [100, 100, 100],
  className = 'w-full shadow-xl aspect-square',
}: {
  position: { lng: number; lat: number }
  padding?: [number, number, number]
  className?: string
}) => {
  if (!position) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }

  const url = `https://api.mapbox.com/styles/v1/iamkarthick/clk4em1h900i201pf3jvuei21/static/pin-s(${position.lng},${position.lat})/${position.lng},${position.lat},9,0/600x600?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`

  return (
    <Image
      src={url}
      alt="Map"
      className={` ${className}`}
      width={200}
      height={200}
    />
  )
}
