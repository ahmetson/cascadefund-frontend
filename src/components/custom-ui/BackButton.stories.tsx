import type { Meta, StoryObj } from '@storybook/react'
import BackButton from './BackButton'

const meta: Meta<typeof BackButton> = {
    title: 'Components/Custom UI/BackButton',
    component: BackButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A customizable back button component that renders a link with a back arrow and text.'
            }
        }
    },
    argTypes: {
        href: {
            control: 'text',
            description: 'The URL to navigate to when the back button is clicked',
            defaultValue: '/issue/post'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof BackButton>

// Default story
export const Default: Story = {
    args: {
        href: '/issue/post'
    }
}

// Custom href story
export const CustomHref: Story = {
    args: {
        href: '/dashboard'
    },
    parameters: {
        docs: {
            description: {
                story: 'BackButton with a custom href destination.'
            }
        }
    }
}

// Interactive playground
export const Playground: Story = {
    args: {
        href: '/issue/post',
        active: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different href values.'
            }
        }
    }
}
