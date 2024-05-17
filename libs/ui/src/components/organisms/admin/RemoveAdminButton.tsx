import { useMutation } from '@apollo/client'
import {
  RemoveAdminDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'
import { Button } from '../../atoms/Button'
import { IconTrash } from '@tabler/icons-react'
import { Dialog } from '../../atoms/Dialog'
import { useState } from 'react'

export const RemoveAdminButton = ({ uid }: { uid: string }) => {
  const [removeAdmin, { loading }] = useMutation(RemoveAdminDocument, {
    awaitRefetchQueries: true,
    refetchQueries: [namedOperations.Query.admins],
  })

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="text"
        size="none"
        loading={loading}
        onClick={() => setOpen(true)}
      >
        <IconTrash className="w-8 h-8 p-2 bg-red-50" />
      </Button>
      <Dialog open={open} setOpen={setOpen} title={'Delete'}>
        <div>
          Are you sure you want to delete this innocent soul from the admin
          realm?
        </div>
        <div className="my-2 text-xs text-gray">{uid}</div>
        <div className="grid w-full grid-cols-2 gap-2 mt-4">
          <Button variant="outlined" onClick={() => setOpen(false)}>
            No.
          </Button>
          <Button
            loading={loading}
            onClick={async () => {
              await removeAdmin({ variables: { where: { uid } } })
            }}
          >
            Yes.
          </Button>
        </div>
      </Dialog>
    </>
  )
}
