import React from 'react'
import { FinanceInfoProps } from './profile/types'
import NumberFlow, { NumberFlowGroup } from '@number-flow/react'
import { cn } from '@/lib/utils'
import BasePanel from '@/components/panel/BasePanel'
import PanelFooter from '@/components/panel/PanelFooter'
import TimeAgo from 'timeago-react'

export type InfoPairProps = {
  title1: string
  value1: number
  type1?: 'currency' | 'number' | 'percentage' | 'time'
  title2: string
  value2: number
  type2?: 'currency' | 'number' | 'percentage' | 'time'
  belowThresholdColor?: number
  footer?: React.ReactNode
}

const InfoPair: React.FC<InfoPairProps> = ({ title1, value1, type1 = 'currency', title2, value2, type2 = 'currency', belowThresholdColor = 10, footer }) => {
  return (
    <BasePanel className="w-80 border-none shadow-none bg-white/25">
      <p className="text-sm text-gray-500">{title1} / {title2}</p>
      <p className="text-xl font-bold mb-2">
        <NumberFlowGroup>
          <div
            className="flex items-center gap-4 font-semibold"
          >
            {type1 === 'time' && (
              <TimeAgo datetime={new Date(value1 * 1000)} className='text-gray-700' />
            )}
            {type1 === 'number' && (
              <NumberFlow
                value={value1}
                locales="en-US"
                format={{ style: 'decimal', maximumFractionDigits: 2 }}
                className="~text-xl/4xl text-gray-700"
              />
            )}
            {type1 === 'currency' && (
              <NumberFlow
                value={value1}
                locales="en-US"
                format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'always' }}
                className="~text-xl/4xl text-gray-700"
              />
            )}
            <span className="text-lg text-gray-500 -ml-2"> / </span>
            {type2 === 'time' && (
              <TimeAgo datetime={new Date(value2 * 1000)} />
            )}
            {type2 === 'number' && (
              <NumberFlow
                value={value2}
                locales="en-US"
                format={{ style: 'decimal', maximumFractionDigits: 2 }}
                className="~text-xl/4xl text-gray-700"
              />
            )}
            {type2 === 'currency' && (
              <NumberFlow
                value={value2}
                locales="en-US"
                format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'always' }}
                className={cn(
                  'text-md -ml-2',
                  'transition-colors duration-300 text-gray-500',
                  value2 <= belowThresholdColor ? 'text-red-500' : 'text-gray-500'
                )}
              />
            )}
          </div>
        </NumberFlowGroup>
      </p>
      {footer && <PanelFooter className="text-gray-500 text-sm items-center flex justify-center">{footer}</PanelFooter>}
    </BasePanel>
  )
}

export default InfoPair
