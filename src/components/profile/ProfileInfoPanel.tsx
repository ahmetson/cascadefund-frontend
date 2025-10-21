import React, { useState } from 'react'
import BasePanel from '@/components/panel/BasePanel'
import { AnimatePresence, motion } from 'motion/react'
import ViewableProfileInfo from './ViewableProfileInfo'
import UpdateableProfileInfo from './UpdateableProfileInfo'

const C: React.FC = () => {
  const [updateable, setUpdateable] = useState(false);

  return (
    <BasePanel className='mb-8'>
      <AnimatePresence mode="wait">
        <motion.div
          key={updateable ? "updateable" : "view"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2, when: "beforeChildren", delayChildren: 0.2, }}
        >
          {
            !updateable ? <ViewableProfileInfo onActionClick={() => { setUpdateable(true) }} /> :
              <UpdateableProfileInfo onActionClick={() => { setUpdateable(false) }} />
          }
        </motion.div>
      </AnimatePresence>
    </BasePanel>
  )
}

export default C
