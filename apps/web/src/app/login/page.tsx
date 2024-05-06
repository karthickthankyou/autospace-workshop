import { LoginForm } from '@autospace/ui/src/components/templates/LoginForm'
import { AuthLayout } from '@autospace/ui/src/components/molecules/AuthLayout'

export default function Page() {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  )
}
