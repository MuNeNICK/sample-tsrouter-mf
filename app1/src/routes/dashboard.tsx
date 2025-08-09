import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Users</h3>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Revenue</h3>
            <p className="text-2xl font-bold">$12,345</p>
            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Projects</h3>
            <p className="text-2xl font-bold">24</p>
            <p className="text-xs text-blue-600 mt-1">3 pending review</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Tasks Completed</h3>
            <p className="text-2xl font-bold">89%</p>
            <p className="text-xs text-green-600 mt-1">+5% from last week</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">User registration completed</span>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">New project created</span>
                <span className="text-xs text-muted-foreground">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database backup completed</span>
                <span className="text-xs text-muted-foreground">6 hours ago</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Create Project
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
                Invite Team
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
                Generate Report
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}