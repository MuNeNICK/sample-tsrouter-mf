import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team')({
  component: Team,
})

function Team() {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Team Lead', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Senior Developer', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Mike Johnson', role: 'UI/UX Designer', email: 'mike@example.com', status: 'Active' },
    { id: 4, name: 'Sarah Williams', role: 'Backend Developer', email: 'sarah@example.com', status: 'Away' },
    { id: 5, name: 'Tom Brown', role: 'DevOps Engineer', email: 'tom@example.com', status: 'Active' },
  ]

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Team</h1>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Add Member
          </button>
        </div>
        <div className="bg-card rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Role</th>
                  <th className="text-left p-4 font-medium">Email</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-accent/50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </td>
                    <td className="p-4">{member.role}</td>
                    <td className="p-4 text-muted-foreground">{member.email}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        member.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-primary hover:underline text-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Team Size</h3>
            <p className="text-3xl font-bold text-primary">{teamMembers.length}</p>
            <p className="text-sm text-muted-foreground">Active members</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Departments</h3>
            <p className="text-3xl font-bold text-primary">4</p>
            <p className="text-sm text-muted-foreground">Engineering, Design, DevOps, QA</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="text-sm text-muted-foreground">Active projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}