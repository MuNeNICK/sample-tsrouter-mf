import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Menu, Search, Sun, Moon } from "lucide-react"
import { HeaderProps } from "../types"
import { useTheme } from "../contexts/theme-context"

export default function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        <div className="flex flex-1 items-center justify-between">
          <h1 className="text-lg font-semibold">Module Federation App</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}