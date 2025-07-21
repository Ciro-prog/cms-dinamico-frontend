// ================================
// src/components/providers/clerk-provider.tsx (ACTUALIZADO CON RUTAS)
// ================================
'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { esES } from '@clerk/localizations'

export function ClerkClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={esES}
      appearance={{
        variables: {
          colorPrimary: '#2563eb',
          colorBackground: '#ffffff',
          colorText: '#1f2937',
        },
        elements: {
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white font-medium',
          card: 'shadow-lg border',
          headerTitle: 'text-xl font-bold',
          socialButtonsBlockButton: 'border border-gray-200 hover:bg-gray-50',
          formFieldLabel: 'text-sm font-medium text-gray-700',
          formFieldInput: 'border border-gray-300 rounded-md',
        }
      }}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/admin"
      afterSignUpUrl="/admin"
    >
      {children}
    </ClerkProvider>
  )
}
