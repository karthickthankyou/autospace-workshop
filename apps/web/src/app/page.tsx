'use client'
import { add } from '@autospace/sample-lib'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)

  return (
    <main className="bg-primary">
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
