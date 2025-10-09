 import React from 'react'
import {
  Sidebar,
  ExpansionPanel

} from "@chatscope/chat-ui-kit-react";

const ChatPanel: React.FC = () => {
  return (<Sidebar position="right">
          <ExpansionPanel
            open
            title="INFO"
            className='hidden'
          >
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
          </ExpansionPanel>
          <ExpansionPanel title="LOCALIZATION">
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
          </ExpansionPanel>
          <ExpansionPanel title="MEDIA">
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
          </ExpansionPanel>
          <ExpansionPanel title="SURVEY">
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
          </ExpansionPanel>
          <ExpansionPanel title="OPTIONS">
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
            <p>
              Lorem ipsum
            </p>
          </ExpansionPanel>
  </Sidebar>);
}

export default ChatPanel