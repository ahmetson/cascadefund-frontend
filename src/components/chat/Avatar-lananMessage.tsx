import React from 'react'
import {
  Message,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

interface Props {
  hasMoreMsgs?: boolean
}

const emilyIco = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/EMILY_%E2%88%92_SUPERMOM_2024.jpg/250px-EMILY_%E2%88%92_SUPERMOM_2024.jpg"

const ChatPanel: React.FC<Props> = ({hasMoreMsgs = false}) => {
   return (
    <div>
      <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Emily",
            direction: "incoming",
            position: !hasMoreMsgs ? "single" : "first",
          }}
          >
            <Avatar src={emilyIco} name="Emily" className="w-4 h-4" />
          </Message>
      </div>
   )
 }

export default ChatPanel