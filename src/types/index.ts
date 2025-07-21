// ================================
// src/types/index.ts
// ================================
export interface BaseResponse<T = any> {
    success: boolean
    message: string
    data: T
  }
  
  export interface PaginatedResponse<T = any> {
    items: T[]
    total: number
    page: number
    per_page: number
    pages: number
    has_next: boolean
    has_prev: boolean
  }
  
  export interface BusinessType {
    id?: string
    tipo: string
    nombre: string
    descripcion?: string
    componentes_base: ComponenteBase[]
    componentes_opcionales: ComponenteOpcional[]
    created_at: string
    updated_at: string
  }
  
  export interface ComponenteBase {
    id: string
    nombre: string
    tipo: 'integration' | 'entity' | 'view'
    obligatorio: boolean
    configuracion_default?: Record<string, any>
  }
  
  export interface ComponenteOpcional {
    id: string
    nombre: string
    tipo: string
    descripcion?: string
  }
  
  export interface BusinessInstance {
    id?: string
    business_id: string
    nombre: string
    tipo_base: string
    configuracion: BusinessConfiguration
    suscripcion: Suscripcion
    activo: boolean
    created_at: string
    updated_at: string
  }
  
  export interface BusinessConfiguration {
    branding: BrandingConfig
    componentes_activos: string[]
    roles_personalizados: RolPersonalizado[]
  }
  
  export interface BrandingConfig {
    logo_url?: string
    colores: {
      primary: string
      secondary: string
      background?: string
      text?: string
      graficos?: string[]
    }
  }
  
  export interface RolPersonalizado {
    rol: string
    nombre: string
    permisos: string | string[]
  }
  
  export interface Suscripcion {
    plan: string
    activa: boolean
    vence?: string
  }
  
  export interface User {
    id?: string
    clerk_user_id: string
    business_id?: string
    email: string
    rol: 'super_admin' | 'admin' | 'user' | 'tecnico'
    permisos: PermisosUsuario
    perfil: PerfilUsuario
    ultimo_acceso?: string
    activo: boolean
    created_at: string
    updated_at: string
  }
  
  export interface PermisosUsuario {
    puede_editar_config: boolean
    puede_responder_whatsapp: boolean
    areas_whatsapp: string[]
    entidades_acceso: string[]
    vistas_acceso: string[]
  }
  
  export interface PerfilUsuario {
    nombre: string
    avatar_url?: string
    timezone: string
    preferencias: PreferenciasUsuario
  }
  
  export interface PreferenciasUsuario {
    tema: 'light' | 'dark' | 'auto'
    idioma: string
  }
  
  export interface EntityConfig {
    id?: string
    business_id: string
    entidad: string
    campos: CampoConfig[]
    api_config?: ApiConfigEntity
    crud_config: CrudConfig
    created_at: string
    updated_at: string
  }
  
  export interface CampoConfig {
    campo: string
    tipo: 'text' | 'number' | 'select' | 'date' | 'boolean' | 'phone' | 'email' | 'url'
    obligatorio: boolean
    visible_roles: string[]
    editable_roles: string[]
    validacion?: string
    opciones?: Array<{ value: string; label: string }>
    opciones_api?: string
    mapeo?: Record<string, string>
    placeholder?: string
    descripcion?: string
  }
  
  export interface ApiConfigEntity {
    fuente: string
    endpoint: string
    metodo: string
    mapeo: Record<string, string>
    cache_config: CacheConfig
    filtros_default?: Record<string, any>
  }
  
  export interface CacheConfig {
    tipo: 'tiempo' | 'webhook' | 'manual'
    refresh_seconds: number
    webhook_url?: string
  }
  
  export interface CrudConfig {
    crear: CrudOperation
    editar: CrudOperation
    eliminar: CrudOperation
    exportar?: CrudOperation
  }
  
  export interface CrudOperation {
    habilitado: boolean
    roles: string[]
    endpoint?: string
    campos_requeridos?: string[]
    confirmacion: boolean
  }
  
  export interface ViewConfig {
    id?: string
    business_id: string
    vista: string
    configuracion: ConfiguracionVista
    permisos_vista: string[]
    created_at: string
    updated_at: string
  }
  
  export interface ConfiguracionVista {
    layout: LayoutConfig
    componentes: ComponenteVista[]
    navegacion: ItemNavegacion[]
  }
  
  export interface LayoutConfig {
    tipo: 'grid' | 'flex' | 'absolute'
    columnas: number
    gap: number
    responsive: boolean
  }
  
  export interface ComponenteVista {
    id: string
    tipo: 'stats_card' | 'chart' | 'data_table' | 'form' | 'custom'
    posicion: Posicion
    configuracion: ConfiguracionComponente
    permisos_rol: string[]
  }
  
  export interface Posicion {
    x: number
    y: number
    w: number
    h: number
  }
  
  export interface ConfiguracionComponente {
    titulo?: string
    entidad?: string
    operacion?: string
    filtro?: string
    icono?: string
    color?: string
    tipo_grafico?: 'line' | 'bar' | 'pie' | 'area' | 'donut'
    columnas_visibles?: string[]
    ordenamiento?: { campo: string; direccion: 'asc' | 'desc' }
    paginacion?: { items_per_page: number }
    acciones?: Record<string, { roles: string[] }>
    filtros?: Array<{ campo: string; tipo: string; opciones_api?: string }>
  }
  
  export interface ItemNavegacion {
    titulo: string
    ruta: string
    icono?: string
    permisos_rol: string[]
  }
  
  export interface ApiConfiguration {
    id?: string
    business_id: string
    api_name: string
    configuracion: ApiConfigData
    activa: boolean
    created_at: string
    updated_at: string
  }
  
  export interface ApiConfigData {
    nombre: string
    descripcion?: string
    base_url: string
    auth: AuthConfig
    headers: Record<string, string>
    endpoints: Record<string, string>
    rate_limit: RateLimitConfig
    timeout: number
    retry_config: RetryConfig
  }
  
  export interface AuthConfig {
    tipo: 'bearer' | 'basic' | 'api_key' | 'oauth'
    token?: string
    username?: string
    password?: string
    api_key?: string
    header: string
  }
  
  export interface RateLimitConfig {
    requests_per_minute: number
    burst: number
  }
  
  export interface RetryConfig {
    max_retries: number
    backoff_factor: number
    retry_on_status: number[]
  }
  