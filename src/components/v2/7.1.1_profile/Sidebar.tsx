import React from 'react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import Button from './ui/Button'

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm">
              <span className="text-blue-600">Completed task "Fix responsive layout" in UI Framework</span>
              <div className="text-gray-500 text-xs mt-1">Average visit: Once in a week</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-3 flex items-center">
            <span className="text-yellow-500 mr-2">★</span>
            Highlighted Interaction
          </h4>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://dummyimage.com/32x32/4A90E2/ffffff?text=SJ" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover"
                referrerpolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-sm">Sarah Johnson</span>
                <Badge variant="secondary" size="sm">220 rating</Badge>
              </div>
              <p className="text-sm text-gray-600 mt-1">@David your code is really good!</p>
              <p className="text-xs text-gray-500 mt-1">Today at 8:22 AM</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Project Time Allocation</h3>
          <Button variant="ghost" size="sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </Button>
        </div>
        
        <div className="relative w-48 h-48 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" 
                    strokeDasharray="125.6" strokeDashoffset="62.8"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" 
                    strokeDasharray="125.6" strokeDashoffset="31.4"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#6b7280" strokeWidth="8" 
                    strokeDasharray="125.6" strokeDashoffset="94.2"/>
          </svg>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span>UI Framework (45%)</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Data Processing API (30%)</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span>Documentation Portal (15%)</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Other projects (10%)</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-3">Top 3 projects of the user:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Maintaining</Badge>
            <Badge variant="secondary">Contributor</Badge>
            <Badge variant="secondary">Influencer</Badge>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">UI Framework</span>
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">2</div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
                  </div>
                </div>
                <Badge variant="outline">Influencer</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-2">Impact: 45%</div>
              <p className="text-sm text-gray-700 mb-2">Primary focus: Accessibility improvements and responsive design issues</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Last contribution: 2 days ago</span>
                <span>23 issues closed / 504 open</span>
              </div>
            </div>

            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Data Processing API</span>
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">2</div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
                  </div>
                </div>
                <Badge variant="outline">Contributor</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-2">Impact: 30%</div>
              <p className="text-sm text-gray-700 mb-2">Primary focus: Performance optimization and error handling</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Last contribution: 1 week ago</span>
                <span>42 commits</span>
              </div>
            </div>

            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Documentation Portal</span>
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">2</div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
                  </div>
                </div>
                <Badge variant="outline">Maintainer</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-2">Impact: 15%</div>
              <p className="text-sm text-gray-700 mb-2">Primary focus: Content structure and API documentation</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Last contribution: 3 days ago</span>
                <span>8 PRs merged</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Button variant="ghost" className="text-blue-600">
              <span>View All Projects</span>
              <div className="flex space-x-1 ml-2">
                <div className="w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">2</div>
                <div className="w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
              </div>
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-yellow-100">
        <h3 className="font-semibold mb-4">Top Supporters</h3>
        <div className="text-right mb-2">
          <Button variant="ghost" size="sm" className="text-blue-600">Similar Profiles</Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="https://dummyimage.com/32x32/4A90E2/ffffff?text=SJ" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                  referrerpolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-medium text-sm">Sarah Johnson</div>
                <div className="text-xs text-gray-500">220 rating</div>
              </div>
            </div>
            <span className="text-green-600 font-medium">+$88</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="https://dummyimage.com/32x32/4A90E2/ffffff?text=DR" 
                  alt="David Rodriguez" 
                  className="w-full h-full object-cover"
                  referrerpolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-medium text-sm">David Rodriguez</div>
                <div className="text-xs text-gray-500">220 rating</div>
              </div>
            </div>
            <span className="text-green-600 font-medium">+$88</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Sidebar
