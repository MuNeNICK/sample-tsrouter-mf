import { ReactNode } from 'react'

export interface MenuItem {
  title: string
  icon: ReactNode
  href: string
}

export interface HeaderProps {
  onMenuClick?: () => void
}

export interface AppSidebarProps {
  onNavigate?: (href: string) => void
  menuItems?: MenuItem[]
}

export interface SidebarProviderProps {
  children: ReactNode
}

export interface SidebarInsetProps {
  children: ReactNode
}