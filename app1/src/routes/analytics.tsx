import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytics')({
  component: Analytics,
})

function Analytics() {
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Page Views</h3>
            <p className="text-2xl font-bold">45,234</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Unique Visitors</h3>
            <p className="text-2xl font-bold">12,543</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Bounce Rate</h3>
            <p className="text-2xl font-bold">32.5%</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: '32.5%' }}></div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg. Session</h3>
            <p className="text-2xl font-bold">4m 32s</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Direct</span>
                  <span className="text-sm font-medium">35%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Organic Search</span>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Social Media</span>
                  <span className="text-sm font-medium">20%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Referral</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">/dashboard</span>
                <span className="text-sm font-medium">8,234 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">/profile</span>
                <span className="text-sm font-medium">6,123 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">/settings</span>
                <span className="text-sm font-medium">4,567 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">/team</span>
                <span className="text-sm font-medium">3,890 views</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">/analytics</span>
                <span className="text-sm font-medium">2,345 views</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Weekly Trend</h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 75, 85, 70, 90, 85, 95].map((height, index) => (
              <div key={index} className="flex-1 bg-primary/20 rounded-t-md relative group">
                <div 
                  className="bg-primary rounded-t-md transition-all duration-300 group-hover:bg-primary/80" 
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {height}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  )
}