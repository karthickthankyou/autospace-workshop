import { useMutation } from '@apollo/client'
import {
  RemoveVerificationDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'
import { Button } from '../../atoms/Button'

export const RemoveVerificationButton = ({
  garageId,
}: {
  garageId: number
}) => {
  const [removeVerification, { loading }] = useMutation(
    RemoveVerificationDocument,
    {
      awaitRefetchQueries: true,
      refetchQueries: [namedOperations.Query.Garages],
    },
  )

  return (
    <Button
      size="none"
      variant="text"
      loading={loading}
      className="font-semibold"
      onClick={async () => {
        await removeVerification({
          variables: {
            where: {
              garageId,
            },
          },
        })
      }}
    >
      Unlist
    </Button>
  )
}
