'use client'
import { IconMenu2 } from '@tabler/icons-react'
import Link from 'next/link'
import { Sidebar } from './Sidebar'
import { useDialogState } from '@autospace/util/hooks/dialog'

import { MenuItem } from '@autospace/util/types'
import { LogoutButton } from '../molecules/LogoutButton'
import { UserInfo } from '../molecules/UserInfo'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export const NavSidebar = ({ menuItems }: INavSidebarProps) => {
  const [open, setOpen] = useDialogState()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className="p-2"
        aria-label="Open main menu"
      >
        <IconMenu2 className="w-5 h-5" />
      </button>
      <Sidebar open={open} setOpen={setOpen}>
        <div className="flex flex-col items-start space-y-1">
          <UserInfo className="mb-4" />
          {menuItems.map(({ label, href }) => (
            <Link
              className="hover:underline underline-offset-8 transition-all hover:pl-1"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className=" mt-auto">
          <LogoutButton />
        </div>
      </Sidebar>
    </>
  )
}
