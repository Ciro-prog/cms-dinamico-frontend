// ================================
// src/app/sign-up/[[...sign-up]]/page.tsx (CORREGIDO)
// ================================
'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">CMS Dinámico</h1>
          <p className="text-gray-600 mt-2">Crea tu cuenta</p>
        </div>
        <SignUp 
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
          afterSignUpUrl="/admin"
        />
      </div>
    </div>
  )
}