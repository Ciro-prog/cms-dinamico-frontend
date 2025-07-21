// ================================
// src/lib/api.ts - Actualizado para Clerk v6
// ================================
import axios, { AxiosResponse, AxiosError } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para agregar token de autorización
apiClient.interceptors.request.use(
  async (config) => {
    try {
      // En Clerk v6, podemos usar window.Clerk directamente
      if (typeof window !== 'undefined' && window.Clerk?.session) {
        const token = await window.Clerk.session.getToken()
        
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
    } catch (error) {
      console.error('Error getting auth token:', error)
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para manejo de respuestas
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    // Manejo global de errores
    if (error.response?.status === 401) {
      // Redirect to login
      if (typeof window !== 'undefined') {
        window.location.href = '/sign-in'
      }
    }
    
    return Promise.reject(error)
  }
)

// API Methods (sin cambios)
export const api = {
  // Business Types
  getBusinessTypes: () => apiClient.get('/api/admin/business-types'),
  getBusinessType: (tipo: string) => apiClient.get(`/api/admin/business-types/${tipo}`),
  createBusinessType: (data: any) => apiClient.post('/api/admin/business-types', data),
  updateBusinessType: (tipo: string, data: any) => apiClient.put(`/api/admin/business-types/${tipo}`, data),
  deleteBusinessType: (tipo: string) => apiClient.delete(`/api/admin/business-types/${tipo}`),

  // Business Instances
  getBusinesses: () => apiClient.get('/api/admin/businesses'),
  getBusiness: (businessId: string) => apiClient.get(`/api/admin/businesses/${businessId}`),
  createBusiness: (data: any) => apiClient.post('/api/admin/businesses', data),
  updateBusiness: (businessId: string, data: any) => apiClient.put(`/api/admin/businesses/${businessId}`, data),
  deleteBusiness: (businessId: string) => apiClient.delete(`/api/admin/businesses/${businessId}`),

  // Users
  getUsers: () => apiClient.get('/api/admin/users'),
  getUser: (userId: string) => apiClient.get(`/api/admin/users/${userId}`),
  createUser: (data: any) => apiClient.post('/api/admin/users', data),
  updateUser: (userId: string, data: any) => apiClient.put(`/api/admin/users/${userId}`, data),
  deleteUser: (userId: string) => apiClient.delete(`/api/admin/users/${userId}`),

  // API Configs
  getApiConfigs: (businessId: string) => apiClient.get(`/api/admin/api-configs/${businessId}`),
  getApiConfig: (businessId: string, apiName: string) => apiClient.get(`/api/admin/api-configs/${businessId}/${apiName}`),
  createApiConfig: (data: any) => apiClient.post('/api/admin/api-configs', data),
  updateApiConfig: (businessId: string, apiName: string, data: any) => apiClient.put(`/api/admin/api-configs/${businessId}/${apiName}`, data),
  testApiConnection: (businessId: string, apiName: string) => apiClient.post(`/api/admin/api-configs/${businessId}/${apiName}/test`),

  // Entities
  getEntityConfigs: (businessId: string) => apiClient.get(`/api/admin/entities/${businessId}`),
  getEntityConfig: (businessId: string, entidad: string) => apiClient.get(`/api/admin/entities/${businessId}/${entidad}`),
  createEntityConfig: (data: any) => apiClient.post('/api/admin/entities', data),
  updateEntityConfig: (businessId: string, entidad: string, data: any) => apiClient.put(`/api/admin/entities/${businessId}/${entidad}`, data),

  // Views
  getViewConfigs: (businessId: string) => apiClient.get(`/api/admin/views/${businessId}`),
  getViewConfig: (businessId: string, vista: string) => apiClient.get(`/api/admin/views/${businessId}/${vista}`),
  createViewConfig: (data: any) => apiClient.post('/api/admin/views', data),
  updateViewConfig: (businessId: string, vista: string, data: any) => apiClient.put(`/api/admin/views/${businessId}/${vista}`, data),

  // Dashboard Data
  getDashboardData: (businessId: string, vista?: string) => apiClient.get(`/api/business/dashboard/${businessId}${vista ? `?vista=${vista}` : ''}`),
  
  // Analytics
  getSystemAnalytics: () => apiClient.get('/api/admin/analytics'),
  getBusinessAnalytics: (businessId: string) => apiClient.get(`/api/admin/analytics/businesses/${businessId}`),

  // Health Check
  healthCheck: () => apiClient.get('/health'),
}

// Declaración global para TypeScript
declare global {
  interface Window {
    Clerk: any
  }
}
