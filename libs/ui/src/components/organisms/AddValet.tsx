import { useFormCreateValet } from '@autospace/forms/src/createValet'
import { useState } from 'react'
import { Button } from '../atoms/Button'
import { Dialog } from '../atoms/Dialog'
import { Form } from '../atoms/Form'
import { ImagePreview } from './ImagePreview'
import { Controller } from 'react-hook-form'
import { HtmlInput } from '../atoms/HtmlInput'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { useCloudinaryUpload } from '@autospace/util/hooks/cloudinary'
import { useMutation } from '@apollo/client'
import {
  CreateValetDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'
import { toast } from '../molecules/Toast'

export const AddValet = () => {
  const {
    register,
    resetField,
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useFormCreateValet()
  const [open, setOpen] = useState(false)
  const { image } = watch()

  const [createValet, { data, loading }] = useMutation(CreateValetDocument, {
    onCompleted() {
      toast('Valet created.🎉')
      reset()
      setOpen(false)
    },
    awaitRefetchQueries: true,
    refetchQueries: [namedOperations.Query.companyValets],
  })

  const { uploading, upload } = useCloudinaryUpload()

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Create Valet</Button>
      <Dialog
        widthClassName="max-w-xl"
        open={open}
        setOpen={setOpen}
        title={'Create Valet'}
      >
        <Form
          onSubmit={handleSubmit(async ({ image, ...data }) => {
            const images = await upload(image)
            await createValet({
              variables: { createValetInput: { ...data, image: images[0] } },
            })
          })}
        >
          <HtmlLabel title="UID" error={errors.uid?.message}>
            <HtmlInput placeholder="uid of the valet" {...register('uid')} />
          </HtmlLabel>
          <HtmlLabel title="Display Name" error={errors.displayName?.message}>
            <HtmlInput
              placeholder="Name of the valet"
              {...register('displayName')}
            />
          </HtmlLabel>
          <HtmlLabel title="Licence ID" error={errors.licenceID?.message}>
            <HtmlInput
              placeholder="Licence ID of the valet"
              {...register('licenceID')}
            />
          </HtmlLabel>
          <ImagePreview srcs={image} clearImage={() => resetField('image')}>
            <Controller
              control={control}
              name={`image`}
              render={({ field }) => (
                <HtmlInput
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => field.onChange(e?.target?.files)}
                />
              )}
            />
          </ImagePreview>
          <Button loading={uploading || loading} type="submit">
            Create valet
          </Button>
        </Form>
      </Dialog>
    </div>
  )
}
