import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import InfoPanel from './InfoPanel';
import { getIcon } from '@/components/icon';

const meta = {
    component: InfoPanel,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: [
                'github', 'analytics', 'money', 'email', 'info', 'new-file', 'question',
                'likes', 'clock', 'heart', 'vote-priority', 'energy', 'project', 'star',
                'fork', 'settings', 'maintainer', 'contributor', 'influencer', 'play',
                'user', 'dev', 'person', 'chat', 'navigation', 'advantage', 'description',
                'warning', 'pioneer-recognition', 'first-access', 'influence-platform',
                'early-visibility', 'ten-pm-ten-min', 'fire', 'connection', 'recognition',
                'better-features', 'new-project', 'success'
            ],
            description: 'Icon to display in the header',
        },
        title: {
            control: { type: 'text' },
            description: 'Main title of the panel',
        },
        description: {
            control: { type: 'text' },
            description: 'Description text displayed in the panel',
        },
        iconBgColor: {
            control: { type: 'text' },
            description: 'Background color class for the icon container',
        },
        className: {
            control: { type: 'text' },
            description: 'Additional CSS classes for the panel',
        },
    },
} satisfies Meta<typeof InfoPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Info Panel',
        description: 'This is a basic info panel with default styling. It displays a title and description in a clean, organized format.',
    },
};

export const WithIcon: Story = {
    args: {
        icon: getIcon('info'),
        title: 'Information Panel',
        description: 'This panel includes an icon to provide visual context and make the information more engaging.',
        iconBgColor: 'bg-blue-100',
    },
};

export const WithCustomIcon: Story = {
    args: {
        icon: getIcon('star'),
        title: 'Featured Content',
        description: 'This panel showcases featured content with a star icon and custom styling.',
        iconBgColor: 'bg-yellow-100',
    },
};

export const WithWarningIcon: Story = {
    args: {
        icon: getIcon('warning'),
        title: 'Important Notice',
        description: 'This is an important notice that requires user attention. The warning icon helps draw attention to critical information.',
        iconBgColor: 'bg-red-100',
    },
};

export const WithSuccessIcon: Story = {
    args: {
        icon: getIcon('success'),
        title: 'Success Message',
        description: 'Your action has been completed successfully. This panel confirms that everything went as expected.',
        iconBgColor: 'bg-green-100',
    },
};

export const WithProjectIcon: Story = {
    args: {
        icon: getIcon('project'),
        title: 'Project Overview',
        description: 'This panel provides an overview of your current project status and key metrics.',
        iconBgColor: 'bg-purple-100',
    },
};

export const WithAnalyticsIcon: Story = {
    args: {
        icon: getIcon('analytics'),
        title: 'Analytics Dashboard',
        description: 'View your performance metrics and analytics data in this comprehensive dashboard.',
        iconBgColor: 'bg-indigo-100',
    },
};

export const WithUserIcon: Story = {
    args: {
        icon: getIcon('user'),
        title: 'User Profile',
        description: 'Manage your user profile settings and preferences from this panel.',
        iconBgColor: 'bg-gray-100',
    },
};

export const WithSettingsIcon: Story = {
    args: {
        icon: getIcon('settings'),
        title: 'Settings Panel',
        description: 'Configure your application settings and preferences using this control panel.',
        iconBgColor: 'bg-slate-100',
    },
};

export const WithEnergyIcon: Story = {
    args: {
        icon: getIcon('energy'),
        title: 'Energy Dashboard',
        description: 'Monitor your energy consumption and track your environmental impact with real-time data.',
        iconBgColor: 'bg-orange-100',
    },
};

export const WithMoneyIcon: Story = {
    args: {
        icon: getIcon('money'),
        title: 'Financial Overview',
        description: 'Track your financial performance and view key monetary metrics in this comprehensive dashboard.',
        iconBgColor: 'bg-emerald-100',
    },
};

export const WithCustomStyling: Story = {
    args: {
        icon: getIcon('heart'),
        title: 'Custom Styled Panel',
        description: 'This panel demonstrates custom styling with additional CSS classes and custom background colors.',
        iconBgColor: 'bg-pink-100',
        className: 'border-2 border-pink-200 shadow-lg',
    },
};

export const WithLongDescription: Story = {
    args: {
        icon: getIcon('description'),
        title: 'Detailed Information',
        description: 'This panel contains a longer description to demonstrate how the component handles extended text content. The description can span multiple lines and will wrap appropriately within the panel container. This is useful for providing comprehensive information to users without overwhelming the interface.',
        iconBgColor: 'bg-blue-50',
    },
};

export const WithNoDescription: Story = {
    args: {
        icon: getIcon('question'),
        title: 'Title Only Panel',
        iconBgColor: 'bg-gray-50',
    },
};

export const WithNoIcon: Story = {
    args: {
        title: 'Text Only Panel',
        description: 'This panel demonstrates the component without an icon, showing just the title and description.',
    },
};

export const MinimalPanel: Story = {
    args: {
        title: 'Minimal Panel',
        description: 'A simple panel with minimal styling.',
    },
};

export const WithCustomBackground: Story = {
    args: {
        icon: getIcon('fire'),
        title: 'Hot Topic',
        description: 'This panel uses a custom background color to create visual emphasis and draw attention.',
        iconBgColor: 'bg-red-200',
        className: 'bg-gradient-to-r from-red-50 to-orange-50',
    },
};

export const WithMultipleVariants: Story = {
    render: () => (
        <div className="space-y-4 w-full max-w-2xl">
            <InfoPanel
                icon={getIcon('info')}
                title="Information"
                description="This is an information panel with standard styling."
                iconBgColor="bg-blue-100"
            />
            <InfoPanel
                icon={getIcon('warning')}
                title="Warning"
                description="This is a warning panel that requires attention."
                iconBgColor="bg-yellow-100"
            />
            <InfoPanel
                icon={getIcon('success')}
                title="Success"
                description="This panel indicates a successful operation."
                iconBgColor="bg-green-100"
            />
            <InfoPanel
                icon={getIcon('error')}
                title="Error"
                description="This panel shows an error state."
                iconBgColor="bg-red-100"
            />
        </div>
    ),
};
