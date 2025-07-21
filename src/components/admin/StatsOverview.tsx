// ================================
// 8. src/components/admin/StatsOverview.tsx (NUEVO)
// ================================
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Users, Package, Activity } from 'lucide-react'

export function StatsOverview() {
  const stats = [
    {
      title: 'Total Businesses',
      value: '12',
      change: '+2.1%',
      icon: Building,
    },
    {
      title: 'Usuarios Activos',
      value: '2,350',
      change: '+15.1%',
      icon: Users,
    },
    {
      title: 'Business Types',
      value: '6',
      change: '+2.6%',
      icon: Package,
    },
    {
      title: 'APIs Conectadas',
      value: '89',
      change: '+12.5%',
      icon: Activity,
    },
  ]

  return (
    <>
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> vs último mes
              </p>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}