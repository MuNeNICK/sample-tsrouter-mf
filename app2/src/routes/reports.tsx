import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reports')({
  component: Reports,
})

function Reports() {
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Sales Report</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Today</span>
                <span className="font-medium">¥234,567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">This Week</span>
                <span className="font-medium">¥1,234,567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">This Month</span>
                <span className="font-medium">¥5,234,567</span>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              View Details
            </button>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Product Performance</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Top Seller</span>
                <span className="text-sm font-medium">Product A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Units Sold</span>
                <span className="text-sm font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Conversion Rate</span>
                <span className="text-sm font-medium">3.2%</span>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
              Generate Report
            </button>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Customer Analytics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">New Customers</span>
                <span className="text-sm font-medium">+123</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Retention Rate</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Avg. Order Value</span>
                <span className="text-sm font-medium">¥12,345</span>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
              Export Data
            </button>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Report Name</th>
                  <th className="text-left p-3">Type</th>
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-accent/50">
                  <td className="p-3">Monthly Sales Summary</td>
                  <td className="p-3">Sales</td>
                  <td className="p-3">2024-01-15</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                  </td>
                  <td className="p-3">
                    <button className="text-primary hover:underline text-sm">View</button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/50">
                  <td className="p-3">Inventory Analysis</td>
                  <td className="p-3">Inventory</td>
                  <td className="p-3">2024-01-14</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                  </td>
                  <td className="p-3">
                    <button className="text-primary hover:underline text-sm">View</button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-accent/50">
                  <td className="p-3">Customer Behavior Report</td>
                  <td className="p-3">Analytics</td>
                  <td className="p-3">2024-01-13</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Processing</span>
                  </td>
                  <td className="p-3">
                    <button className="text-primary hover:underline text-sm">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}