import type { Meta, StoryObj } from '@storybook/react'
import NotificationBanner from './NotificationBanner'
import { type IconType } from '@/components/icon'

const meta: Meta<typeof NotificationBanner> = {
    title: 'Components/Notification Banner',
    component: NotificationBanner,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A notification banner component that displays informational, warning, success, or error messages. Features color-coded styling, optional icons, and expandable content support.',
            },
        },
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['warning', 'info', 'success', 'error'],
            description: 'The type of notification, determines color scheme and default icon',
        },
        title: {
            control: 'text',
            description: 'The title text displayed in the banner',
        },
        icon: {
            control: 'select',
            options: [
                'warning', 'info', 'success', 'error', 'check', 'email', 'question',
                'settings', 'fire', 'clock', 'star'
            ] as IconType[],
            description: 'Optional custom icon to override the default icon for the notification type',
        },
        expandable: {
            control: 'boolean',
            description: 'Whether the banner can be expanded/collapsed to show/hide content',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes for custom styling',
        },
        children: {
            control: 'text',
            description: 'Content to display in the banner body (optional)',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NotificationBanner>

// Default story
export const Default: Story = {
    args: {
        type: 'info',
        title: 'Information',
        children: 'This is an informational message. Use this for general information that users should be aware of.',
    },
    parameters: {
        docs: {
            description: {
                story: 'Default info banner with message content.',
            },
        },
    },
}

// All types showcase
export const AllTypes: Story = {
    render: () => (
        <div className="space-y-4 w-full max-w-2xl">
            <NotificationBanner type="info" title="Information">
                <p>This is an informational message. Use this type for general information that users should be aware of.</p>
            </NotificationBanner>
            <NotificationBanner type="success" title="Success">
                <p>Operation completed successfully! Your changes have been saved.</p>
            </NotificationBanner>
            <NotificationBanner type="warning" title="Warning">
                <p>Please review your settings. Some changes may require additional configuration.</p>
            </NotificationBanner>
            <NotificationBanner type="error" title="Error">
                <p>Something went wrong. Please try again or contact support if the problem persists.</p>
            </NotificationBanner>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All notification banner types with their default color schemes and icons.',
            },
        },
    },
}

// Info banner
export const Info: Story = {
    args: {
        type: 'info',
        title: 'Important Information',
        children: 'This feature is currently in beta. Please report any issues you encounter.',
    },
    parameters: {
        docs: {
            description: {
                story: 'An informational banner with a blue color scheme.',
            },
        },
    },
}

// Success banner
export const Success: Story = {
    args: {
        type: 'success',
        title: 'Payment Successful',
        children: 'Your payment has been processed successfully. You will receive a confirmation email shortly.',
    },
    parameters: {
        docs: {
            description: {
                story: 'A success banner with a green color scheme, typically used for successful operations.',
            },
        },
    },
}

// Warning banner
export const Warning: Story = {
    args: {
        type: 'warning',
        title: 'Action Required',
        children: 'Your subscription will expire in 7 days. Please renew to continue using all features.',
    },
    parameters: {
        docs: {
            description: {
                story: 'A warning banner with a yellow color scheme for important notices.',
            },
        },
    },
}

// Error banner
export const Error: Story = {
    args: {
        type: 'error',
        title: 'Failed to Save',
        children: 'We encountered an error while saving your changes. Please check your connection and try again.',
    },
    parameters: {
        docs: {
            description: {
                story: 'An error banner with a red color scheme for error messages.',
            },
        },
    },
}

// Without content (title only)
export const TitleOnly: Story = {
    render: () => (
        <div className="space-y-4 w-full max-w-2xl">
            <NotificationBanner type="info" title="New update available" />
            <NotificationBanner type="success" title="Changes saved" />
            <NotificationBanner type="warning" title="Session expiring soon" />
            <NotificationBanner type="error" title="Connection failed" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Banners with title only, no additional content.',
            },
        },
    },
}

// With custom icons
export const CustomIcons: Story = {
    render: () => (
        <div className="space-y-4 w-full max-w-2xl">
            <NotificationBanner type="info" title="Check your email" icon="email">
                <p>We've sent a verification link to your email address. Please check your inbox.</p>
            </NotificationBanner>
            <NotificationBanner type="warning" title="Schedule reminder" icon="clock">
                <p>Your next maintenance window is scheduled for tomorrow at 2:00 AM.</p>
            </NotificationBanner>
            <NotificationBanner type="success" title="Account verified" icon="check">
                <p>Your account has been successfully verified. You now have full access to all features.</p>
            </NotificationBanner>
            <NotificationBanner type="info" title="Quick tip" icon="star">
                <p>Did you know? You can use keyboard shortcuts to navigate faster.</p>
            </NotificationBanner>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Banners with custom icons instead of default type icons.',
            },
        },
    },
}

// Expandable banner
export const Expandable: Story = {
    args: {
        type: 'info',
        title: 'System Maintenance',
        expandable: true,
        children: (
            <div className="space-y-2">
                <p className="font-semibold">Maintenance scheduled for tomorrow:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Date: March 15, 2024</li>
                    <li>Time: 2:00 AM - 4:00 AM EST</li>
                    <li>Duration: Approximately 2 hours</li>
                    <li>Services affected: All services will be temporarily unavailable</li>
                </ul>
                <p className="mt-2">We apologize for any inconvenience. Thank you for your understanding.</p>
            </div>
        ),
    },
    parameters: {
        docs: {
            description: {
                story: 'An expandable banner that can be collapsed or expanded to show/hide detailed content.',
            },
        },
    },
}

// Expandable examples for all types
export const ExpandableAllTypes: Story = {
    render: () => (
        <div className="space-y-4 w-full max-w-2xl">
            <NotificationBanner type="info" title="Feature Update" expandable>
                <div className="space-y-2">
                    <p>We've released new features:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Dark mode support</li>
                        <li>Improved search functionality</li>
                        <li>Enhanced mobile experience</li>
                    </ul>
                </div>
            </NotificationBanner>
            <NotificationBanner type="success" title="Deployment Complete" expandable>
                <p>Your latest deployment to production was successful.</p>
                <p className="mt-2">Deployment details:</p>
                <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
                    <li>Version: v2.1.3</li>
                    <li>Build time: 3 minutes</li>
                    <li>Status: Healthy</li>
                </ul>
            </NotificationBanner>
            <NotificationBanner type="warning" title="Security Notice" expandable>
                <div className="space-y-2">
                    <p>Please update your password if you haven't done so in the last 90 days.</p>
                    <p>Security best practices:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Use a strong, unique password</li>
                        <li>Enable two-factor authentication</li>
                        <li>Review your account activity regularly</li>
                    </ul>
                </div>
            </NotificationBanner>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Expandable banners of different types showing detailed content that can be toggled.',
            },
        },
    },
}

// Long content example
export const LongContent: Story = {
    args: {
        type: 'info',
        title: 'Terms of Service Update',
        children: (
            <div className="space-y-3">
                <p>
                    We've updated our Terms of Service and Privacy Policy to better reflect our commitment to your privacy and data security.
                </p>
                <p>
                    Key changes include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Enhanced data protection measures</li>
                    <li>Clarified user rights and responsibilities</li>
                    <li>Updated cookie policy</li>
                    <li>New GDPR compliance provisions</li>
                </ul>
                <p className="mt-3">
                    Please review the updated documents. By continuing to use our service, you agree to the new terms.
                </p>
            </div>
        ),
    },
    parameters: {
        docs: {
            description: {
                story: 'Banner with longer content including lists and multiple paragraphs.',
            },
        },
    },
}

// Rich content example
export const RichContent: Story = {
    args: {
        type: 'success',
        title: 'Project Completed',
        children: (
            <div className="space-y-2">
                <p className="font-semibold">Congratulations! Your project has been successfully completed.</p>
                <div className="bg-white/50 p-3 rounded border border-green-200">
                    <p className="text-sm">
                        <strong>Project:</strong> Website Redesign<br />
                        <strong>Duration:</strong> 6 weeks<br />
                        <strong>Team:</strong> 5 members<br />
                        <strong>Status:</strong> Delivered on time
                    </p>
                </div>
                <p className="text-sm mt-2">You can now review the final deliverables in your project dashboard.</p>
            </div>
        ),
    },
    parameters: {
        docs: {
            description: {
                story: 'Banner with rich content including formatted text and nested elements.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        type: 'info',
        title: 'Custom Notification',
        children: 'This is a customizable notification banner. Use the controls below to modify its properties.',
        expandable: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different notification banner configurations. Use the controls to customize the type, title, icon, and content.',
            },
        },
    },
}

