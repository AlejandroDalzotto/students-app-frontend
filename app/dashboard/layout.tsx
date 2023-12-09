import NavbarDashboard from "../ui/dashboard/NavbarDashboard"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative min-h-screen w-full gap-x-5 p-5 flex">
      <NavbarDashboard />
      {children}
    </main>
  )
}
