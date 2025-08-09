declare module 'shared/Header' {
  interface HeaderProps {
    onMenuClick?: () => void
  }
  const Header: React.FC<HeaderProps>
  export default Header
}

declare module 'shared/Sidebar' {
  import { ReactNode } from 'react'
  
  export interface MenuItem {
    title: string
    icon: ReactNode
    href: string
  }
  
  interface AppSidebarProps {
    onNavigate?: (href: string) => void
    menuItems?: MenuItem[]
  }
  
  export const AppSidebar: React.FC<AppSidebarProps>
  export const SidebarProvider: React.FC<{ children: ReactNode }>
  export const SidebarTrigger: React.FC
  export const SidebarInset: React.FC<{ children: ReactNode }>
}