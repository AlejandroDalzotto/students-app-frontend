import Navbar from "@/app/ui/dashboard/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className="relative min-h-screen w-full grid grid-rows-[7%_minmax(0,93%)] items-start">
      <Navbar />
      {children}
    </main>
  )
}
