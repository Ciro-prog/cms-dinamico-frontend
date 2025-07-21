// ================================
// src/app/admin/layout.tsx (Admin Layout)
// ================================
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panel de Administración',
  description: 'Panel de administración del CMS Dinámico',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  
  if (!userId) {
    redirect('/login')
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Breadcrumb */}
        <BreadcrumbNav />
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-muted/10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}