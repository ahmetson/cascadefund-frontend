import React from 'react'
import Card from './ui/Card'
import Button from './ui/Button'

const HelpSection: React.FC = () => {
  return (
      <Card>
        <h3 className="font-semibold mb-3">Dependencies</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Current version:</span>
              <span className="font-semibold">v2.4.3</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Recent version:</span>
              <span className="font-semibold text-cascade-blue">v2.5.0</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Last commit:</span>
              <span className="font-semibold">2 hours ago</span>
            </div>
          </div>
          <Button variant="primary" size="sm" className="w-full">
            Update Dependencies
          </Button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">
            Dependencies List is generated using project's SBOM. To fetch the SBOM, we use GitHub API.
          </p>
          <p className="text-xs text-gray-500">
            The management of the packages is done on your IDE, once it's updated, deleted or added a new package, then click on "Update Dependencies" button above.
          </p>
        </div>
      </Card>
  )
}

export default HelpSection
