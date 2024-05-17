'use client'
import {
  FormProviderCreateGarage,
  FormTypeCreateGarage,
  useFormCreateGarage,
} from '@autospace/forms/src/createGarage'
import { useMutation } from '@apollo/client'
import { useCloudinaryUpload } from '@autospace/util/hooks/cloudinary'
import {
  CreateGarageDocument,
  namedOperations,
} from '@autospace/network/src/gql/generated'
import { Form } from '../atoms/Form'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { HtmlInput } from '../atoms/HtmlInput'
import { Button } from '../atoms/Button'
import { HtmlTextArea } from '../atoms/HtmlTextArea'
import { ImagePreview } from '../organisms/ImagePreview'
import { Controller } from 'react-hook-form'
import { Map } from '../organisms/map/Map'
import { initialViewState } from '@autospace/util/constants'
import { Panel } from '../organisms/map/Panel'
import { SearchPlaceBox } from '../organisms/map/SearchPlacesBox'
import { ViewState } from '@autospace/util/types'
import { CenterOfMap, DefaultZoomControls } from '../organisms/map/ZoomControls'
import { useFormContext } from 'react-hook-form'
import { AddSlots, GarageMapMarker } from '../organisms/CreateGarageComponents'
import { ToastContainer, toast } from '../molecules/Toast'

const CreateGarageContent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
    resetField,
    watch,
  } = useFormContext<FormTypeCreateGarage>()

  const { images } = watch()

  const { uploading, upload } = useCloudinaryUpload()

  const [createGarage, { data, error, loading }] = useMutation(
    CreateGarageDocument,
    {
      refetchQueries: [namedOperations.Query.Garages],
      onCompleted: () => {
        reset()
        toast('Garage created successfully.')
      },
      onError(error, clientOptions) {
        toast('Action failed.')
      },
    },
  )

  return (
    <div className="grid md:grid-cols-2 gap-2 mt-2 ">
      <div>
        <Form
          onSubmit={handleSubmit(
            async ({
              images,
              description,
              displayName,
              location,
              slotTypes,
            }) => {
              const uploadedImages = await upload(images)

              const result = await createGarage({
                variables: {
                  createGarageInput: {
                    Address: location,
                    images: uploadedImages,
                    Slots: slotTypes,
                    description,
                    displayName,
                  },
                },
              })
            },
          )}
        >
          <HtmlLabel error={errors.displayName?.message} title="Display Name">
            <HtmlInput {...register('displayName')} placeholder="Garage name" />
          </HtmlLabel>
          <HtmlLabel title="Description" error={errors.description?.message}>
            <HtmlTextArea
              cols={5}
              {...register('description')}
              placeholder="Describe..."
            />
          </HtmlLabel>
          <HtmlLabel title="Address" error={errors.location?.address?.message}>
            <HtmlTextArea
              cols={5}
              {...register('location.address')}
              placeholder="123, street name"
            />
          </HtmlLabel>
          <ImagePreview srcs={images} clearImage={() => resetField('images')}>
            <Controller
              control={control}
              name={`images`}
              render={({ field }) => (
                <HtmlInput
                  type="file"
                  accept="image/*"
                  multiple={true}
                  onChange={(e) => field.onChange(e?.target?.files)}
                  className="border-0"
                />
              )}
            />
          </ImagePreview>
          <AddSlots />
          <Button loading={uploading || loading} type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Map
        initialViewState={initialViewState}
        onLoad={(e) => {
          const { lat, lng } = e.target.getCenter()
          setValue('location.lat', lat)
          setValue('location.lng', lng)
        }}
      >
        <GarageMapMarker />
        <Panel position="left-top">
          <SearchPlaceBox
            onLocationChange={(location: ViewState) => {
              setValue('location.lat', location.latitude)
              setValue('location.lng', location.longitude)
            }}
          />
          <DefaultZoomControls>
            <CenterOfMap
              onClick={(latLng) => {
                const lat = parseFloat(latLng.lat.toFixed(8))
                const lng = parseFloat(latLng.lng.toFixed(8))

                setValue('location.lat', lat, {
                  shouldValidate: true,
                })
                setValue('location.lng', lng, {
                  shouldValidate: true,
                })
              }}
            />
          </DefaultZoomControls>
        </Panel>
      </Map>
    </div>
  )
}

export const CreateGarage = () => {
  return (
    <FormProviderCreateGarage>
      <CreateGarageContent />
    </FormProviderCreateGarage>
  )
}
