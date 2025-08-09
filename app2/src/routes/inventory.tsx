import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/inventory')({
  component: Inventory,
})

function Inventory() {
  const products = [
    { id: 1, name: 'Product A', sku: 'SKU-001', stock: 150, price: '¥2,500', status: 'In Stock' },
    { id: 2, name: 'Product B', sku: 'SKU-002', stock: 23, price: '¥3,800', status: 'Low Stock' },
    { id: 3, name: 'Product C', sku: 'SKU-003', stock: 0, price: '¥1,200', status: 'Out of Stock' },
    { id: 4, name: 'Product D', sku: 'SKU-004', stock: 85, price: '¥5,600', status: 'In Stock' },
    { id: 5, name: 'Product E', sku: 'SKU-005', stock: 12, price: '¥890', status: 'Low Stock' },
  ]

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Products</h3>
            <p className="text-2xl font-bold">348</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">In Stock</h3>
            <p className="text-2xl font-bold text-green-600">285</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Low Stock</h3>
            <p className="text-2xl font-bold text-orange-600">42</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Out of Stock</h3>
            <p className="text-2xl font-bold text-red-600">21</p>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-sm border">
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <select className="px-3 py-2 border rounded-md">
                <option>All Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Product Name</th>
                  <th className="text-left p-4">SKU</th>
                  <th className="text-left p-4">Stock</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-accent/50">
                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4 text-muted-foreground">{product.sku}</td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4">{product.price}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        product.status === 'In Stock' 
                          ? 'bg-green-100 text-green-800'
                          : product.status === 'Low Stock'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-primary hover:underline text-sm mr-3">Edit</button>
                      <button className="text-primary hover:underline text-sm">Restock</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Showing 1-5 of 348 products</span>
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