import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link'

const meta: Meta<typeof Link> = {
    title: 'Components/Custom UI/Link',
    component: Link,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile link component with focus effects, new tab support, and active states. Features smooth transitions, hover effects, and electric border focus animations.',
            },
        },
    },
    argTypes: {
        href: {
            control: 'text',
            description: 'The URL the link points to',
        },
        active: {
            control: 'boolean',
            description: 'Whether the link is in an active state',
        },
        asNewTab: {
            control: 'boolean',
            description: 'Whether the link should open in a new tab',
        },
        focus: {
            control: 'boolean',
            description: 'Whether the link should have an electric border focus effect',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply',
        },
        children: {
            control: 'text',
            description: 'The content inside the link',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
    args: {
        children: 'Link',
        href: '#',
        active: false,
        asNewTab: false,
        focus: false,
    },
}

// Basic link examples
export const BasicLinks: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#services">Services</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Basic link examples with different destinations.',
            },
        },
    },
}

// Active state examples
export const ActiveStates: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="#home" active>Active Home</Link>
            <Link href="#about">Inactive About</Link>
            <Link href="#contact" active>Active Contact</Link>
            <Link href="#services">Inactive Services</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Links showing both active and inactive states.',
            },
        },
    },
}

// New tab functionality
export const NewTabLinks: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="https://example.com" asNewTab>External Link (New Tab)</Link>
            <Link href="#internal">Internal Link (Same Tab)</Link>
            <Link href="https://github.com" asNewTab>GitHub (New Tab)</Link>
            <Link href="#section">Section Link (Same Tab)</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Links demonstrating new tab functionality. External links open in new tabs, internal links stay in the same tab.',
            },
        },
    },
}

// Focus variants showcase
export const FocusVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="#home" focus>Home Focus</Link>
            <Link href="#about" focus>About Focus</Link>
            <Link href="#contact" focus>Contact Focus</Link>
            <Link href="#services" focus>Services Focus</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All links with electric border focus effect.',
            },
        },
    },
}

// Focus vs normal comparison
export const FocusComparison: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
                <Link href="#home">Home Normal</Link>
                <Link href="#home" focus>Home Focus</Link>
            </div>
            <div className="flex flex-wrap gap-4">
                <Link href="#about">About Normal</Link>
                <Link href="#about" focus>About Focus</Link>
            </div>
            <div className="flex flex-wrap gap-4">
                <Link href="#contact">Contact Normal</Link>
                <Link href="#contact" focus>Contact Focus</Link>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Comparison between normal and focus states of the same links.',
            },
        },
    },
}

// Focus with new tab combination
export const FocusNewTabCombination: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="https://example.com" focus asNewTab>External Focus (New Tab)</Link>
            <Link href="#internal" focus>Internal Focus (Same Tab)</Link>
            <Link href="https://github.com" focus asNewTab>GitHub Focus (New Tab)</Link>
            <Link href="#section" focus>Section Focus (Same Tab)</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Links combining both focus effects and new tab functionality.',
            },
        },
    },
}

// Focus with active state combination
export const FocusActiveCombination: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="#home" focus active>Active Home Focus</Link>
            <Link href="#about" focus>Inactive About Focus</Link>
            <Link href="#contact" focus active>Active Contact Focus</Link>
            <Link href="#services" focus>Inactive Services Focus</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Links combining focus effects with active states.',
            },
        },
    },
}

// Navigation menu example
export const NavigationMenu: Story = {
    render: () => (
        <nav className="flex flex-wrap gap-6">
            <Link href="#home" active>Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>
        </nav>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Example of links used in a navigation menu with active states.',
            },
        },
    },
}

// Footer links example
export const FooterLinks: Story = {
    render: () => (
        <div className="space-y-2">
            <div className="flex flex-wrap gap-4">
                <Link href="https://privacy.example.com" asNewTab>Privacy Policy</Link>
                <Link href="https://terms.example.com" asNewTab>Terms of Service</Link>
                <Link href="https://support.example.com" asNewTab>Support</Link>
            </div>
            <div className="flex flex-wrap gap-4">
                <Link href="https://twitter.com" asNewTab>Twitter</Link>
                <Link href="https://linkedin.com" asNewTab>LinkedIn</Link>
                <Link href="https://github.com" asNewTab>GitHub</Link>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Example of links typically found in a footer, all opening in new tabs.',
            },
        },
    },
}

// Custom styling example
export const CustomStyling: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Link href="#" className="text-lg font-bold">Large Bold Link</Link>
            <Link href="#" className="text-red-500 hover:text-red-700">Red Link</Link>
            <Link href="#" className="underline decoration-dotted">Dotted Underline</Link>
            <Link href="#" className="bg-blue-100 px-3 py-1 rounded">Button Style</Link>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Links with custom styling using additional CSS classes.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        children: 'Custom Link',
        href: '#',
        active: false,
        asNewTab: false,
        focus: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different link configurations. Use the controls below to modify the link properties.',
            },
        },
    },
}
