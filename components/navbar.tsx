'use client'

import { logoutAction } from '@/actions/logout'
import { SubmitButton } from '@/components/submit-button'
import { Button } from '@/components/ui/button'
import { AnimatePresence } from 'motion/react'
import { useAppLocalStorage } from '@/hooks/use-app-local-storage'
import { useToast } from '../hooks/use-toast'

export default function Navbar() {
  const { value, setValue } = useAppLocalStorage()
  const { toast } = useToast()

  return (
    <AnimatePresence>
      <nav className="w-full p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 57 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_9)">
              <rect width="57" height="59" fill="transparent" />
              <g clipPath="url(#clip1_1_9)">
                <path
                  d="M28 18.3333C40.0122 18.3333 49.75 15.0874 49.75 11.0833C49.75 7.07926 40.0122 3.83333 28 3.83333C15.9878 3.83333 6.25 7.07926 6.25 11.0833C6.25 15.0874 15.9878 18.3333 28 18.3333Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.25 11.0833V44.9167C6.25 46.8395 8.54151 48.6836 12.6204 50.0432C16.6993 51.4028 22.2315 52.1667 28 52.1667C33.7685 52.1667 39.3007 51.4028 43.3796 50.0432C47.4585 48.6836 49.75 46.8395 49.75 44.9167V11.0833"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.25 28C6.25 29.9228 8.54151 31.7669 12.6204 33.1265C16.6993 34.4862 22.2315 35.25 28 35.25C33.7685 35.25 39.3007 34.4862 43.3796 33.1265C47.4585 31.7669 49.75 29.9228 49.75 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_9">
                <rect width="57" height="59" fill="transparent" />
              </clipPath>
              <clipPath id="clip1_1_9">
                <rect
                  width="58"
                  height="58"
                  fill="transparent"
                  transform="translate(-1 -1)"
                />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-lg font-semibold">Volantis Query Wizard</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={'ghost'}
            onClick={() => {
              const email = 'montonenicolas01@gmail.com'
              try {
                navigator.clipboard.writeText(email)
                toast({
                  title: 'Email copied to clipboard',
                  description: 'You can send feedback to this email',
                })
              } catch (error) {
                toast({
                  title: 'Error copying email',
                  description: `Send me feedback at: ${email}`,
                })
              }
            }}
          >
            Feedback
          </Button>
          {value.connectionString && (
            <AnimatePresence>
              <Button
                variant="secondary"
                onClick={() =>
                  setValue((prev) => ({
                    ...prev,
                    connectionString: '',
                  }))
                }
              >
                Change Database
              </Button>
            </AnimatePresence>
          )}
          <form action={logoutAction}>
            <SubmitButton variant="ghost" pendingText="Logging out...">
              Logout
            </SubmitButton>
          </form>
        </div>
      </nav>
    </AnimatePresence>
  )
}
