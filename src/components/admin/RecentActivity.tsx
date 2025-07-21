// ================================
// 9. src/components/admin/RecentActivity.tsx (NUEVO)
// ================================
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RecentActivity() {
  const activities = [
    {
      type: 'Business creado',
      description: 'TelcoNorte ISP se registró',
      time: 'Hace 5 min',
    },
    {
      type: 'API configurada',
      description: 'Clínica Demo configuró su API',
      time: 'Hace 15 min',
    },
    {
      type: 'Usuario creado',
      description: 'Nuevo técnico en TelcoNorte',
      time: 'Hace 1 hora',
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.type}</p>
              <p className="text-xs text-muted-foreground">
                {activity.description}
              </p>
            </div>
            <div className="text-xs text-muted-foreground">
              {activity.time}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
