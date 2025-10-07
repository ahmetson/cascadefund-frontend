import React from 'react'

interface RoadmapVersionProps {
  version: string
  date: string
  status: 'completed' | 'active' | 'planned'
  features: string[]
  completedIssues?: number
  totalIssues?: number
}

const RoadmapVersion: React.FC<RoadmapVersionProps> = ({ 
  version, 
  date, 
  status, 
  features, 
  completedIssues, 
  totalIssues 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 border-green-300'
      case 'active': return 'bg-blue-100 border-blue-300'
      case 'planned': return 'bg-purple-100 border-purple-300'
      default: return 'bg-gray-100 border-gray-300'
    }
  }

  const getStatusButton = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white'
      case 'active': return 'bg-blue-500 text-white'
      case 'planned': return 'bg-purple-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Archived'
      case 'active': return 'Mark as released'
      case 'planned': return 'Check'
      default: return 'Check'
    }
  }

  return (
    <div className={`p-4 rounded-lg border-2 ${getStatusColor(status)} mb-4`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900">{version}</span>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <span className="text-sm text-gray-600">{date}</span>
      </div>
      
      {completedIssues !== undefined && totalIssues !== undefined && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">Completed Issues:</span>
            <span className="font-medium">{completedIssues}/{totalIssues}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${(completedIssues / totalIssues) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          {status === 'completed' ? 'Completed Issues:' : 'Planned Features:'}
        </h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-sm flex items-center justify-center">
                {status === 'completed' && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button className={`w-full py-2 px-4 text-sm font-medium rounded ${getStatusButton(status)}`}>
        {getStatusText(status)}
      </button>
      
      {status === 'planned' && (
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">15 people</span>
        </div>
      )}
    </div>
  )
}

const RoadmapSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Roadmap (Versions)</h3>
          <a href="#" className="text-sm text-blue-600 hover:underline">View Archive</a>
        </div>
        
        <div className="space-y-4">
          <RoadmapVersion
            version="v2.4.0"
            date="Oct 13, 2023"
            status="completed"
            features={[
              "Discovered authentication system",
              "New dashboard experience",
              "Performance optimizations"
            ]}
            completedIssues={8}
            totalIssues={8}
          />
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Marked as complete!</span>
            </div>
            <p className="text-xs text-green-700">
              Wow! Informed 5 people who were waiting for this release.
            </p>
          </div>
          
          <RoadmapVersion
            version="v2.5.0"
            date="Oct 12, 2023"
            status="active"
            features={[
              "Dark mode implementation",
              "Tablet responsive layout fixes",
              "Google Calendar integration"
            ]}
          />
          
          <RoadmapVersion
            version="v2.6.0"
            date="Oct 12, 2023"
            status="planned"
            features={[
              "Advanced filtering options",
              "API rate limit improvements"
            ]}
          />
        </div>
        
        <div className="mt-4 p-3 border-2 border-dashed border-gray-300 rounded-lg text-center">
          <span className="text-sm text-gray-500">Add another version</span>
        </div>
      </div>
    </div>
  )
}

export default RoadmapSection
