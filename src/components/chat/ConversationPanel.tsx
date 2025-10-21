import React from 'react'
import {
  Avatar,
  Sidebar,
  Search,
  ConversationList,
  Conversation,

} from "@chatscope/chat-ui-kit-react";
import Button from '@/components/custom-ui/Button';

export interface Props {
  onElementClick?: (arg0: boolean) => void;
  onNewDiscussionClick?: (arg0: boolean) => void;
}


const Panel: React.FC<Props> = ({ onElementClick, onNewDiscussionClick }) => {
  return (<div>
    <Search placeholder="Search..." />
    <ConversationList style={{
      height: '340px'
    }} className='overflow-y-auto'>
      <Sidebar position="right">
        <Conversation
          className='hover:bg-accent'
          info="Yes i can do it for you" lastSenderName="Lilly" name="Lilly"
          onClick={() => { onElementClick && onElementClick(true); }}
        >
          <Avatar
            name="Lilly"
            src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
            status="available"
          />
        </Conversation>
        <Conversation
          info="Yes i can do it for you"
          lastSenderName="Joe"
          name="Joe"
        >
          <Avatar
            name="Joe"
            src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
            status="dnd"
          />
        </Conversation>
        <Conversation
          info="Yes i can do it for you"
          lastSenderName="Emily"
          name="Emily"
          unreadCnt={3}
        >
          <Avatar
            name="Emily"
            src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            status="available"
          />
        </Conversation>
        <Conversation
          info="Yes i can do it for you"
          lastSenderName="Kai"
          name="Kai"
          unreadDot
        >
          <Avatar
            name="Kai"
            src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
            status="unavailable"
          />
        </Conversation>
        <Conversation
          info="Yes i can do it for you"
          lastSenderName="Akane"
          name="Akane"
        >
          <Avatar
            name="Akane"
            src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
            status="eager"
          />
        </Conversation>
        <Conversation
          info="Yes i can do it for you"
          lastSenderName="Eliot"
          name="Eliot"
        >
          <Avatar
            name="Eliot"
            src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
            status="away"
          />
        </Conversation>
        <Conversation
          active
          info="Yes i can do it for you"
          lastSenderName="Zoe"
          name="Zoe"
        >
          <Avatar
            name="Zoe"
            src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            status="dnd"
          />
        </Conversation>
        <Conversation
          info="Yes i can do it for you"
          lastSenderName="Patrik"
          name="Patrik"
        >
          <Avatar
            name="Patrik"
            src="https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg"
            status="invisible"
          />
        </Conversation>
      </Sidebar>
    </ConversationList>
    <div className='flex justify-center mt-4'>
      <Button onClick={() => onNewDiscussionClick && onNewDiscussionClick(true)} className='bg-blue-300'>New Discussion</Button>
    </div>
  </div>);
}

export default Panel