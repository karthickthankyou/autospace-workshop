import { IconExclamationCircle } from '@tabler/icons-react'

export interface IFormErrorProps {}

export const FormError = ({ error }: { error?: string | undefined }) => {
  if (error) {
    return (
      <div className="flex items-center justify-start gap-1 mt-1 text-xs text-gray-900">
        <IconExclamationCircle className="inline w-4 h-4 text-red-600" />{' '}
        {error}
      </div>
    )
  }
  return null
}
