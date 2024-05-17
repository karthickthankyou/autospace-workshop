import { GaragesQuery } from '@autospace/network/src/gql/generated'
import { ReactNode } from 'react'
import { MapLink } from '../molecules/MapLink'
import { IconTypes } from '../molecules/IconTypes'

export const GarageAdminCard = ({
  children,
  garage,
}: {
  children: ReactNode
  garage: GaragesQuery['garages'][0]
}) => {
  return (
    <div className="p-2 bg-white flex flex-col gap-2">
      <p className="text-xs ">#{garage.id}</p>
      <div className="flex items-start gap-2">
        <h2 className="mb-1 font-semibold">{garage.displayName}</h2>
        <div>
          {garage.verification?.verified ? (
            <span className="px-1 py-0.5 shadow text-xs bg-green-50 ">
              Verified
            </span>
          ) : (
            <span className="px-1 py-0.5 shadow text-xs bg-red-50 ">
              Not Verified
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {garage.address ? (
          <MapLink
            waypoints={[garage.address]}
            className="hover:underline underline-offset-4"
          >
            <p className="text-xs text-gray-700 ">{garage.address?.address}</p>
          </MapLink>
        ) : null}
      </div>
      <div className="mt-2 mb-4 flex gap-3 ">
        {garage.slotCounts.length === 0 ? (
          <div className="text-sm ">No slots.</div>
        ) : null}
        {garage.slotCounts.map((slot, index) => (
          <div key={index} className="py-2 flex gap-1 ">
            {IconTypes[slot.type]}
            <span className="text-gray-500">{slot.count}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">{children}</div>
    </div>
  )
}
