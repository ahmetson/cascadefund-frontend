import React from 'react'
import Link from '@/components/v2/Link'

const IssuesSection: React.FC = () => {
  return (
    <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">How to work with issues?</h3>
    
        <ul className="text-xs text-gray-600 space-y-2 mb-4">
          <li>• Drag and drop issue cards into tasks (rating issues, heavy work, closed)</li>
          <li>• Roadmap version cards to mark that it will be released in the futures.</li>
          <li>• Click on issue, if you want to discuss it</li>
        </ul>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Control</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• The funded issues affect the rating of your project.</li>
            <li>• Only your users can add the issues.</li>
            <li>• There are two types of the users:</li>
            <li className="ml-4">- If you building a software used as a component for other software, then the other maintainer who receives a message. Ask your users to sign up, and we will fetch your library via SBOM.</li>
            <li className="ml-4">- Or users may add or vote for issues via <Link label='donation page' href='/v2/meta/work' />.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IssuesSection
