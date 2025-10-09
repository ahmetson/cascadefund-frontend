import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import Horizontally from '@/components/v2/grid/Horizontally'

const IssueContent: React.FC = () => {
  return (
      <Card title="Issue Prioritization" actions={[]}>
        <Horizontally >
          <Card title="Prioritization Details" actions={[]} bg={'green-100'}>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Not a rating issue</span>
                <span className="text-sm text-gray-600">Rating</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">+ 0 Rating Score</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">Forks</span>
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">1</span>
              </div>
          </Card>

          <Card title="Prioritization Details" actions={[]} bg={'green-100'}>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cascade-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-2xl font-bold text-gray-900">100</span>
              </div>
              <div className="text-sm text-gray-600">
                <div>Total available</div>
                <div className="text-xs text-green-600">+50% bonus points by rating</div>
              </div>
              <div className="text-xs text-gray-500">
                Want to have more points?<br />
                They fund using <span className="text-cascade-blue">Donation</span>
              </div>
          </Card>
        </Horizontally>

        <Card title="Turn Into Rating Issue" actions={[{label: 'Save', href: '/v2/issue'}]} bg="green-100">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Min | 1 | 23 VP</span>
              <span>2nd | 123 VP</span>
              <span>1st | 123 VP</span>
              <span>Max | 123 VP</span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-cascade-blue h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-white border-2 border-cascade-blue rounded-full -mt-1"></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-cascade-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">+23 VP</span>
                <span className="text-gray-600">+ 0.02 Rating Score</span>
              </div>
              <span className="text-gray-600">1nd / 20 issues</span>
            </div>
        </Card>
      </Card>
  )
}

export default IssueContent
