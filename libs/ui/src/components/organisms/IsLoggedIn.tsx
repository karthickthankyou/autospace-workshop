'use client'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'
import Link from 'next/link'

type RenderPropChild = (uid: string) => ReactNode

export const IsLoggedIn = ({
  children,
  notLoggedIn,
}: {
  children: RenderPropChild | ReactNode
  notLoggedIn?: ReactNode
}) => {
  const { status, data } = useSession()

  if (status === 'loading') {
    return <LoaderPanel text="Loading user..." />
  }

  if (!data?.user?.uid) {
    if (notLoggedIn) {
      return <>{notLoggedIn}</>
    } else {
      return (
        <AlertSection title="You are not logged in.">
          <Link href="/login">Login</Link>
        </AlertSection>
      )
    }
  }

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.user.uid)
        : children}
    </>
  )
}
