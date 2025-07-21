// ================================
// src/app/sign-in/[[...sign-in]]/page.tsx (CORREGIDO)
// ================================
'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">CMS Dinámico</h1>
          <p className="text-gray-600 mt-2">Inicia sesión en tu cuenta</p>
        </div>
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
            },
            variables: {
              colorPrimary: "#2563eb",
            }
          }}
          redirectUrl="/admin"
          afterSignInUrl="/admin"
        />
      </div>
    </div>
  )
}