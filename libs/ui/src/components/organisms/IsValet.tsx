'use client'
import { ValetMeDocument } from '@autospace/network/src/gql/generated'
import { useQuery } from '@apollo/client'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
type RenderPropChild = (id: number) => ReactNode

export const IsValet = ({
  children,
  uid,
}: {
  children: RenderPropChild | ReactNode
  uid: string
}) => {
  const { data, loading } = useQuery(ValetMeDocument)

  if (loading) {
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.valetMe?.companyId)
    return (
      <AlertSection>
        <div>You are not a valet.</div>
        <div>Please contact the company&apos;s managers with your ID. </div>
        <div>{uid}</div>
      </AlertSection>
    )

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.valetMe.companyId)
        : children}
    </>
  )
}
