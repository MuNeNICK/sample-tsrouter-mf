import { Home, FileText, Settings, Users, BarChart, HelpCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar"
import { Button } from "./ui/button"

interface MenuItem {
  title: string
  icon: React.ReactNode
  href: string
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    icon: <Home className="h-4 w-4" />,
    href: "/",
  },
  {
    title: "Documents",
    icon: <FileText className="h-4 w-4" />,
    href: "/documents",
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

interface AppSidebarProps {
  onNavigate?: (href: string) => void
}

export function AppSidebar({ onNavigate }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => onNavigate?.(item.href)}
                    className="w-full"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help & Support
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export { SidebarProvider, SidebarTrigger, SidebarInset } from './ui/sidebar'