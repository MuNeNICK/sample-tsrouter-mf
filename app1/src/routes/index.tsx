import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome to Module Federation Demo</h1>
        <p className="text-lg mb-4">
          This is a demo application using TanStack Router with Module Federation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-2">Module Federation</h2>
            <p className="text-muted-foreground">
              Components are loaded from the shared remote module.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-2">TanStack Router</h2>
            <p className="text-muted-foreground">
              Type-safe routing with automatic code splitting.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-2">Vite + React</h2>
            <p className="text-muted-foreground">
              Fast development with HMR and optimized builds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
