import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'Components/Custom UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile button component with multiple variants, sizes, and states. Features smooth transitions, hover effects, and disabled states for comprehensive UI interactions.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'success', 'default'],
            description: 'The visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        outline: {
            control: 'boolean',
            description: 'Whether the button should have an outline style',
        },
        focus: {
            control: 'boolean',
            description: 'Whether the button should have an electric border focus effect',
        },
        onClick: {
            action: 'clicked',
            description: 'Function to call when button is clicked',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply',
        },
        children: {
            control: 'text',
            description: 'The content inside the button',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
}

// All variants showcase
export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="default">Default</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All available button variants displayed together.',
            },
        },
    },
}

// All sizes showcase
export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Button component in all available sizes.',
            },
        },
    },
}

// Outline variants showcase
export const OutlineVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary" outline>Primary Outline</Button>
            <Button variant="secondary" outline>Secondary Outline</Button>
            <Button variant="danger" outline>Danger Outline</Button>
            <Button variant="success" outline>Success Outline</Button>
            <Button variant="default" outline>Default Outline</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All button variants with outline styling. Secondary variant shows a less prominent outline style.',
            },
        },
    },
}

// Outline vs filled comparison
export const OutlineComparison: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Filled</Button>
                <Button variant="primary" outline>Primary Outline</Button>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary Filled</Button>
                <Button variant="secondary" outline>Secondary Outline</Button>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button variant="default">Default Filled</Button>
                <Button variant="default" outline>Default Outline</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparison between filled and outline variants of the same button types.',
            },
        },
    },
}

// Disabled states
export const DisabledState: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <Button variant="danger" disabled>Disabled Danger</Button>
            <Button variant="success" disabled>Disabled Success</Button>
            <Button variant="default" disabled>Disabled Default</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All button variants in their disabled states.',
            },
        },
    },
}

// Interactive buttons with click handlers
export const WithClickHandler: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => alert('Primary clicked!')}>
                Click Me
            </Button>
            <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
                Click Me
            </Button>
            <Button variant="danger" onClick={() => alert('Danger clicked!')}>
                Click Me
            </Button>
            <Button variant="success" onClick={() => alert('Success clicked!')}>
                Click Me
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Interactive buttons with click handlers. Try clicking them!',
            },
        },
    },
}

// Size and variant combinations
export const SizeVariants: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="gap-4 space-x-4">
                <Button variant="primary" size="sm">Small Primary</Button>
                <Button variant="primary" size="md">Medium Primary</Button>
                <Button variant="primary" size="lg">Large Primary</Button>
            </div>
            <div className="gap-4 space-x-4">
                <Button variant="default" size="sm">Small Default</Button>
                <Button variant="default" size="md">Medium Default</Button>
                <Button variant="default" size="lg">Large Default</Button>
            </div>
            <div className="gap-4 space-x-4">
                <Button variant="danger" size="sm">Small Danger</Button>
                <Button variant="danger" size="md">Medium Danger</Button>
                <Button variant="danger" size="lg">Large Danger</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Different combinations of button variants and sizes.',
            },
        },
    },
}

// Custom styling example
export const CustomStyling: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button className="shadow-lg">With Shadow</Button>
            <Button className="rounded-full">Rounded</Button>
            <Button className="border-2 border-dashed">Dashed Border</Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Gradient
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Buttons with custom styling using additional CSS classes.',
            },
        },
    },
}

// Focus variants showcase
export const FocusVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary" focus>Primary Focus</Button>
            <Button variant="secondary" focus>Secondary Focus</Button>
            <Button variant="danger" focus>Danger Focus</Button>
            <Button variant="success" focus>Success Focus</Button>
            <Button variant="default" focus>Default Focus</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All button variants with electric border focus effect.',
            },
        },
    },
}

// Focus vs normal comparison
export const FocusComparison: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Normal</Button>
                <Button variant="primary" focus>Primary Focus</Button>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary Normal</Button>
                <Button variant="secondary" focus>Secondary Focus</Button>
            </div>
            <div className="flex flex-wrap gap-4">
                <Button variant="danger">Danger Normal</Button>
                <Button variant="danger" focus>Danger Focus</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparison between normal and focus states of the same button variants.',
            },
        },
    },
}

// Focus with outline combination
export const FocusOutlineCombination: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary" outline focus>Primary Outline Focus</Button>
            <Button variant="secondary" outline focus>Secondary Outline Focus</Button>
            <Button variant="danger" outline focus>Danger Outline Focus</Button>
            <Button variant="success" outline focus>Success Outline Focus</Button>
            <Button variant="default" outline focus>Default Outline Focus</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Button variants combining both outline and focus effects.',
            },
        },
    },
}

// Focus with different sizes
export const FocusSizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm" focus>Small Focus</Button>
            <Button variant="primary" size="md" focus>Medium Focus</Button>
            <Button variant="primary" size="lg" focus>Large Focus</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Focus effect applied to different button sizes.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        children: 'Custom Button',
        variant: 'primary',
        size: 'md',
        disabled: false,
        outline: false,
        focus: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different button configurations. Use the controls below to modify the button properties.',
            },
        },
    },
}
