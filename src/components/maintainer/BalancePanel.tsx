import React, { useState } from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import NumberFlow from '@number-flow/react'
import Label from '../custom-ui/Label'
import LabeledInput from '../custom-ui/LabeledInput'



const BalanceCard: React.FC = () => {
  const [disabled, setDisabled] = useState(false)

  return (
    <PageLikePanel interactive={false} title="Balance" actions={[
      {
        variant: 'primary',
        children: 'Withdraw',
        onClick: () => { },
        disabled: disabled
      }
    ]}>

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
        <LabeledInput id="address" label="Address" value="0x8F5a2bD707D9a654bbF5dFC3A27737BDc1d24A8" type="text" placeholder='Enter your Ethereum network address' />
      </div>
    </PageLikePanel>
  )
}

export default BalanceCard
