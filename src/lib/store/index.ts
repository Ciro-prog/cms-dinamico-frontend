// ================================
// src/lib/store/index.ts
// ================================
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { BusinessType, BusinessInstance, User, ApiConfiguration } from '@/types'

interface GlobalState {
  // Auth
  user: User | null
  isLoading: boolean
  
  // Business Types
  businessTypes: BusinessType[]
  currentBusinessType: BusinessType | null
  
  // Business Instances
  businesses: BusinessInstance[]
  currentBusiness: BusinessInstance | null
  
  // Users
  users: User[]
  
  // API Configurations
  apiConfigs: ApiConfiguration[]
  
  // Actions
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setBusinessTypes: (types: BusinessType[]) => void
  setCurrentBusinessType: (type: BusinessType | null) => void
  setBusinesses: (businesses: BusinessInstance[]) => void
  setCurrentBusiness: (business: BusinessInstance | null) => void
  setUsers: (users: User[]) => void
  setApiConfigs: (configs: ApiConfiguration[]) => void
}

export const useGlobalStore = create<GlobalState>()(
  devtools(
    (set) => ({
      // Initial state
      user: null,
      isLoading: false,
      businessTypes: [],
      currentBusinessType: null,
      businesses: [],
      currentBusiness: null,
      users: [],
      apiConfigs: [],
      
      // Actions
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      setBusinessTypes: (businessTypes) => set({ businessTypes }),
      setCurrentBusinessType: (currentBusinessType) => set({ currentBusinessType }),
      setBusinesses: (businesses) => set({ businesses }),
      setCurrentBusiness: (currentBusiness) => set({ currentBusiness }),
      setUsers: (users) => set({ users }),
      setApiConfigs: (apiConfigs) => set({ apiConfigs }),
    }),
    {
      name: 'cms-global-store',
    }
  )
)