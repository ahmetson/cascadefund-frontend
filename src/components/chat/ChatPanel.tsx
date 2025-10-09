 import React from 'react'
import {
  Message,
  MessageSeparator,
  Avatar,
  ChatContainer,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  MessageList,
  TypingIndicator,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export interface ChatContainerProps {
  onBackClick?: (arg0: boolean) => void;
}

const ChatPanel: React.FC<ChatContainerProps> = ({onBackClick}) => {
  return (
    <ChatContainer style={{
      height: '500px'
    }}>
      <ConversationHeader>
        <ConversationHeader.Back onClick={() => {onBackClick && onBackClick(false)}} />
        <Avatar
          name="Zoe"
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            />
            <ConversationHeader.Content
              info="Active 10 mins ago"
              userName="Zoe"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
      <MessageSeparator content="Saturday, 30 November 2019" />
      <Message
        model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'single',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
            </Message>
            <Message
              avatarSpacer
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'single',
                sender: 'Patrik',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
            </Message>
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Patrik',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Patrik',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'normal',
                sender: 'Patrik',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'outgoing',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Patrik',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              avatarSpacer
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'first',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            />
            <Message
              model={{
                direction: 'incoming',
                message: 'Hello my friend',
                position: 'last',
                sender: 'Zoe',
                sentTime: '15 mins ago'
              }}
            >
              <Avatar
                name="Zoe"
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              />
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" />
  </ChatContainer>);

}

export default ChatPanel