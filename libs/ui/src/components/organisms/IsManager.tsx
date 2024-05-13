import { MyCompanyDocument } from '@autospace/network/src/gql/generated'
import { BaseComponent } from '@autospace/util/types'
import { useQuery } from '@apollo/client'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'

export const IsManager = ({ children }: BaseComponent) => {
  const { data, loading } = useQuery(MyCompanyDocument)

  if (loading) {
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.myCompany)
    return (
      <AlertSection>
        <div>You don&apos;t have a company yet.</div>
        {/* Todo Create company */}
      </AlertSection>
    )

  return children
}
