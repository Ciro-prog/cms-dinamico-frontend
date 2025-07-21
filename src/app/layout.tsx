// ================================
// src/app/layout.tsx (Root Layout)
// ================================
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'CMS Dinámico',
    template: '%s | CMS Dinámico'
  },
  description: 'Sistema de CMS dinámico y configurable para crear dashboards empresariales',
  keywords: ['cms', 'dashboard', 'admin', 'configurable'],
  authors: [{ name: 'CMS Dinámico Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'noindex, nofollow', // Para el panel admin
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={esES}
      appearance={{
        variables: {
          colorPrimary: '#3b82f6',
          colorBackground: '#ffffff',
          colorText: '#1f2937',
        },
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90',
          card: 'shadow-lg',
        }
      }}
    >
      <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
