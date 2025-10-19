import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'

const Sidebar: React.FC = () => {
  return (
    <PageLikePanel title="Related Issues" actions={[]}>
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
    </PageLikePanel>
  )
}

export default Sidebar
