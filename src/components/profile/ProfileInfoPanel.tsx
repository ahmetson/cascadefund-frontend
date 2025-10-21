import React, { useState } from 'react'
import BasePanel from '@/components/panel/BasePanel'
import { AnimatePresence, motion } from 'motion/react'
import ViewableProfileInfo, { ProfileProps } from './ViewableProfileInfo'
import UpdateableProfileInfo from './UpdateableProfileInfo'
import { AllPersonaRatings } from '../rating/ProfileRatingPanel'

const C: React.FC = () => {
  const [updateable, setUpdateable] = useState(false);

  const ratings: AllPersonaRatings = {
    influencer: {
      ratingType: 'influencer',
      lvl: 5,
      maxLvl: 10,
      top: 15
    },
    maintainer: {
      ratingType: 'maintainer',
      lvl: 5,
      maxLvl: 10,
      top: 15
    },
    contributor: {
      ratingType: 'contributor',
      lvl: 5,
      maxLvl: 10,
      top: 15
    },
    persona: {
      ratingType: 'persona',
      lvl: 5,
      maxLvl: 10,
      top: 15
    }
  }

  const profileProps: ProfileProps = {
    selfProfile: true,
    name: 'Ahmetson',
    subtitle: 'Full Stack Developer & Open Source Enthusiast',
    description: 'Passionate about building scalable web applications and contributing to open source projects. Specialized in JavaScript ecosystems and distributed systems. Always looking for challenging problems to solve and new technologies to explore.',
    followers: 100,
    following: false,
    myAccount: true,
    totalVotingPower: 220,
    bonusPoints: 100,
    projectAmount: 10,
    socialLinks: [
      { type: 'telegram', url: 'https://t.me/blocklord' },
      { type: 'github', url: 'https://github.com/ahmetson' },
      { type: 'linkedin', url: 'https://linkedin.com/in/ahmetson' },
    ],
    avatar: 'https://dummyimage.com/80x80/4A5568/ffffff?text=User',
    ratings: ratings,
    topRating: 'influencer',
  }

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
            !updateable ? <ViewableProfileInfo {...profileProps} onActionClick={() => { setUpdateable(true) }} /> :
              <UpdateableProfileInfo onActionClick={() => { setUpdateable(false) }} />
          }
        </motion.div>
      </AnimatePresence>
    </BasePanel>
  )
}

export default C
