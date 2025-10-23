import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import { FinanceInfoProps } from '../types'
import NumberFlow, { NumberFlowGroup } from '@number-flow/react'
import { cn } from '@/lib/utils'

const FinancialStatus: React.FC<FinanceInfoProps> = ({ balance, cascadingBalance, totalDonated, totalReceived }) => {
  return (
    <PageLikePanel interactive={false} title="Finance Info" actions={[]}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Balance / Cascading Balance</p>
            <p className="text-2xl font-bold">
              <NumberFlowGroup>
                <div
                  className="flex items-center gap-4 font-semibold"
                >
                  <NumberFlow
                    value={balance}
                    locales="en-US"
                    format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'always' }}
                    className="~text-2xl/4xl"
                  />
                  <span className="text-lg text-gray-500 -ml-2"> / </span>
                  <NumberFlow
                    value={cascadingBalance}
                    locales="en-US"
                    format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'always' }}
                    className={cn(
                      'text-lg -ml-2',
                      'transition-colors duration-300 text-gray-500',
                      cascadingBalance <= 10 ? 'text-red-500' : 'text-gray-500'
                    )}
                  />
                </div>
              </NumberFlowGroup>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Donated / Total Received</p>
            <p className="text-2xl font-bold text-blue-500">
              <NumberFlowGroup>
                <div
                  className="flex items-center gap-4 font-semibold"
                >
                  <NumberFlow
                    value={totalDonated}
                    locales="en-US"
                    format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'always' }}
                    className="~text-2xl/4xl"
                  />
                  <span className="text-lg text-teal-500 -ml-2"> / </span>
                  <NumberFlow
                    value={totalReceived}
                    locales="en-US"
                    format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'always' }}
                    className={cn(
                      'text-lg -ml-2',
                      'transition-colors duration-300 text-teal-500',
                      cascadingBalance <= 10 ? 'text-red-500' : 'text-teal-500'
                    )}
                  />
                </div>
              </NumberFlowGroup>
            </p>
          </div>
        </div>

        <div className='border-t pt-4 text-center text-gray-500'>
          <span>More features about finances will be here</span>
        </div>
        {/* <div className="border-t pt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">Monthly Activity</p>
            <div className="h-20 bg-gray-100 rounded flex items-end justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 50">
                <polyline
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="2"
                  points="10,40 20,35 30,30 40,25 50,20 60,25 70,30 80,35 90,40"
                />
              </svg>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Spending Distribution</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-green-600">Bug Bounties</span>
                <span>$2,340.00 (49%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: '49%' }}></div>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-blue-600">Feature Development</span>
                <span>$1,450.00 (30%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{ width: '30%' }}></div>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-purple-600">Documentation</span>
                <span>$650.00 (14%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-purple-500 h-1 rounded-full" style={{ width: '14%' }}></div>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-yellow-600">Code Reviews</span>
                <span>$340.00 (7%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-yellow-500 h-1 rounded-full" style={{ width: '7%' }}></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </PageLikePanel>
  )
}

export default FinancialStatus
