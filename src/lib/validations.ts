// ================================
// src/lib/validations.ts
// ================================
import { z } from 'zod'

export const businessTypeSchema = z.object({
  tipo: z.string().min(3, 'Mínimo 3 caracteres').regex(/^[a-z_]+$/, 'Solo letras minúsculas y guiones bajos'),
  nombre: z.string().min(3, 'Mínimo 3 caracteres'),
  descripcion: z.string().optional(),
  componentes_base: z.array(z.object({
    id: z.string(),
    nombre: z.string(),
    tipo: z.string(),
    obligatorio: z.boolean().default(false),
    configuracion_default: z.record(z.any()).optional(),
  })).default([]),
  componentes_opcionales: z.array(z.object({
    id: z.string(),
    nombre: z.string(),
    tipo: z.string(),
    descripcion: z.string().optional(),
  })).default([]),
})

export const businessInstanceSchema = z.object({
  business_id: z.string().min(3, 'Mínimo 3 caracteres').regex(/^[a-z0-9_]+$/, 'Solo letras minúsculas, números y guiones bajos'),
  nombre: z.string().min(3, 'Mínimo 3 caracteres'),
  tipo_base: z.string().min(1, 'Selecciona un tipo base'),
  configuracion: z.object({
    branding: z.object({
      logo_url: z.string().url().optional(),
      colores: z.object({
        primary: z.string(),
        secondary: z.string(),
        background: z.string().optional(),
        text: z.string().optional(),
      }),
    }).optional(),
    componentes_activos: z.array(z.string()).default([]),
    roles_personalizados: z.array(z.object({
      rol: z.string(),
      nombre: z.string(),
      permisos: z.any(),
    })).default([]),
  }).optional(),
})

export const userSchema = z.object({
  email: z.string().email('Email inválido'),
  rol: z.enum(['super_admin', 'admin', 'user', 'tecnico']),
  business_id: z.string().optional(),
  perfil: z.object({
    nombre: z.string().min(2, 'Mínimo 2 caracteres'),
    avatar_url: z.string().url().optional(),
    timezone: z.string().default('America/Argentina/Buenos_Aires'),
  }),
  permisos: z.object({
    puede_editar_config: z.boolean().default(false),
    puede_responder_whatsapp: z.boolean().default(false),
    areas_whatsapp: z.array(z.string()).default([]),
    entidades_acceso: z.array(z.string()).default([]),
    vistas_acceso: z.array(z.string()).default([]),
  }).optional(),
})

export const apiConfigSchema = z.object({
  business_id: z.string().min(1, 'Business ID requerido'),
  api_name: z.string().min(1, 'Nombre de API requerido'),
  configuracion: z.object({
    nombre: z.string().min(1, 'Nombre requerido'),
    descripcion: z.string().optional(),
    base_url: z.string().url('URL inválida'),
    auth: z.object({
      tipo: z.enum(['bearer', 'basic', 'api_key', 'oauth']),
      token: z.string().optional(),
      username: z.string().optional(),
      password: z.string().optional(),
      api_key: z.string().optional(),
      header: z.string().default('Authorization'),
    }),
    headers: z.record(z.string()).default({}),
    endpoints: z.record(z.string()).default({}),
    timeout: z.number().min(1).max(300).default(30),
  }),
})

export type BusinessType = z.infer<typeof businessTypeSchema>
export type BusinessInstance = z.infer<typeof businessInstanceSchema>
export type User = z.infer<typeof userSchema>
export type ApiConfig = z.infer<typeof apiConfigSchema>