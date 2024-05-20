import { SlotType } from '@autospace/network/src/gql/generated'
import { z } from 'zod'
import { isEndTimeValid, isStartTimeValid } from './util'
import { DefaultValues, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export const locationInfo = z.object({
  lat: z.number(),
  lng: z.number(),
  distance: z.number().optional(),
  notes: z.string().optional(),
})

export const formSchemaValet = z.object({
  pickupInfo: locationInfo,
  dropoffInfo: locationInfo,
  differentLocations: z.boolean().optional(),
})

export const formSchemaBookSlot = z
  .object({
    startTime: z.string(),
    endTime: z.string(),
    vehicleNumber: z.string().min(1, { message: 'Vehicle number is required' }),
    phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
    type: z.nativeEnum(SlotType, {
      required_error: 'Slot type is required',
    }),
    valet: formSchemaValet.optional(),
  })
  .refine(({ startTime }) => isStartTimeValid(startTime), {
    message: 'Start time should be greater than current time',
    path: ['startTime'],
  })
  .refine(({ endTime, startTime }) => isEndTimeValid({ endTime, startTime }), {
    message: 'End time should be greater than start time',
    path: ['endTime'],
  })

export type FormTypeBookSlot = z.infer<typeof formSchemaBookSlot>

export const userFormBookSlot = ({
  defaultValues,
}: {
  defaultValues: DefaultValues<FormTypeBookSlot>
}) =>
  useForm<FormTypeBookSlot>({
    resolver: zodResolver(formSchemaBookSlot),
    defaultValues,
    mode: 'onChange',
  })

export const FormProviderBookSlot = ({
  children,
  defaultValues,
}: {
  children: ReactNode
  defaultValues: DefaultValues<FormTypeBookSlot>
}) => {
  const methods = userFormBookSlot({ defaultValues })

  return <FormProvider {...methods}>{children}</FormProvider>
}
