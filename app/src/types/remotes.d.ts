declare module 'shared/Header' {
  import type { FC } from 'react'
  
  export interface HeaderProps {
    onMenuClick?: () => void
  }
  
  const Header: FC<HeaderProps>
  export default Header
}

declare module 'shared/Sidebar' {
  import type { FC, ReactNode } from 'react'
  
  export interface AppSidebarProps {
    onNavigate?: (href: string) => void
  }
  
  export interface SidebarProviderProps {
    children: ReactNode
  }
  
  export const AppSidebar: FC<AppSidebarProps>
  export const SidebarProvider: FC<SidebarProviderProps>
  export const SidebarTrigger: FC
  export const SidebarInset: FC<React.ComponentProps<'main'>>
}