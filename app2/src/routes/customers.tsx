import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customers')({
  component: Customers,
})

function Customers() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', orders: 23, totalSpent: '¥234,567', joined: '2023-06-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', orders: 15, totalSpent: '¥123,890', joined: '2023-08-22' },
    { id: 3, name: 'Mike Johnson', email: 'mike.j@example.com', orders: 42, totalSpent: '¥567,890', joined: '2023-03-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah.w@example.com', orders: 8, totalSpent: '¥45,678', joined: '2023-12-01' },
    { id: 5, name: 'Tom Brown', email: 'tom.brown@example.com', orders: 31, totalSpent: '¥345,678', joined: '2023-05-20' },
  ]

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Customers</h1>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Add Customer
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Customers</h3>
            <p className="text-2xl font-bold">3,456</p>
            <p className="text-xs text-green-600 mt-1">+234 this month</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Customers</h3>
            <p className="text-2xl font-bold">2,890</p>
            <p className="text-xs text-muted-foreground mt-1">84% of total</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg. Order Value</h3>
            <p className="text-2xl font-bold">¥12,345</p>
            <p className="text-xs text-green-600 mt-1">+5% from last month</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Customer Lifetime Value</h3>
            <p className="text-2xl font-bold">¥123,456</p>
            <p className="text-xs text-blue-600 mt-1">Increasing</p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search customers..."
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <select className="px-3 py-2 border rounded-md">
                <option>All Customers</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>VIP</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Customer</th>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Orders</th>
                  <th className="text-left p-4">Total Spent</th>
                  <th className="text-left p-4">Member Since</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-accent/50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium">{customer.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{customer.email}</td>
                    <td className="p-4">{customer.orders}</td>
                    <td className="p-4 font-medium">{customer.totalSpent}</td>
                    <td className="p-4 text-muted-foreground">{customer.joined}</td>
                    <td className="p-4">
                      <button className="text-primary hover:underline text-sm mr-3">View</button>
                      <button className="text-primary hover:underline text-sm">Contact</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Showing 1-5 of 3,456 customers</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded-md hover:bg-accent">Previous</button>
                <button className="px-3 py-1 border rounded-md hover:bg-accent">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}