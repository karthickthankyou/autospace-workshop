'use client'
import { AdminMeDocument } from '@autospace/network/src/gql/generated'
import { useQuery } from '@apollo/client'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'

export const IsAdmin = ({ children }: { children: ReactNode }) => {
  const { data, loading } = useQuery(AdminMeDocument)

  if (loading) {
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.adminMe?.uid)
    return (
      <AlertSection>
        <div>You are not an admin.</div>
      </AlertSection>
    )

  return <>{children}</>
}
