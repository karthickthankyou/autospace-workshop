import { FormTypeCreateGarage } from '@autospace/forms/src/createGarage'
import { ViewState } from '@autospace/util/types'
import { useEffect } from 'react'
import { useWatch, useFormContext, useFieldArray } from 'react-hook-form'
import { Marker } from '../organisms/map/MapMarker'
import { ParkingIcon } from '../atoms/ParkingIcon'
import { initialViewState } from '@autospace/util/constants'
import { dividerClasses } from '@mui/material'
import { Accordion } from '../atoms/Accordion'
import { Button } from '../atoms/Button'
import { IconPlus } from '@tabler/icons-react'
import { SlotType } from '@autospace/network/src/gql/generated'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { HtmlSelect } from '../atoms/HtmlSelect'
import { HtmlInput } from '../atoms/HtmlInput'

export const GarageMapMarker = () => {
  const { location } = useWatch<FormTypeCreateGarage>()
  const { setValue } = useFormContext<FormTypeCreateGarage>()

  return (
    <Marker
      pitchAlignment="auto"
      longitude={location?.lng || 0}
      latitude={location?.lat || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('location.lat', lat || 0)
        setValue('location.lng', lng || 0)
      }}
    >
      <ParkingIcon />
    </Marker>
  )
}

export const AddSlots = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTypeCreateGarage>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `slotTypes`,
  })

  const { slotTypes } = useWatch<FormTypeCreateGarage>()
  return (
    <div>
      {fields.map((item, slotIndex) => (
        <Accordion
          defaultOpen
          key={item.id}
          title={
            <div>
              <div>
                {' '}
                {slotTypes?.[slotIndex]?.type} x {slotTypes?.[slotIndex]?.count}
              </div>
            </div>
          }
        >
          <div className={`flex justify-end my-2`}>
            <Button
              variant="text"
              size="none"
              className="text-xs text-gray-600 underline underline-offset-2"
              onClick={() => {
                remove(slotIndex)
              }}
            >
              remove slot type
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <HtmlLabel
              title="Vehicle type"
              error={errors.slotTypes?.[slotIndex]?.type?.toString()}
            >
              <HtmlSelect
                placeholder="vehicle type"
                {...register(`slotTypes.${slotIndex}.type`)}
              >
                {Object.values(SlotType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </HtmlSelect>
            </HtmlLabel>
            <HtmlLabel
              title="Price/hr"
              optional
              error={errors.slotTypes?.[slotIndex]?.pricePerHour?.message}
            >
              <HtmlInput
                type="number"
                placeholder="Price per hour"
                {...register(`slotTypes.${slotIndex}.pricePerHour`, {
                  valueAsNumber: true,
                })}
              />
            </HtmlLabel>

            <HtmlLabel
              title="Number of slots"
              optional
              error={errors.slotTypes?.[slotIndex]?.count?.message}
            >
              <HtmlInput
                type="number"
                placeholder="Enter the number of slots"
                {...register(`slotTypes.${slotIndex}.count`, {
                  valueAsNumber: true,
                })}
              />
            </HtmlLabel>

            <HtmlLabel
              title="Length"
              optional
              error={errors.slotTypes?.[slotIndex]?.length?.message}
            >
              <HtmlInput
                type="number"
                placeholder="Enter the description"
                {...register(`slotTypes.${slotIndex}.length`, {
                  valueAsNumber: true,
                })}
              />
            </HtmlLabel>
            <HtmlLabel
              title="Width"
              optional
              error={errors.slotTypes?.[slotIndex]?.width?.message}
            >
              <HtmlInput
                type="number"
                placeholder="Enter the description"
                {...register(`slotTypes.${slotIndex}.width`, {
                  valueAsNumber: true,
                })}
              />
            </HtmlLabel>
            <HtmlLabel
              title="Height"
              optional
              error={errors.slotTypes?.[slotIndex]?.height?.message}
            >
              <HtmlInput
                type="number"
                placeholder="Enter the description"
                {...register(`slotTypes.${slotIndex}.height`, {
                  valueAsNumber: true,
                })}
              />
            </HtmlLabel>
          </div>
        </Accordion>
      ))}
      <Button
        className="flex items-center justify-center w-full py-2 text-xs border border-dashed"
        variant="text"
        size="none"
        onClick={() => {
          append({
            length: 10,
            width: 10,
            height: 10,
            pricePerHour: 20,
            count: 5,
            type: SlotType.Car,
          })
        }}
      >
        <IconPlus className="w-4 h-4" /> Add slots
      </Button>
    </div>
  )
}
