// ================================
// 6. src/hooks/use-api-client.ts (NUEVO - PARA CLIENT SIDE)
// ================================
'use client'

import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { apiClient } from '@/lib/api'

export function useApiClient() {
  const { getToken } = useAuth()

  useEffect(() => {
    // Interceptor para client side
    const requestInterceptor = apiClient.interceptors.request.use(
      async (config) => {
        try {
          const token = await getToken()
          if (token) {
            config.headers.Authorization = `Bearer ${token}`
          }
        } catch (error) {
          console.error('Error getting auth token:', error)
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor)
    }
  }, [getToken])

  return apiClient
}