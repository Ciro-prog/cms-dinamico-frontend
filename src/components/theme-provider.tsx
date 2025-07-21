// ================================
// src/components/theme-provider.tsx - Simplificado
// ================================
'use client'

import * as React from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ 
  children, 
  attribute = "class",
  defaultTheme = "light",
  enableSystem = true,
  disableTransitionOnChange = true
}: ThemeProviderProps) {
  // Versión simplificada - puedes instalar next-themes después
  return <>{children}</>
}