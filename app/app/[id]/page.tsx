import { redirect } from 'next/navigation'

export default async function ProtectedPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Chat history is disabled without authentication
  // Redirect to main app page
  return redirect('/app')
}
