// ================================
// src/components/layout/Sidebar.tsx
// ================================
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { 
  Home, 
  Package, 
  Building, 
  Settings, 
  Users, 
  Link as LinkIcon, 
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const iconMap = {
  Home,
  Package,
  Building,
  Settings,
  Users,
  Link: LinkIcon,
  BarChart3,
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn(
      "flex flex-col border-r bg-card transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-semibold text-sm">CMS Dinámico</span>
              <span className="text-xs text-muted-foreground">Admin Panel</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const isActive = pathname === item.href
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-10",
                    collapsed && "px-2"
                  )}
                >
                  <Icon className={cn("h-4 w-4", collapsed && "h-5 w-5")} />
                  {!collapsed && (
                    <span className="truncate">{item.title}</span>
                  )}
                </Button>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Collapse Button */}
      <div className="p-3 border-t">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Contraer
            </>
          )}
        </Button>
      </div>
    </div>
  )
}