import { useMutation } from '@apollo/client'
import {
  CreateVerificationDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'
import { Button } from '../../atoms/Button'

export const CreateVerificationButton = ({
  garageId,
}: {
  garageId: number
}) => {
  const [createVerification, { loading }] = useMutation(
    CreateVerificationDocument,
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
      className="font-semibold underline underline-offset-4"
      onClick={async () => {
        await createVerification({
          variables: {
            createVerificationInput: {
              garageId,
              verified: true,
            },
          },
        })
      }}
    >
      Verify
    </Button>
  )
}
