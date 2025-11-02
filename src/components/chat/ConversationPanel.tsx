import React from 'react'
import {
  Conversation,
  ChatComponentPropsChildren,
  ConversationProps,

} from "@chatscope/chat-ui-kit-react";
import { PageLikePanel } from '../panel';
import FilterableList from '../list/FilterableList';
import { getIcon } from '../icon';

export interface Props {
  onElementClick?: (arg0: boolean) => void;
  onNewDiscussionClick?: (arg0: boolean) => void;
}


const Panel: React.FC<Props> = ({ onElementClick, onNewDiscussionClick }) => {
  const conversations: (ChatComponentPropsChildren<ConversationProps, "div"> & { id: string, avatarSrc: string, avatarStatus: string })[] = [
    {
      id: '1',
      name: 'Lilly',
      className: 'hover:bg-accent-900',
      onClick: () => { onElementClick && onElementClick(true); },
      info: 'Yes i can do it for you',
      lastSenderName: 'Lilly',
      avatarSrc: 'https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg',
      avatarStatus: 'available',
    },
    {
      id: '2',
      name: 'Joe',
      className: 'hover:bg-accent-900',
      onClick: () => { onElementClick && onElementClick(true); },
      info: 'Yes i can do it for you',
      lastSenderName: 'Joe',
      avatarSrc: 'https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg',
      avatarStatus: 'dnd',
    },
    {
      id: '3',
      name: 'Emily',
      className: 'hover:bg-accent-900',
      onClick: () => { onElementClick && onElementClick(true); },
      info: 'Yes i can do it for you',
      lastSenderName: 'Emily',
      avatarSrc: 'https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg',
      avatarStatus: 'available',
    },
    {
      id: '4',
      name: 'Kai',
      className: 'hover:bg-accent-900',
      onClick: () => { onElementClick && onElementClick(true); },
      info: 'Yes i can do it for you',
      lastSenderName: 'Kai',
      avatarSrc: 'https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg',
      avatarStatus: 'unavailable',
    },
    {
      id: '5',
      name: 'Akane',
      className: 'hover:bg-accent-900',
      onClick: () => { onElementClick && onElementClick(true); },
      info: 'Yes i can do it for you',
      lastSenderName: 'Akane',
      avatarSrc: 'https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg',
      avatarStatus: 'eager',
    },
    {
      id: '6',
      name: 'Eliot',
      className: 'hover:bg-accent-900 ',
      onClick: () => { onElementClick && onElementClick(true); },
      info: 'Yes i can do it for you',
      lastSenderName: 'Eliot',
      avatarSrc: 'https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg',
      avatarStatus: 'away',
    },
  ]
  return (<PageLikePanel
    title={<div className='flex items-center gap-2'>{getIcon('chat')} Conversations</div>}
    actions={[{
      onClick: () => onNewDiscussionClick?.(true),
      className: 'bg-blue-300',
      children: 'New Topic'
    }]}
  >
    <FilterableList
      showNumber={false}
      contentHeight='h-48'
      hideSearchbar={true}
      items={conversations}
      itemComponent={Conversation}
    />
  </PageLikePanel>);
}

export default Panel