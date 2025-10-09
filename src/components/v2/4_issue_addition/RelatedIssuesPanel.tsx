import React from 'react'
import Card from '@/components/v2/Card'

const Sidebar: React.FC = () => {
  return (
    <Card>
        <h3 className="text-sm font-medium text-gray-900 mb-3">RELATED ISSUES</h3>
        <div className="space-y-3">
          <div>
            <a href="#" className="text-sm text-cascade-blue hover:underline">"Blog Site"</a>
            <h4 className="text-sm font-medium text-gray-900">User Session Management</h4>
            <p className="text-xs text-gray-600">Feature • Authentication Module</p>
          </div>
          
          <div>
            <a href="#" className="text-sm text-cascade-blue hover:underline">"Blog Site"</a>
            <h4 className="text-sm font-medium text-gray-900">Password Reset Flow</h4>
            <p className="text-xs text-gray-600">Bug • Authentication Module</p>
          </div>
          
          <div>
            <a href="#" className="text-sm text-cascade-blue hover:underline">"Blog Site"</a>
            <h4 className="text-sm font-medium text-gray-900">2FA Implementation</h4>
            <p className="text-xs text-gray-600">Feature • Authentication Module</p>
          </div>
        </div>
    </Card>
  )
}

export default Sidebar
