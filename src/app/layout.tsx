// ================================
// PASO 1: src/app/layout.tsx (SERVER COMPONENT)
// ================================
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/global.css'
import { ClientProviders } from '@/components/providers/client-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'CMS Dinámico',
    template: '%s | CMS Dinámico'
  },
  description: 'Sistema de CMS dinámico y configurable para crear dashboards empresariales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
