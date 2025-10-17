import { jsxs, jsx } from 'react/jsx-runtime';
import { d as Button, b as Component } from './Panel_CAMdPLdB.mjs';
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_DZoFJRV9.mjs';
import { C, g as getIcon } from './PagePanel_vRXEIxzy.mjs';
import { I as Importer } from './RowGrid_Dl5riSnU.mjs';
import { I as Importer$1 } from './ReactComponentImporter_CKrAs9OZ.mjs';
import { useState } from 'react';
import { C as CworkTab } from './Tabs_C1ECpvji.mjs';
import { Search, ConversationList, Sidebar, Conversation, Avatar, ExpansionPanel, ChatContainer, ConversationHeader, VoiceCallButton, VideoCallButton, InfoButton, MessageList, MessageSeparator, Message, TypingIndicator, MessageInput } from '@chatscope/chat-ui-kit-react';
import { AnimatePresence, motion } from 'motion/react';

const NavLabelElement = ({ children, subtitle, active, href = "#" }) => {
  return /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
    subtitle,
    ":",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children })
  ] });
};

const $$IssuePrioritificationPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", C, { "title": "Issue Prioritization", "actions": [] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Horizontally", Importer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", C, { "title": "Prioritization Details", "actions": [], "bg": "green-100" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between items-center"> <span class="text-sm text-gray-600">Not a rating issue</span> <span class="text-sm text-gray-600">Rating</span> </div> <div class="flex justify-between items-center"> <span class="text-sm text-gray-600">+ 0 Rating Score</span> <div class="flex items-center space-x-1"> ${renderComponent($$result4, "ReactComponentImporter", Importer$1, { "element": getIcon("fork") })} <span class="text-sm text-gray-600">Forks</span> </div> </div> <div class="flex items-center space-x-2"> <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-sm text-gray-600">1</span> </div> ` })} ${renderComponent($$result3, "Card", C, { "title": "Prioritization Details", "actions": [], "bg": "green-100" }, { "default": ($$result4) => renderTemplate` <div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-cascade-teal" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-2xl font-bold text-gray-900">100</span> </div> <div class="text-sm text-gray-600"> <div>Total available</div> <div class="text-xs text-green-600">+50% bonus points by rating</div> </div> <div class="text-xs text-gray-500">
Want to have more points?<br>
They fund using <span class="text-cascade-blue">Donation</span> </div> ` })} ` })} ${renderComponent($$result2, "Card", C, { "title": "Turn Into Rating Issue", "actions": [{ children: "Save", href: "/issue" }], "bg": "green-100" }, { "default": ($$result3) => renderTemplate` <div class="flex items-center justify-between text-xs text-gray-600"> <span>Min | 1 | 23 VP</span> <span>2nd | 123 VP</span> <span>1st | 123 VP</span> <span>Max | 123 VP</span> </div> <div class="relative"> <div class="w-full bg-gray-200 rounded-full h-2"> <div class="bg-cascade-blue h-2 rounded-full"${addAttribute({ width: "60%" }, "style")}></div> </div> <div class="absolute top-0 left-1/2 transform -translate-x-1/2"> <div class="w-4 h-4 bg-white border-2 border-cascade-blue rounded-full -mt-1"></div> </div> </div> <div class="flex items-center justify-between text-sm"> <div class="flex items-center space-x-2"> <svg class="w-4 h-4 text-cascade-teal" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="font-medium">+23 VP</span> <span class="text-gray-600">+ 0.02 Rating Score</span> </div> <span class="text-gray-600">1nd / 20 issues</span> </div> ` })} ` })}`;
}, "/home/milay/cascadefund-frontend/src/components/issue/IssuePrioritificationPanel.astro", void 0);

const Panel$1 = ({ onElementClick, onNewDiscussionClick }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Search, { placeholder: "Search..." }),
    /* @__PURE__ */ jsx(ConversationList, { style: {
      height: "340px"
    }, className: "overflow-y-auto", children: /* @__PURE__ */ jsxs(Sidebar, { position: "right", children: [
      /* @__PURE__ */ jsx(
        Conversation,
        {
          className: "hover:bg-accent",
          info: "Yes i can do it for you",
          lastSenderName: "Lilly",
          name: "Lilly",
          onClick: () => {
            onElementClick && onElementClick(true);
          },
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Lilly",
              src: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
              status: "available"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          info: "Yes i can do it for you",
          lastSenderName: "Joe",
          name: "Joe",
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Joe",
              src: "https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg",
              status: "dnd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          info: "Yes i can do it for you",
          lastSenderName: "Emily",
          name: "Emily",
          unreadCnt: 3,
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Emily",
              src: "https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg",
              status: "available"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          info: "Yes i can do it for you",
          lastSenderName: "Kai",
          name: "Kai",
          unreadDot: true,
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Kai",
              src: "https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg",
              status: "unavailable"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          info: "Yes i can do it for you",
          lastSenderName: "Akane",
          name: "Akane",
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Akane",
              src: "https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg",
              status: "eager"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          info: "Yes i can do it for you",
          lastSenderName: "Eliot",
          name: "Eliot",
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Eliot",
              src: "https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg",
              status: "away"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          active: true,
          info: "Yes i can do it for you",
          lastSenderName: "Zoe",
          name: "Zoe",
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Zoe",
              src: "https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg",
              status: "dnd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Conversation,
        {
          info: "Yes i can do it for you",
          lastSenderName: "Patrik",
          name: "Patrik",
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Patrik",
              src: "https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg",
              status: "invisible"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(Button, { onClick: () => onNewDiscussionClick && onNewDiscussionClick(true), className: "bg-blue-300", children: "New Discussion" }) })
  ] });
};

const ChatPanel$1 = () => {
  return /* @__PURE__ */ jsxs(Sidebar, { position: "right", children: [
    /* @__PURE__ */ jsxs(
      ExpansionPanel,
      {
        open: true,
        title: "INFO",
        className: "hidden",
        children: [
          /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
          /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
          /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
          /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(ExpansionPanel, { title: "LOCALIZATION", children: [
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" })
    ] }),
    /* @__PURE__ */ jsxs(ExpansionPanel, { title: "MEDIA", children: [
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" })
    ] }),
    /* @__PURE__ */ jsxs(ExpansionPanel, { title: "SURVEY", children: [
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" })
    ] }),
    /* @__PURE__ */ jsxs(ExpansionPanel, { title: "OPTIONS", children: [
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum" })
    ] })
  ] });
};

const ChatPanel = ({ onBackClick }) => {
  return /* @__PURE__ */ jsxs(ChatContainer, { style: {
    height: "500px"
  }, children: [
    /* @__PURE__ */ jsxs(ConversationHeader, { children: [
      /* @__PURE__ */ jsx(ConversationHeader.Back, { onClick: () => {
        onBackClick && onBackClick(false);
      } }),
      /* @__PURE__ */ jsx(
        Avatar,
        {
          name: "Zoe",
          src: "https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
        }
      ),
      /* @__PURE__ */ jsx(
        ConversationHeader.Content,
        {
          info: "Active 10 mins ago",
          userName: "Zoe"
        }
      ),
      /* @__PURE__ */ jsxs(ConversationHeader.Actions, { children: [
        /* @__PURE__ */ jsx(VoiceCallButton, {}),
        /* @__PURE__ */ jsx(VideoCallButton, {}),
        /* @__PURE__ */ jsx(InfoButton, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs(MessageList, { typingIndicator: /* @__PURE__ */ jsx(TypingIndicator, { content: "Zoe is typing" }), children: [
      /* @__PURE__ */ jsx(MessageSeparator, { content: "Saturday, 30 November 2019" }),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "single",
            sender: "Zoe",
            sentTime: "15 mins ago"
          },
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Zoe",
              src: "https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          avatarSpacer: true,
          model: {
            direction: "outgoing",
            message: "Hello my friend",
            position: "single",
            sender: "Patrik",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          avatarSpacer: true,
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "first",
            sender: "Zoe",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          avatarSpacer: true,
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "normal",
            sender: "Zoe",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          avatarSpacer: true,
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "normal",
            sender: "Zoe",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "last",
            sender: "Zoe",
            sentTime: "15 mins ago"
          },
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Zoe",
              src: "https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "outgoing",
            message: "Hello my friend",
            position: "first",
            sender: "Patrik",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "outgoing",
            message: "Hello my friend",
            position: "normal",
            sender: "Patrik",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "outgoing",
            message: "Hello my friend",
            position: "normal",
            sender: "Patrik",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "outgoing",
            message: "Hello my friend",
            position: "last",
            sender: "Patrik",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          avatarSpacer: true,
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "first",
            sender: "Zoe",
            sentTime: "15 mins ago"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Message,
        {
          model: {
            direction: "incoming",
            message: "Hello my friend",
            position: "last",
            sender: "Zoe",
            sentTime: "15 mins ago"
          },
          children: /* @__PURE__ */ jsx(
            Avatar,
            {
              name: "Zoe",
              src: "https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx(MessageInput, { placeholder: "Type message here" })
  ] });
};

const ChatCard = ({ onBackClick, onActionClick }) => {
  const [topic, setTopic] = useState("");
  const [autoGenerate, setAutoGenerate] = useState(true);
  return /* @__PURE__ */ jsxs("div", { style: {
    height: "300px"
  }, children: [
    /* @__PURE__ */ jsxs(ConversationHeader, { children: [
      /* @__PURE__ */ jsx(ConversationHeader.Back, { onClick: () => {
        onBackClick && onBackClick(false);
      } }),
      /* @__PURE__ */ jsx(
        ConversationHeader.Content,
        {
          info: "Enter the topic to discussAbout",
          userName: "New Discussion"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Title" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: topic,
            onChange: (e) => setTopic(e.target.value),
            placeholder: "Title of the chat, so that participants know it.",
            className: "w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "auto-generate",
            checked: autoGenerate,
            onChange: (e) => setAutoGenerate(e.target.checked),
            className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "auto-generate", className: "text-sm text-gray-700", children: "Generate the Topic by the message and issue automatically" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-column mt-4", children: [
        /* @__PURE__ */ jsx(Button, { onClick: () => onActionClick && onActionClick(true), className: "bg-blue-300 w-60 mr-2", children: "Open Chat" }),
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 text-center -mt-4", children: "(Todo) its a tooltip when button disabled: Either check the auto topic name, or type topic name" })
    ] })
  ] });
};

const Panel = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [topicOpen, setTopicOpen] = useState(false);
  const tabs = [
    {
      label: "Conversations",
      key: "conversation",
      content: /* @__PURE__ */ jsx(Panel$1, { onElementClick: setChatOpen, onNewDiscussionClick: setTopicOpen })
    },
    {
      label: "Notes",
      key: "note",
      content: /* @__PURE__ */ jsx(ChatPanel$1, {})
    }
  ];
  return /* @__PURE__ */ jsx(Component, { children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -10, opacity: 0 },
      transition: { duration: 0.2, when: "beforeChildren", delayChildren: 0.2 },
      children: chatOpen ? /* @__PURE__ */ jsx(ChatPanel, { onBackClick: setChatOpen }) : topicOpen ? /* @__PURE__ */ jsx(ChatCard, { onBackClick: setTopicOpen, onActionClick: (actionFlag) => {
        setChatOpen(actionFlag);
        setTopicOpen(!actionFlag);
      } }) : (
        /* default */
        /* @__PURE__ */ jsx(CworkTab, { activeTab: "conversation", tabs })
      )
    },
    chatOpen ? "chat" : topicOpen ? "topic" : tabs[0].key
  ) }) });
};

export { $$IssuePrioritificationPanel as $, NavLabelElement as N, Panel as P };
