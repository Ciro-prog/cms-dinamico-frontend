// ================================
// src/app/admin/page.tsx - Client Component corregido
// ================================
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Users, 
  Package, 
  Activity, 
  Plus,
  CheckCircle,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'

interface DashboardStats {
  totalBusinessTypes: number
  totalBusinesses: number
  totalUsers: number
  activeIntegrations: number
}

export default function AdminDashboard() {
  const { user, isLoaded } = useUser()
  const [stats, setStats] = useState<DashboardStats>({
    totalBusinessTypes: 0,
    totalBusinesses: 0,
    totalUsers: 0,
    activeIntegrations: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded) {
      loadDashboardData()
    }
  }, [isLoaded])

  const loadDashboardData = async () => {
    try {
      // Simular carga de datos - en producción llamaría a la API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStats({
        totalBusinessTypes: 4,
        totalBusinesses: 12,
        totalUsers: 28,
        activeIntegrations: 8
      })
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded || loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Bienvenido de vuelta, {user?.firstName || 'Admin'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/business-types">
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Business Type
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Business Types
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBusinessTypes}</div>
            <p className="text-xs text-muted-foreground">
              Templates disponibles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Businesses
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBusinesses}</div>
            <p className="text-xs text-muted-foreground">
              Instancias activas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Usuarios
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Total registrados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Integraciones
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeIntegrations}</div>
            <p className="text-xs text-muted-foreground">
              APIs configuradas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>
              Tareas comunes de administración
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/business-types">
                <Package className="h-4 w-4 mr-2" />
                Gestionar Business Types
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/businesses">
                <Building className="h-4 w-4 mr-2" />
                Ver Businesses
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/users">
                <Users className="h-4 w-4 mr-2" />
                Administrar Usuarios
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/configurator">
                <Activity className="h-4 w-4 mr-2" />
                Configurador Visual
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estado del Sistema</CardTitle>
            <CardDescription>
              Estado actual de servicios e integraciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">API Backend</span>
              </div>
              <Badge variant="default" className="bg-green-500">Activo</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">MongoDB</span>
              </div>
              <Badge variant="default" className="bg-green-500">Conectado</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Redis Cache</span>
              </div>
              <Badge variant="outline" className="text-yellow-600">Pendiente</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">WAHA WhatsApp</span>
              </div>
              <Badge variant="default" className="bg-green-500">3 Sesiones</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente</CardTitle>
          <CardDescription>
            Últimas acciones en el sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Business creado",
                details: "TelcoNorte ISP se registró con template ISP",
                time: "hace 2 horas",
                type: "success"
              },
              {
                action: "Usuario agregado",
                details: "Nuevo técnico Juan Pérez agregado a Clínica Demo",
                time: "hace 4 horas",
                type: "info"
              },
              {
                action: "API configurada",
                details: "ISPCube API configurada para TelcoNorte",
                time: "hace 6 horas",
                type: "success"
              },
              {
                action: "Workflow activado",
                details: "N8N workflow de atención automática activado",
                time: "hace 1 día",
                type: "info"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 last:pb-0 border-b last:border-0">
                <div className={`h-2 w-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-green-500' : 
                  activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.details}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}