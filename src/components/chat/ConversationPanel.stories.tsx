import type { Meta, StoryObj } from '@storybook/react'
import ConversationPanel from './ConversationPanel'

const meta: Meta<typeof ConversationPanel> = {
    title: 'Components/Chat/Conversation Panel',
    component: ConversationPanel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A conversation list panel component that displays a searchable list of conversations with user avatars and status indicators. Features conversation items with last message preview, unread count indicators, active state highlighting, and various user statuses (available, dnd, unavailable, eager, away, invisible). Includes a "New Discussion" button to start new conversations.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onElementClick: {
            action: 'conversationClicked',
            description: 'Callback function triggered when a conversation item is clicked',
        },
        onNewDiscussionClick: {
            action: 'newDiscussionClicked',
            description: 'Callback function triggered when the "New Discussion" button is clicked',
        },
    },
}

export default meta
type Story = StoryObj<typeof ConversationPanel>

// Default story showing the conversation panel
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Conversation Panel showing multiple conversations with different user statuses. Displays search bar, scrollable conversation list, and "New Discussion" button. Features conversations with unread counts, active state, and various avatar statuses.',
            },
        },
    },
}

// Story with click handlers
export const WithInteractions: Story = {
    args: {
        onElementClick: (open: boolean) => {
            console.log('Conversation clicked, opening chat:', open)
        },
        onNewDiscussionClick: (open: boolean) => {
            console.log('New discussion clicked, opening topic panel:', open)
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Conversation Panel with interactive callbacks. Clicking on a conversation triggers onElementClick, and clicking "New Discussion" triggers onNewDiscussionClick. Demonstrates the interaction flow for opening conversations and starting new discussions.',
            },
        },
    },
}

