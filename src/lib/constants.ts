export const APP_NAME = 'CMS Dinámico'
export const APP_DESCRIPTION = 'Sistema de CMS dinámico y configurable'

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  USER: 'user',
  TECNICO: 'tecnico',
} as const

export const BUSINESS_TYPES = {
  ISP: 'isp',
  CLINICA: 'clinica',
  RESTAURANTE: 'restaurante',
  TIENDA: 'tienda',
  RRHH: 'rrhh',
} as const

export const COMPONENT_TYPES = {
  STATS_CARD: 'stats_card',
  CHART: 'chart',
  DATA_TABLE: 'data_table',
  FORM: 'form',
  CUSTOM: 'custom',
} as const

export const FIELD_TYPES = {
  TEXT: 'text',
  NUMBER: 'number',
  EMAIL: 'email',
  PHONE: 'phone',
  DATE: 'date',
  BOOLEAN: 'boolean',
  SELECT: 'select',
  URL: 'url',
} as const

export const API_AUTH_TYPES = {
  BEARER: 'bearer',
  BASIC: 'basic',
  API_KEY: 'api_key',
  OAUTH: 'oauth',
} as const

export const CHART_TYPES = {
  LINE: 'line',
  BAR: 'bar',
  PIE: 'pie',
  AREA: 'area',
  DONUT: 'donut',
} as const

export const NAVIGATION_ITEMS = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: 'Home',
  },
  {
    title: 'Business Types',
    href: '/admin/business-types',
    icon: 'Package',
  },
  {
    title: 'Businesses',
    href: '/admin/businesses',
    icon: 'Building',
  },
  {
    title: 'Configurador',
    href: '/admin/configurator',
    icon: 'Settings',
  },
  {
    title: 'Usuarios',
    href: '/admin/users',
    icon: 'Users',
  },
  {
    title: 'APIs',
    href: '/admin/api-configs',
    icon: 'Link',
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: 'BarChart3',
  },
]