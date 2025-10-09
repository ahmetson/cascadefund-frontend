 import React from 'react'
import {
  Message,
  MessageSeparator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import AvatarlananMessage from './Avatar-lananMessage'
const emilyIco = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EMILY_%E2%88%92_SUPERMOM_2024.jpg/250px-EMILY_%E2%88%92_SUPERMOM_2024.jpg"

const ChatPanel: React.FC = () => {
   return (<div className='h-80 overflow-y-scroll'>
 <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Oliver",
        direction: "outgoing",
        position: "single"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "first"
      }} >
        <Avatar src={emilyIco} name="Emily" className="w-4 h-4" />
      </Message>
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
      <AvatarlananMessage />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "first"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "last"
      }} />

        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "first"
      }} avatarSpacer />
      <AvatarlananMessage />

        <MessageSeparator content="Saturday, 31 November 2019" />

    <AvatarlananMessage />,
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Oliver",
        direction: "outgoing",
        position: "single"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "first"
      }} avatarSpacer />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "normal"
      }} avatarSpacer />
      <AvatarlananMessage />,
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "first"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "normal"
      }} />
        <Message model={{
        message: "Hello my friend",
        sentTime: "15 mins ago",
        direction: "outgoing",
        position: "first"
      }} />
      <AvatarlananMessage hasMoreMsgs={true} />
        <Message model={{
            message: "Hello my friend",
            sentTime: "15 mins ago",
            sender: "Emily",
            direction: "incoming",
            position: "last"
        }} avatarSpacer />
    </div>
         )
 }

export default ChatPanel