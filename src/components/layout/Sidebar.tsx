// ================================
// src/components/layout/Sidebar.tsx - Simplificado
// ================================
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  Package, 
  Building, 
  Settings, 
  Users, 
  Link as LinkIcon, 
  BarChart3
} from 'lucide-react'

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: Home,
  },
  {
    title: 'Business Types',
    href: '/admin/business-types',
    icon: Package,
  },
  {
    title: 'Businesses',
    href: '/admin/businesses',
    icon: Building,
  },
  {
    title: 'Configurador',
    href: '/admin/configurator',
    icon: Settings,
  },
  {
    title: 'Usuarios',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'APIs',
    href: '/admin/api-configs',
    icon: LinkIcon,
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 border-r bg-card">
      {/* Logo */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">CMS Dinámico</span>
            <span className="text-xs text-muted-foreground">Admin Panel</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3 h-10"
                >
                  <Icon className="h-4 w-4" />
                  <span className="truncate">{item.title}</span>
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
