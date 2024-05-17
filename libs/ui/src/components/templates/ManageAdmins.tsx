'use client'
import { useTakeSkip } from '@autospace/util/hooks/pagination'
import { useMutation, useQuery } from '@apollo/client'
import { AdminsDocument } from '@autospace/network/src/gql/generated'
import { ShowData } from '../organisms/ShowData'
import { AdminCard } from '../organisms/admin/AdminCard'
import { RemoveAdminButton } from '../organisms/admin/RemoveAdminButton'
import { CreateAdmin } from '../organisms/admin/CreateAdmin'

export const ManageAdmins = () => {
  const { setSkip, setTake, skip, take } = useTakeSkip(0)

  const { data, loading } = useQuery(AdminsDocument, {
    variables: { skip, take },
  })

  return (
    <>
      <div className="flex justify-end">
        <CreateAdmin />
      </div>
      <ShowData
        loading={loading}
        pagination={{
          skip,
          take,
          resultCount: data?.admins.length,
          totalCount: data?.adminsCount,
          setSkip,
          setTake,
        }}
        title={'Manage admins'}
      >
        {data?.admins.map((admin) => (
          <div key={admin.uid} className="pl-0.5 border-l-2  border-primary">
            <AdminCard key={admin.uid} admin={admin}>
              <div className="flex justify-end">
                <RemoveAdminButton uid={admin.uid} />
              </div>
            </AdminCard>
          </div>
        ))}
      </ShowData>
    </>
  )
}
