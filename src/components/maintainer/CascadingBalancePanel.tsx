import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Button from '@/components/custom-ui/Button'
import TimeAgo from 'timeago-react'
import LabeledInput from '../custom-ui/LabeledInput'
import Label from '../custom-ui/Label'
import NumberFlow from '@number-flow/react'
import Badge from '../custom-ui/Badge'

const CascadingBalance: React.FC = () => {
  const updatedAt = new Date().getTime()

  return (
    <PageLikePanel
      interactive={false}
      actions={[
        {
          variant: 'primary',
          children: 'Withdraw',
          onClick: () => { },
        }
      ]}
      className="mb-6"
      title={<>Cascading Balance
        <Badge variant="info" static={true}>Updated
          {<TimeAgo datetime={new Date(updatedAt)} />}
        </Badge>
      </>}
    >
      <p className="text-sm text-gray-600 mb-4">
        Indirectly received funds from other projects. Withdraw, and transfer or use for yourself. Check out{' '}
        <a href="#" className="text-cascade-blue hover:underline">Work page</a>{' '}
        to improve the rating to have more funds.
      </p>

      <div className="mb-6">
        <Label>Assets</Label>
        <NumberFlow
          value={3.45928}
          locales="en-US"
          format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 2, signDisplay: 'negative' }}
          className="~text-xl/4xl text-gray-700 px-2 cursor-no-drop"
        />
      </div>
      <div className="mb-6">
        <LabeledInput id="address" label="Address" value="0x8F5a2b0707D9aC64b8F5dFC3A27737B06C1d24A8" type="text" placeholder='Enter your Ethereum network address' />
      </div>
    </PageLikePanel>
  )
}

export default CascadingBalance
