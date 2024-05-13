import { Switch as HUISwitch, SwitchGroup, Label } from '@headlessui/react'
import { ReactNode } from 'react'

export interface Switch2Props {
  label: ReactNode
  children?: ReactNode
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

export const Switch = ({
  label,
  children,
  checked,
  onChange,
  className,
}: Switch2Props) => {
  return (
    <SwitchGroup>
      <div className={`flex items-center ${className}`}>
        <Label className="mr-2 text-sm">{label}</Label>
        <HUISwitch
          checked={checked}
          onChange={onChange}
          className={`${
            checked ? 'bg-primary-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          >
            {children}
          </span>
        </HUISwitch>
      </div>
    </SwitchGroup>
  )
}
