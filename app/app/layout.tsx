export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="flex h-screen w-full">{children}</main>
}
