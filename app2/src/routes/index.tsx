import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">E-Commerce Dashboard</h1>
        <p className="text-lg mb-4">
          Welcome to your e-commerce management system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Today's Sales</h3>
            <p className="text-2xl font-bold">¥234,567</p>
            <p className="text-xs text-green-600 mt-1">+12% from yesterday</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">New Orders</h3>
            <p className="text-2xl font-bold">48</p>
            <p className="text-xs text-blue-600 mt-1">23 pending processing</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">New Customers</h3>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-green-600 mt-1">+20% this week</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Low Stock Items</h3>
            <p className="text-2xl font-bold text-orange-600">7</p>
            <p className="text-xs text-orange-600 mt-1">Needs attention</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Order #ORD-001</span>
                <span className="text-sm font-medium">¥12,500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Order #ORD-002</span>
                <span className="text-sm font-medium">¥8,900</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Order #ORD-003</span>
                <span className="text-sm font-medium">¥23,400</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                Add Product
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
                Create Order
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
                Export Report
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
                View Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
