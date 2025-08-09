import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-card p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-primary">JD</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Role</h3>
              <p className="text-base">Senior Developer</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Department</h3>
              <p className="text-base">Engineering</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
              <p className="text-base">Tokyo, Japan</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Joined</h3>
              <p className="text-base">January 2022</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">GraphQL</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AWS</span>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">E-commerce Platform</span>
                <span className="text-xs text-muted-foreground">Lead Developer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Mobile App API</span>
                <span className="text-xs text-muted-foreground">Backend Developer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Analytics Dashboard</span>
                <span className="text-xs text-muted-foreground">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}