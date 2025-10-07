import React from 'react'

const RelatedIssues: React.FC = () => {
  const issues = [
    {
      title: 'User Session Management',
      type: 'Feature',
      module: 'Authentication Module',
      project: '"Blog Site"'
    },
    {
      title: 'Password Reset Flow',
      type: 'Bug',
      module: 'Authentication Module',
      project: '"Blog Site"'
    },
    {
      title: '2FA Implementation',
      type: 'Feature',
      module: 'Authentication Module',
      project: '"Blog Site"'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">RELATED ISSUES</h3>
      
      <div className="space-y-4">
        {issues.map((issue, index) => (
          <div key={index}>
            <div className="text-blue-600 hover:underline cursor-pointer text-sm">
              {issue.project}
            </div>
            <div className="font-medium text-gray-900">{issue.title}</div>
            <div className="text-sm text-gray-600">
              {issue.type} • {issue.module}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedIssues
