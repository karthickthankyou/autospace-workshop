import { SlotType } from '@autospace/network/src/gql/generated'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { ReactNode } from 'react'

export const formSchemaAddress = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string().min(1),
})

export const formSchemaCreateSlot = z.object({
  height: z.number(),
  width: z.number(),
  length: z.number(),
  pricePerHour: z.number(),
  count: z.number().min(1).max(10, { message: 'Maximum 10.' }),
  type: z.nativeEnum(SlotType),
})

export const formSchemaCreateGarage = z.object({
  displayName: z.string().min(1),
  description: z.string().min(1),
  images: z.any(),
  location: formSchemaAddress,
  slotTypes: z.array(formSchemaCreateSlot),
})

export type FormTypeCreateGarage = z.infer<typeof formSchemaCreateGarage>

export const useFormCreateGarage = () =>
  useForm<FormTypeCreateGarage>({
    resolver: zodResolver(formSchemaCreateGarage),
    defaultValues: { slotTypes: [] },
  })

export const FormProviderCreateGarage = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateGarage()
  return <FormProvider {...methods}>{children}</FormProvider>
}
