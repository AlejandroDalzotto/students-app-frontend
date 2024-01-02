import Sidebar from "@/app/ui/dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative min-h-screen w-full flex">
      <Sidebar />
      {children}
    </main>
  )
}
