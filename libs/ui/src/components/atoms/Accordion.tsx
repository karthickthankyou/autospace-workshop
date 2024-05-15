import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'
import { ReactNode } from 'react'

export interface IAccordionProps {
  title: ReactNode
  children: ReactNode
  className?: string
  defaultOpen?: boolean
}

export const Accordion = ({
  title,
  children,
  className,
  defaultOpen = false,
}: IAccordionProps) => (
  <Disclosure defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <DisclosureButton
          className={`flex justify-between items-center w-full py-2 font-medium ${className}`}
        >
          <span
            className={`text-left ${open ? 'font-semibold' : 'text-gray-600'}`}
          >
            {title}
          </span>
          <IconChevronDown
            className={` ${
              open ? 'transform rotate-180' : 'text-gray-500'
            } w-5 h-5 `}
          />
        </DisclosureButton>
        <DisclosurePanel className="w-full px-2 pb-4 text-gray-600">
          {children}
        </DisclosurePanel>
      </>
    )}
  </Disclosure>
)
