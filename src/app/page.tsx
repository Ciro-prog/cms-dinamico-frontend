// ================================
// src/app/page.tsx - Server Component corregido
// ================================

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function HomePage() {
  const { userId } = auth()
  
  // Si ya está autenticado, redirigir al admin
  if (userId) {
    redirect('/admin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            CMS Dinámico
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sistema de gestión de contenido dinámico y configurable para crear 
            dashboards empresariales personalizados
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/sign-in">Iniciar Sesión</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sign-up">Registrarse</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Configurable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Crea dashboards completamente personalizados sin escribir código. 
                Configura entidades, vistas y componentes según tus necesidades.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔗 Integrado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Conecta con APIs externas, WhatsApp Business, N8N workflows y 
                sincroniza datos automáticamente con cache inteligente.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                👥 Multi-tenant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Soporte para múltiples empresas con configuraciones independientes, 
                roles personalizados y permisos granulares.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Casos de Uso
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ISP', desc: 'Gestión de clientes, planes y soporte técnico' },
              { title: 'Clínicas', desc: 'Pacientes, turnos y historiales médicos' },
              { title: 'Restaurantes', desc: 'Pedidos, inventario y delivery' },
              { title: 'RRHH', desc: 'Empleados, nóminas y evaluaciones' },
            ].map((useCase, index) => (
              <Card key={index} className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{useCase.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}