// ================================
// 10. src/components/admin/QuickActions.tsx (NUEVO)
// ================================
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Settings, Users, BarChart3 } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      title: 'Crear Business',
      description: 'Agregar nueva instancia',
      icon: Plus,
      href: '/admin/businesses/new',
    },
    {
      title: 'Configurar API',
      description: 'Conectar nueva API',
      icon: Settings,
      href: '/admin/api-configs',
    },
    {
      title: 'Gestionar Usuarios',
      description: 'Administrar accesos',
      icon: Users,
      href: '/admin/users',
    },
    {
      title: 'Ver Analytics',
      description: 'Revisar métricas',
      icon: BarChart3,
      href: '/admin/analytics',
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2"
              asChild
            >
              <a href={action.href}>
                <Icon className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {action.description}
                  </div>
                </div>
              </a>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}