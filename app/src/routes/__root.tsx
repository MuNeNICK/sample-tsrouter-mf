import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useState } from 'react'

import Header from 'shared/Header'
import { AppSidebar, SidebarProvider, SidebarInset } from 'shared/Sidebar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavigate = (href: string) => {
    navigate({ to: href })
    setSidebarOpen(false)
  }

  return (
    <SidebarProvider>
      <AppSidebar onNavigate={handleNavigate} />
      <SidebarInset>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </SidebarInset>
    </SidebarProvider>
  )
}
