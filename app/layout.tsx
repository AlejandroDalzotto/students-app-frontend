import type { Metadata } from 'next'
import { League_Spartan as LeagueSpartan } from 'next/font/google'
import './globals.css'
import { APP_NAME } from './lib/constants'

const fontLeagueSpartan = LeagueSpartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Página principal | ${APP_NAME}`,
  description: `Página principal de ${APP_NAME}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${fontLeagueSpartan.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
