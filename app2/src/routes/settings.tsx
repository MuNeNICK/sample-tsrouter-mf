import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: Settings,
})

function Settings() {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">E-Commerce Settings</h1>
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Store Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Store Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue="My E-Commerce Store" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Store URL</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue="https://mystore.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Currency</label>
                <select className="w-full px-3 py-2 border rounded-md bg-background">
                  <option>JPY - Japanese Yen</option>
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Credit Card Payments</p>
                  <p className="text-sm text-muted-foreground">Accept Visa, Mastercard, AMEX</p>
                </div>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">PayPal</p>
                  <p className="text-sm text-muted-foreground">Enable PayPal checkout</p>
                </div>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Bank Transfer</p>
                  <p className="text-sm text-muted-foreground">Accept direct bank transfers</p>
                </div>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Shipping Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Default Shipping Method</label>
                <select className="w-full px-3 py-2 border rounded-md bg-background">
                  <option>Standard Shipping (3-5 days)</option>
                  <option>Express Shipping (1-2 days)</option>
                  <option>Same Day Delivery</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Free Shipping Threshold</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue="¥5,000" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">International Shipping</p>
                  <p className="text-sm text-muted-foreground">Ship to countries outside Japan</p>
                </div>
                <input type="checkbox" className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Tax Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tax Rate (%)</label>
                <input type="number" className="w-full px-3 py-2 border rounded-md" defaultValue="10" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Include Tax in Prices</p>
                  <p className="text-sm text-muted-foreground">Display prices with tax included</p>
                </div>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button className="px-6 py-2 border rounded-md hover:bg-accent">
              Cancel
            </button>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}