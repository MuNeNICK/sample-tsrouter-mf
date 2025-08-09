import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders')({
  component: Orders,
})

function Orders() {
  const orders = [
    { id: 'ORD-001', customer: 'John Doe', date: '2024-01-15', total: '¥12,500', status: 'Delivered', items: 3 },
    { id: 'ORD-002', customer: 'Jane Smith', date: '2024-01-15', total: '¥8,900', status: 'Processing', items: 2 },
    { id: 'ORD-003', customer: 'Mike Johnson', date: '2024-01-14', total: '¥23,400', status: 'Shipped', items: 5 },
    { id: 'ORD-004', customer: 'Sarah Williams', date: '2024-01-14', total: '¥5,600', status: 'Pending', items: 1 },
    { id: 'ORD-005', customer: 'Tom Brown', date: '2024-01-13', total: '¥15,800', status: 'Delivered', items: 4 },
  ]

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Orders</h3>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Pending Orders</h3>
            <p className="text-2xl font-bold text-orange-600">23</p>
            <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Today's Revenue</h3>
            <p className="text-2xl font-bold">¥234,567</p>
            <p className="text-xs text-green-600 mt-1">+8% from yesterday</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg. Order Value</h3>
            <p className="text-2xl font-bold">¥8,900</p>
            <p className="text-xs text-blue-600 mt-1">Stable</p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search orders..."
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <select className="px-3 py-2 border rounded-md">
                <option>All Status</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
              <input
                type="date"
                className="px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Order ID</th>
                  <th className="text-left p-4">Customer</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Items</th>
                  <th className="text-left p-4">Total</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-accent/50">
                    <td className="p-4 font-medium">{order.id}</td>
                    <td className="p-4">{order.customer}</td>
                    <td className="p-4 text-muted-foreground">{order.date}</td>
                    <td className="p-4">{order.items}</td>
                    <td className="p-4 font-medium">{order.total}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-primary hover:underline text-sm mr-3">View</button>
                      <button className="text-primary hover:underline text-sm">Track</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Showing 1-5 of 1,234 orders</span>
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