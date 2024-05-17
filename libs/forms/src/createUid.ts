import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const formSchemaUid = z.object({
  uid: z.string(),
})

export type FormTypeUid = z.infer<typeof formSchemaUid>

export const useFormUid = () =>
  useForm<FormTypeUid>({
    resolver: zodResolver(formSchemaUid),
  })
