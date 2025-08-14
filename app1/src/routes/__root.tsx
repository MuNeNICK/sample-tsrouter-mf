import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useState } from 'react'
import { Home, LayoutDashboard, User, Settings, Users, BarChart } from 'lucide-react'

import Header from 'shared/Header'
import { AppSidebar, SidebarProvider, SidebarInset } from 'shared/Sidebar'
import type { MenuItem } from 'shared/types'
import { ThemeProvider } from 'shared/theme'

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
      title: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      href: "/dashboard",
    },
    {
      title: "Profile",
      icon: <User className="h-4 w-4" />,
      href: "/profile",
    },
    {
      title: "Analytics",
      icon: <BarChart className="h-4 w-4" />,
      href: "/analytics",
    },
    {
      title: "Team",
      icon: <Users className="h-4 w-4" />,
      href: "/team",
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
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar onNavigate={handleNavigate} menuItems={menuItems} appName="Admin Panel" />
        <SidebarInset>
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
          <TanStackRouterDevtools />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
