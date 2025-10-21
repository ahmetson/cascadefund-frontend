import type { Meta, StoryObj } from '@storybook/react'
import Followings from './Followings'
import type { FollowingsProps } from './Followings'

const meta: Meta<typeof Followings> = {
    title: 'Components/Social Network/Followings',
    component: Followings,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A social network component that displays follower count with a heart icon and tooltip. Shows different states for following/unfollowing with appropriate tooltip messages.',
            },
        },
    },
    argTypes: {
        following: {
            control: { type: 'boolean' },
            description: 'Whether the user is currently following this profile',
        },
        followers: {
            control: { type: 'number', min: 0, max: 1000000, step: 1 },
            description: 'Number of followers for this profile',
        },
        onActionClick: {
            action: 'clicked',
            description: 'Callback function triggered when the button is clicked',
        },
    },
}

export default meta
type Story = StoryObj<typeof Followings>

// Default story - not following
export const Default: Story = {
    args: {
        following: false,
        followers: 1234,
        onActionClick: () => console.log('Follow clicked'),
    },
}

// Currently following
export const Following: Story = {
    args: {
        following: true,
        followers: 5678,
        onActionClick: () => console.log('Unfollow clicked'),
    },
}

// High follower count
export const HighFollowers: Story = {
    args: {
        following: false,
        followers: 123456,
        onActionClick: () => console.log('Follow clicked'),
    },
}

// Low follower count
export const LowFollowers: Story = {
    args: {
        following: false,
        followers: 5,
        onActionClick: () => console.log('Follow clicked'),
    },
}

// Zero followers
export const ZeroFollowers: Story = {
    args: {
        following: false,
        followers: 0,
        onActionClick: () => console.log('Follow clicked'),
    },
}

// Following with high count
export const FollowingHighCount: Story = {
    args: {
        following: true,
        followers: 98765,
        onActionClick: () => console.log('Unfollow clicked'),
    },
}

// Million followers
export const MillionFollowers: Story = {
    args: {
        following: false,
        followers: 1000000,
        onActionClick: () => console.log('Follow clicked'),
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        following: false,
        followers: 1234,
        onActionClick: () => console.log('Button clicked'),
    },
    parameters: {
        docs: {
            description: {
                story: 'Use the controls below to interact with different follower counts and following states. Hover over the button to see the tooltip message change based on the following state.',
            },
        },
    },
}
