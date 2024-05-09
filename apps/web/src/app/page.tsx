'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'
import { useSession, signOut } from 'next-auth/react'
import { Sidebar } from '@autospace/ui/src/components/organisms/Sidebar'

import Link from 'next/link'
export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)

  const { data: sessionData, status } = useSession()

  return (
    <main className=" p-8">
      <div>
        {sessionData?.user?.uid ? (
          <Button onClick={() => signOut()}>Signout</Button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
      <div className="p-12">
        <Sidebar>Children...</Sidebar>
      </div>
      Hello {add(343, 3)}
      <div>
        {data?.companies.map((company) => (
          <div className="p-4   rounded" key={company.id}>
            <div>{company.description}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
