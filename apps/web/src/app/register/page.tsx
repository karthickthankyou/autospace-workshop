import { RegisterForm } from '@autospace/ui/src/components/templates/RegisterForm'
import { AuthLayout } from '@autospace/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}
