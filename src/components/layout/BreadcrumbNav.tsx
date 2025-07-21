// ================================
// src/components/layout/BreadcrumbNav.tsx - Simplificado
// ================================
'use client'

import { usePathname } from 'next/navigation'

export function BreadcrumbNav() {
  const pathname = usePathname()
  
  if (pathname === '/admin') {
    return null
  }

  const segments = pathname.split('/').filter(Boolean)
  const breadcrumb = segments[segments.length - 1]
    ?.replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="border-b bg-muted/20 px-6 py-3">
      <nav className="text-sm text-muted-foreground">
        <span>Dashboard</span> / <span className="text-foreground">{breadcrumb}</span>
      </nav>
    </div>
  )
}