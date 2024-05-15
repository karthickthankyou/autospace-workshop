'use client'
import { useFormCreateCompany } from '@autospace/forms/src/createCompany'
import { Button } from '../atoms/Button'
import { Dialog } from '../atoms/Dialog'
import { useEffect, useState } from 'react'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { HtmlInput } from '../atoms/HtmlInput'
import { Form } from '../atoms/Form'
import { HtmlTextArea } from '../atoms/HtmlTextArea'
import { useSession } from 'next-auth/react'
import { useMutation } from '@apollo/client'
import {
  CreateCompanyDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'

export const CreateCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormCreateCompany()

  const session = useSession()
  const uid = session.data?.user?.uid
  const managerName = session.data?.user?.name

  const [createCompany, { loading, data }] = useMutation(CreateCompanyDocument)

  useEffect(() => {
    if (uid) {
      setValue('managerId', uid)
    }
    setValue('managerName', managerName)
  }, [uid])

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Create Company</Button>
      <Dialog open={open} setOpen={setOpen} title="Create company">
        <Form
          onSubmit={handleSubmit(async (data) => {
            await createCompany({
              variables: {
                createCompanyInput: data,
              },
              awaitRefetchQueries: true,
              refetchQueries: [namedOperations.Query.myCompany],
            })
          })}
        >
          <HtmlLabel title="Company name" error={errors.displayName?.message}>
            <HtmlInput
              placeholder="Company name"
              {...register('displayName')}
            />
          </HtmlLabel>
          <HtmlLabel title="Description" error={errors.displayName?.message}>
            <HtmlTextArea
              placeholder="Describe your parking company"
              {...register('description')}
            />
          </HtmlLabel>
          <HtmlLabel title="Manager ID" error={errors.managerId?.message}>
            <HtmlInput
              placeholder="Manager ID"
              {...register('managerId')}
              readOnly
            />
          </HtmlLabel>
          <HtmlLabel title="Manager name" error={errors.managerName?.message}>
            <HtmlInput
              placeholder="Manager name"
              {...register('managerName')}
            />
          </HtmlLabel>
          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      </Dialog>
    </div>
  )
}
