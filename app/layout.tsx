import type { Metadata } from 'next'
import { Work_Sans as WorkSans } from 'next/font/google'
import './globals.css'
import { APP_NAME } from './lib/constants'
import Providers from '@/providers/theme'

const fontWorkSans = WorkSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true
})

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
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontWorkSans.className} antialiased bg-neutral-100 dark:bg-neutral-900`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  )
}
