import { signIn } from 'next-auth/react'

export const GoogleButton = () => {
  return (
    <button
      onClick={() => {
        signIn('google', { callbackUrl: '/' })
      }}
      className="text-lg hover:shadow-lg transition-shadow flex items-center justify-center w-8 h-8 border border-[#ea4335] rounded-full"
    >
      G
    </button>
  )
}
