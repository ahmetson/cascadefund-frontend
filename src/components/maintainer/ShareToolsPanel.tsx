import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import InfoPanel from '@/components/panel/InfoPanel'
import { IconType } from '@/components/icon'
import { ActionProps } from '@/types/eventTypes'

// Helper function to map emoji icons to IconType values
const mapEmojiToIconType = (emoji: string): IconType => {
  const emojiMap: Record<string, IconType> = {
    '🎯': 'project',
    '📋': 'new-file',
    '📄': 'new-file',
    '👥': 'contributor',
    '💰': 'money'
  }
  return emojiMap[emoji] || 'info'
}

const ShareTools: React.FC = () => {
  return (
    <PageLikePanel interactive={false} title="Share Tools" className="">
      <InfoPanel
        icon={mapEmojiToIconType('🎯')}
        title="Goal: Onboard Users & Contributors"
        className="mb-4"
      >
        This marketing tool is not only about when people know about it. The link to your page reviews, tell to people about your project, and configuration goes on the CascadeFund.
      </InfoPanel>

      <InfoPanel
        icon={mapEmojiToIconType('📋')}
        title="GitHub Issue for Users"
        className="mb-4"
        actions={[
          {
            children: '📋',
            variant: 'default'
          } as ActionProps
        ]}
      >
        The 'Issues and support moved to CascadeFund' Description: Hey, my time is scarce, for providing the best support, I moved to CascadeFund where I will help them. Sign up.
      </InfoPanel>

      <InfoPanel
        icon={mapEmojiToIconType('📄')}
        title="Share Button for README"
        className="mb-4"
        actions={[
          {
            children: '📋',
            variant: 'default'
          } as ActionProps
        ]}
      >
        <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded mb-2 font-mono">
          [CascadeFund](https://cascadefund.org/badge/)
        </div>
      </InfoPanel>

      <InfoPanel
        icon={mapEmojiToIconType('👥')}
        title="Contributors Outreach Issue"
        className="mb-4"
        actions={[
          {
            children: '📋',
            variant: 'default'
          } as ActionProps
        ]}
      >
        Title: 'Contributors' On CascadeFund to help with this code base. Description: I need help with this code base. CascadeFund: I will help if code when you have questions or issues.
      </InfoPanel>

      <InfoPanel
        icon={mapEmojiToIconType('💰')}
        title="Donation Link"
        className="mb-4"
        actions={[
          {
            children: '📋',
            uri: 'https://cascadefund.org/donate/reflect',
            variant: 'default'
          } as ActionProps
        ]}
      >
        Support us and influence the project on CascadeFund.
      </InfoPanel>
    </PageLikePanel>
  )
}

export default ShareTools
