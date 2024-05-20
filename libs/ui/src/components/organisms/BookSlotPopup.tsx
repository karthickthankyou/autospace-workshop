'use client'
import { FormTypeBookSlot } from '@autospace/forms/src/bookSlot'
import { loadStripe } from '@stripe/stripe-js'

import {
  CreateBookingInput,
  SearchGaragesQuery,
} from '@autospace/network/src/gql/generated'
import { useFormContext, useWatch, Controller } from 'react-hook-form'
import { Form } from '../atoms/Form'
import { Badge } from '../atoms/Badge'
import { AutoImageChanger } from './AutoImageChanger'
import { DateRangeBookingInfo } from '../molecules/DateRangeBookingInfo'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { Radio, RadioGroup } from '@headlessui/react'
import { IconTypes } from '../molecules/IconTypes'
import { FormError } from '../atoms/FormError'
import { HtmlInput } from '../atoms/HtmlInput'
import { toLocalISOString } from '@autospace/util/date'
import { useTotalPrice } from '@autospace/util/hooks/price'
import { CostTitleValue } from '../molecules/CostTitleValue'
import { Button } from '../atoms/Button'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { TotalPrice } from '@autospace/util/types'
import { ManageValets } from './ManageValets'
import { toast } from '../molecules/Toast'

export const BookSlotPopup = ({
  garage,
}: {
  garage: SearchGaragesQuery['searchGarages'][0]
}) => {
  const session = useSession()
  const uid = session.data?.user?.uid
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormTypeBookSlot>()

  const { startTime, endTime, phoneNumber, type, valet, vehicleNumber } =
    useWatch<FormTypeBookSlot>()

  const pricePerHour = garage.availableSlots.find(
    (slot) => slot.type === type,
  )?.pricePerHour

  const totalPriceObj = useTotalPrice({
    pricePerHour,
  })

  const totalPrice =
    totalPriceObj.parkingCharge +
    totalPriceObj.valetChargeDropoff +
    totalPriceObj.valetChargePickup

  const [booking, setBooking] = useState(false)

  return (
    <div className="flex gap-2 text-left border-t-2 border-white bg-white/50 backdrop-blur-sm">
      <Form
        onSubmit={handleSubmit(async (data) => {
          if (!uid) {
            alert('You are not logged in.')
            return
          }
          const bookingData: CreateBookingInput = {
            phoneNumber: data.phoneNumber,
            customerId: uid,
            endTime: data.endTime,
            startTime: data.startTime,
            type: data.type,
            garageId: garage.id,
            vehicleNumber: data.vehicleNumber,
            totalPrice,
            pricePerHour,
            ...(data.valet?.pickupInfo && data.valet?.dropoffInfo
              ? {
                  valetAssignment: {
                    pickupLat: data.valet?.pickupInfo?.lat,
                    pickupLng: data.valet?.pickupInfo?.lng,
                    returnLat: data.valet?.dropoffInfo?.lat,
                    returnLng: data.valet?.dropoffInfo?.lng,
                  },
                }
              : null),
          }

          try {
            setBooking(true)
            // Create booking session
            const res = await createBookingSession(
              uid!,
              totalPriceObj,
              bookingData,
            )
          } catch (error) {
            toast('An error occurred while creating the booking session.')
          } finally {
            setBooking(false)
          }
        })}
      >
        <div className="flex items-start gap-2">
          <div className="mb-2 text-lg font-bold">{garage.displayName}</div>
          {garage.verification?.verified ? (
            <Badge variant="green" size="sm">
              Verified
            </Badge>
          ) : (
            <Badge variant="gray" size="sm">
              Not verified
            </Badge>
          )}
        </div>
        <div className="mb-2 text-xl font-extralight">
          {garage.address?.address}
        </div>
        <AutoImageChanger
          images={garage.images || []}
          durationPerImage={10000}
          aspectRatio="aspect-video"
          noAutoChange
        />
        <DateRangeBookingInfo startTime={startTime} endTime={endTime} />

        <div className="flex flex-wrap gap-2 mt-2">
          <HtmlLabel title="Slot type" error={errors.type?.message}>
            <Controller
              name="type"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <RadioGroup
                    value={value || ''}
                    onChange={onChange}
                    className="flex w-full gap-2"
                    defaultValue={''}
                  >
                    {garage.availableSlots.map((slot) => (
                      <div
                        key={slot.type}
                        className="flex flex-wrap items-center gap-2 bg-white"
                      >
                        <Radio key={slot.type} value={slot.type}>
                          {({ checked }) => (
                            <div
                              className={`cursor-default border-2 p-2 ${
                                checked
                                  ? 'border-primary-500 shadow-md'
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {slot.type ? IconTypes[slot.type] : null}
                                <div>
                                  <span className="text-lg font-bold">
                                    ${slot.pricePerHour}
                                  </span>
                                  /hr
                                </div>
                              </div>

                              <div className="text-gray-600">
                                {slot.count} open
                              </div>
                            </div>
                          )}
                        </Radio>
                      </div>
                    ))}
                  </RadioGroup>
                )
              }}
            />
          </HtmlLabel>
        </div>
        {!type ? <FormError error="Set type" /> : null}

        <HtmlLabel title="Start time" error={errors.startTime?.message}>
          <HtmlInput
            type="datetime-local"
            min={toLocalISOString(new Date()).slice(0, 16)}
            {...register('startTime')}
          />
        </HtmlLabel>
        <HtmlLabel title="End time" error={errors.endTime?.message}>
          <HtmlInput
            min={toLocalISOString(new Date()).slice(0, 16)}
            type="datetime-local"
            {...register('endTime')}
          />
        </HtmlLabel>

        <HtmlLabel title="Vehicle number" error={errors.vehicleNumber?.message}>
          <HtmlInput placeholder="KA01AB1234" {...register('vehicleNumber')} />
        </HtmlLabel>
        <HtmlLabel title="Phone number" error={errors.phoneNumber?.message}>
          <HtmlInput placeholder="+910000000000" {...register('phoneNumber')} />
        </HtmlLabel>
        <ManageValets garage={garage} />

        {totalPriceObj ? (
          <div className="mt-4">
            <CostTitleValue
              title="Parking"
              price={totalPriceObj.parkingCharge}
            />
            <CostTitleValue
              title="Valet Pickup"
              price={totalPriceObj.valetChargePickup}
            />
            <CostTitleValue
              title="Valet Dropoff"
              price={totalPriceObj.valetChargeDropoff}
            />

            <CostTitleValue title="Total" price={totalPrice} />
          </div>
        ) : null}

        <Button loading={booking} type="submit" className="w-full mt-2">
          Book now
        </Button>
      </Form>
    </div>
  )
}

export const createBookingSession = async (
  uid: string,
  totalPriceObj: TotalPrice,
  bookingData: CreateBookingInput,
) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalPriceObj,
        uid,
        bookingData,
      }),
    })
    const checkoutSession = await response.json()

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    const stripe = await loadStripe(publishableKey || '')
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.sessionId,
    })

    return result
  } catch (error) {
    console.error('Error creating booking session:', error)
    throw error
  }
}
