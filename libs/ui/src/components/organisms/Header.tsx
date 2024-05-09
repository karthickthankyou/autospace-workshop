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

export type IHeaderProps = {
  type?: Role
  menuItems: MenuItem[]
} & BaseComponent

export const Header = ({ type, menuItems }: IHeaderProps) => {
  const session = useSession()
  const uid = session?.data?.user?.uid

  return (
    <header>
      <nav className="fixed z-50 top-0 w-full shadow-md bg-white/50 backdrop-blur-md">
        <Container className="relative   flex items-center justify-between h-16 py-2 gap-16">
          <Link href="/" aria-label="Home" className="w-auto z-50">
            <Brand type={type} className="hidden h-10 sm:block" />
            <Brand type={type} shortForm className="block sm:hidden" />
          </Link>
          <div className="flex items-center gap-2">
            {uid ? (
              <Sidebar>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <UserInfo className="mb-4" />
                    <div className="flex flex-col items-start justify-between space-y-1">
                      {menuItems.map(({ label, href }) => (
                        <Link
                          className="hover:underline underline-offset-4 transition-all hover:pl-1"
                          key={label}
                          href={href}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="pb-4">
                    <LogoutButton />
                  </div>
                </div>
              </Sidebar>
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
