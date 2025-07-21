// ================================
// src/lib/store/configurator.ts
// ================================
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ComponenteVista, ConfiguracionVista, EntityConfig } from '@/types'

interface ConfiguratorState {
  // Current business being configured
  currentBusinessId: string | null
  
  // View configuration
  currentView: string | null
  viewConfig: ConfiguracionVista | null
  selectedComponent: ComponenteVista | null
  
  // Entities
  entityConfigs: EntityConfig[]
  
  // Canvas state
  canvasMode: 'design' | 'preview'
  isDragging: boolean
  
  // Actions
  setCurrentBusinessId: (businessId: string) => void
  setCurrentView: (view: string) => void
  setViewConfig: (config: ConfiguracionVista) => void
  setSelectedComponent: (component: ComponenteVista | null) => void
  setEntityConfigs: (configs: EntityConfig[]) => void
  setCanvasMode: (mode: 'design' | 'preview') => void
  setIsDragging: (dragging: boolean) => void
  
  // Component actions
  addComponent: (component: ComponenteVista) => void
  updateComponent: (componentId: string, updates: Partial<ComponenteVista>) => void
  removeComponent: (componentId: string) => void
  moveComponent: (componentId: string, position: { x: number; y: number }) => void
  resizeComponent: (componentId: string, size: { w: number; h: number }) => void
}

export const useConfiguratorStore = create<ConfiguratorState>()(
  devtools(
    (set, get) => ({
      // Initial state
      currentBusinessId: null,
      currentView: null,
      viewConfig: null,
      selectedComponent: null,
      entityConfigs: [],
      canvasMode: 'design',
      isDragging: false,
      
      // Actions
      setCurrentBusinessId: (currentBusinessId) => set({ currentBusinessId }),
      setCurrentView: (currentView) => set({ currentView }),
      setViewConfig: (viewConfig) => set({ viewConfig }),
      setSelectedComponent: (selectedComponent) => set({ selectedComponent }),
      setEntityConfigs: (entityConfigs) => set({ entityConfigs }),
      setCanvasMode: (canvasMode) => set({ canvasMode }),
      setIsDragging: (isDragging) => set({ isDragging }),
      
      // Component actions
      addComponent: (component) => set((state) => ({
        viewConfig: state.viewConfig ? {
          ...state.viewConfig,
          componentes: [...state.viewConfig.componentes, component]
        } : null
      })),
      
      updateComponent: (componentId, updates) => set((state) => ({
        viewConfig: state.viewConfig ? {
          ...state.viewConfig,
          componentes: state.viewConfig.componentes.map(comp => 
            comp.id === componentId ? { ...comp, ...updates } : comp
          )
        } : null
      })),
      
      removeComponent: (componentId) => set((state) => ({
        viewConfig: state.viewConfig ? {
          ...state.viewConfig,
          componentes: state.viewConfig.componentes.filter(comp => comp.id !== componentId)
        } : null,
        selectedComponent: state.selectedComponent?.id === componentId ? null : state.selectedComponent
      })),
      
      moveComponent: (componentId, position) => set((state) => ({
        viewConfig: state.viewConfig ? {
          ...state.viewConfig,
          componentes: state.viewConfig.componentes.map(comp => 
            comp.id === componentId ? { 
              ...comp, 
              posicion: { ...comp.posicion, ...position }
            } : comp
          )
        } : null
      })),
      
      resizeComponent: (componentId, size) => set((state) => ({
        viewConfig: state.viewConfig ? {
          ...state.viewConfig,
          componentes: state.viewConfig.componentes.map(comp => 
            comp.id === componentId ? { 
              ...comp, 
              posicion: { ...comp.posicion, ...size }
            } : comp
          )
        } : null
      })),
    }),
    {
      name: 'cms-configurator-store',
    }
  )
)