import { AdminsQuery } from '@autospace/network/src/gql/generated'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { format } from 'date-fns'

type AdminCardProps = {
  admin: AdminsQuery['admins'][number]
  children?: ReactNode
}

export const AdminCard = ({ admin, children }: AdminCardProps) => {
  const session = useSession()
  const uid = session.data?.user?.uid
  return (
    <div className="bg-white p-2 shadow-lg">
      <div className="flex items-start gap-2">
        <h2 className="text-lg font-bold ">{admin.user?.name}</h2>
        {uid === admin.uid ? (
          <span className="px-1 text-xs bg-primary">You</span>
        ) : null}
      </div>
      <p className="text-xs text-gray"> {admin.uid}</p>
      <div className="text-xs text-gray mt-1">
        <p>Since {format(new Date(admin.createdAt), 'PP')}</p>
      </div>
      <p className="mt-2">
        <span className="text-2xl">{admin.verificationsCount}</span>{' '}
        <span className="text-sm text-gray">verifications.</span>
      </p>
      <div className="mt-2">{children}</div>
    </div>
  )
}
