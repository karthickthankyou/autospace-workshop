import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(req: NextRequest, res: NextResponse) {
  const getCookies = cookies()
  const isDevelopment = process.env.NODE_ENV === 'development'

  // Use the appropriate cookie name based on the environment
  const cookieName = isDevelopment
    ? 'next-auth.session-token'
    : '__Secure-next-auth.session-token'

  const nextAuthSession = getCookies.get(cookieName)?.value || ''

  return NextResponse.json(nextAuthSession)
}
