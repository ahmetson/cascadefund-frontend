import React from 'react'

const RelatedIssues: React.FC = () => {
  const issues = [
    {
      title: 'User Session Management',
      type: 'Feature',
      module: 'Authentication Module'
    },
    {
      title: 'Password Reset Flow',
      type: 'Bug',
      module: 'Authentication Module'
    },
    {
      title: '2FA Implementation',
      type: 'Feature',
      module: 'Authentication Module'
    }
  ]

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-4">RELATED ISSUES</h3>
      <div className="space-y-3">
        {issues.map((issue, index) => (
          <div key={index}>
            <div className="text-blue-600 hover:underline cursor-pointer text-sm">
              "Blog Site"
            </div>
            <div className="text-sm font-medium text-gray-900">{issue.title}</div>
            <div className="text-xs text-gray-500">
              {issue.type} • {issue.module}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedIssues
