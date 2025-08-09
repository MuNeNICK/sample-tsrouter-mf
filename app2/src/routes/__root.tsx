import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useState } from 'react'
import { Home, FileText, Package, ShoppingCart, Users, Settings } from 'lucide-react'

import Header from 'shared/Header'
import { AppSidebar, SidebarProvider, SidebarInset } from 'shared/Sidebar'
import type { MenuItem } from 'shared/types'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      icon: <Home className="h-4 w-4" />,
      href: "/",
    },
    {
      title: "Reports",
      icon: <FileText className="h-4 w-4" />,
      href: "/reports",
    },
    {
      title: "Inventory",
      icon: <Package className="h-4 w-4" />,
      href: "/inventory",
    },
    {
      title: "Orders",
      icon: <ShoppingCart className="h-4 w-4" />,
      href: "/orders",
    },
    {
      title: "Customers",
      icon: <Users className="h-4 w-4" />,
      href: "/customers",
    },
    {
      title: "Settings",
      icon: <Settings className="h-4 w-4" />,
      href: "/settings",
    },
  ]

  const handleNavigate = (href: string) => {
    navigate({ to: href })
    setSidebarOpen(false)
  }

  return (
    <SidebarProvider>
      <AppSidebar onNavigate={handleNavigate} menuItems={menuItems} appName="E-Commerce Admin" />
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
