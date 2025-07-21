// ================================
// src/components/layout/Header.tsx - Simplificado
// ================================
'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export function Header() {
  const { user } = useUser()

  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">CMS Dinámico</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium">{user?.fullName || 'Usuario'}</p>
            <p className="text-xs text-muted-foreground">
              Super Admin
            </p>
          </div>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              }
            }}
          />
        </div>
      </div>
    </header>
  )
}
