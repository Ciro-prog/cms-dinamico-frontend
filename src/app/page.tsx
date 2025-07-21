// ================================
// ALTERNATIVA: Si necesitas que sea Client Component
// ================================
'use client'

import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const { userId, isLoaded } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/admin')
    }
  }, [isLoaded, userId, router])
  
  // Mostrar loading mientras carga
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }
  
  // Si está autenticado, no mostrar nada (se está redirigiendo)
  if (userId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CMS Dinámico
          </h1>
          <p className="text-gray-600 mb-8">
            Sistema de gestión de contenido configurable
          </p>
          <div className="space-y-4">
            <Link
              href="/sign-in"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/sign-up"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Crear Cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}