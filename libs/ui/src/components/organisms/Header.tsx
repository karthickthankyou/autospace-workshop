'use client'
import { BaseComponent, MenuItem, Role } from '@autospace/util/types'
import { Brand } from '../atoms/Brand'
import { Container } from '../atoms/Container'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Sidebar } from './Sidebar'
import { UserInfo } from '../molecules/UserInfo'
import { LogoutButton } from '../molecules/LogoutButton'
import { Button } from '../atoms/Button'
import { useDialogState } from '@autospace/util/hooks/dialog'
import { NavSidebar } from './NavSidebar'
import { Menus } from './Menus'

export type IHeaderProps = {
  type?: Role
  menuItems: MenuItem[]
} & BaseComponent

export const Header = ({ type, menuItems }: IHeaderProps) => {
  const session = useSession()
  const uid = session?.data?.user?.uid
  let [open, setOpen] = useDialogState(false)

  return (
    <header>
      <nav className="fixed z-40 top-0 w-full shadow-md bg-white/50 backdrop-blur-md">
        <Container className="relative   flex items-center justify-between h-16 py-2 gap-16">
          <Link href="/" aria-label="Home" className="w-auto z-50">
            <Brand type={type} className="hidden h-10 sm:block" />
            <Brand type={type} shortForm className="block sm:hidden" />
          </Link>
          <div className="flex items-center gap-2">
            {uid ? (
              <div className="flex gap-6 items-center">
                <div className="text-sm mr-6 flex gap-3">
                  <Menus menuItems={menuItems} />
                </div>

                <NavSidebar menuItems={menuItems} />
              </div>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="outlined" className="hidden md:block">
                    Register
                  </Button>
                </Link>
                <Link href="/login">
                  <Button>Log in</Button>
                </Link>
              </>
            )}
          </div>
        </Container>
      </nav>
      <div className="h-16" />
    </header>
  )
}
