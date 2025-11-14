import Link from 'next/link'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/submit-button'
import { cookies } from 'next/headers'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  
  const login = async (formData: FormData) => {
    'use server'

    const password = formData.get('password') as string
    const appPassword = process.env.APP_PASSWORD

    if (!appPassword) {
      return redirect('/login?error=Server configuration error')
    }

    if (password !== appPassword) {
      return redirect('/login?error=Invalid password')
    }

    // Set authentication cookie
    const cookieStore = await cookies()
    cookieStore.set('app-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return redirect('/app')
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mt-30">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter the password to access the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>

              <SubmitButton formAction={login} pendingText="Signing In...">
                Login
              </SubmitButton>
              {params?.error && (
                <p className="mt-4 p-1 text-center text-red-500">
                  {params.error}
                </p>
              )}
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
