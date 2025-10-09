 import React, { useState } from 'react'
import Tabs, {type TabProps} from '../utilitified_decorations/Tabs'
import ConversationPanel from './ConversationPanel';
import NotesPanel from './NotesPanel';
import ChatPanel from './ChatPanel';
import { AnimatePresence, motion } from 'motion/react';
import Card from '../v2/Card';
import TopicPanel from './TopicPanel';

const Panel: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [topicOpen, setTopicOpen] = useState(false);

  const tabs: TabProps[] = [
    {
      label: 'Conversations',
      key: "conversation",
      content: <ConversationPanel onElementClick={setChatOpen} onNewDiscussionClick={setTopicOpen} />
    },
    {
      label: 'Notes',
      key: "note",
      content: <NotesPanel />
    }
  ]

  return (
    <Card>
      <AnimatePresence mode="wait">
        <motion.div
          key={chatOpen ? "chat" : (topicOpen ? "topic" : tabs[0].key)}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2, when: "beforeChildren", delayChildren: 0.2,  }}
        >
          {
            chatOpen ? <ChatPanel onBackClick={setChatOpen}/> : 
            (topicOpen ? <TopicPanel onBackClick={setTopicOpen} onActionClick={(actionFlag) => {setChatOpen(actionFlag); setTopicOpen(!actionFlag)}}/> : 
            /* default */  <Tabs activeTab='conversation' tabs={tabs} />)
          }
        </motion.div>
      </AnimatePresence>
    </Card>
  )
}

export default Panel