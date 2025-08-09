/// <reference types="vite/client" />

// Module Federation remote modules
declare module 'shared/*' {
  const component: any
  export default component
  export const AppSidebar: any
  export const SidebarProvider: any
  export const SidebarTrigger: any
}