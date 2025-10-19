import type { Meta, StoryObj } from '@storybook/react-vite';

import PageLikePanel from './PageLikePanel';

const meta = {
    component: PageLikePanel,
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
        subtitle: {
            control: { type: 'text' },
            description: 'Subtitle text below the title',
        },
        titleCenter: {
            control: { type: 'boolean' },
            description: 'Whether to center the title',
        },
        expandable: {
            control: { type: 'boolean' },
            description: 'Whether the panel can be expanded/collapsed',
        },
        contentHeight: {
            control: { type: 'text' },
            description: 'Fixed height for content area with scroll',
        },
        padding: {
            control: { type: 'text' },
            description: 'Padding size for the panel',
        },
        bg: {
            control: { type: 'text' },
            description: 'Background color class',
        },
    },
} satisfies Meta<typeof PageLikePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Panel',
        children: (
            <div>
                <p>This is a basic page-like panel with default styling.</p>
                <p>It includes a title, content area, and optional actions.</p>
            </div>
        ),
    },
};

export const WithIcon: Story = {
    args: {
        icon: 'project',
        title: 'Project Dashboard',
        subtitle: 'Manage your projects and track progress',
        children: (
            <div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded">
                        <p className="text-sm font-medium text-blue-800">Active Projects</p>
                        <p className="text-lg font-bold text-blue-600">12</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                        <p className="text-sm font-medium text-green-800">Completed</p>
                        <p className="text-lg font-bold text-green-600">8</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600">
                    Your project dashboard shows an overview of all your active and completed projects.
                </p>
            </div>
        ),
    },
};

export const WithActions: Story = {
    args: {
        icon: 'settings',
        title: 'Settings Panel',
        subtitle: 'Configure your application preferences',
        actions: [
            {
                variant: 'primary',
                children: 'Save Changes',
                onClick: () => console.log('Save clicked'),
            },
            {
                variant: 'secondary',
                children: 'Reset',
                onClick: () => console.log('Reset clicked'),
            },
        ],
        children: (
            <div>
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Theme
                        </label>
                        <select className="w-full p-2 border rounded">
                            <option>Light</option>
                            <option>Dark</option>
                            <option>Auto</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Notifications
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Email notifications
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Push notifications
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
};

export const CenteredTitle: Story = {
    args: {
        icon: 'star',
        title: 'Centered Title',
        titleCenter: true,
        subtitle: 'This panel has a centered title with an icon',
        children: (
            <div>
                <p className="text-center text-gray-600">
                    This is an example of a panel with a centered title.
                    The content can be any React component or HTML.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm text-yellow-800 text-center">
                        Centered content area with special styling
                    </p>
                </div>
            </div>
        ),
    },
};

export const Expandable: Story = {
    args: {
        icon: 'analytics',
        title: 'Analytics Dashboard',
        subtitle: 'View detailed analytics and metrics',
        expandable: true,
        children: (
            <div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded">
                        <p className="text-2xl font-bold text-blue-600">1,234</p>
                        <p className="text-sm text-blue-800">Total Views</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                        <p className="text-2xl font-bold text-green-600">567</p>
                        <p className="text-sm text-green-800">Conversions</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                        <p className="text-2xl font-bold text-purple-600">89%</p>
                        <p className="text-sm text-purple-800">Success Rate</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                        This expandable panel contains detailed analytics data.
                    </p>
                    <p className="text-sm text-gray-600">
                        Click the title to expand or collapse the content.
                    </p>
                </div>
            </div>
        ),
    },
};

export const WithRightHeader: Story = {
    args: {
        icon: 'user',
        title: 'User Profile',
        rightHeader: (
            <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Online
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                    Edit Profile
                </button>
            </div>
        ),
        children: (
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold">JD</span>
                    </div>
                    <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-gray-600">Software Developer</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                        Member since January 2023
                    </p>
                    <p className="text-sm text-gray-600">
                        Last active 2 hours ago
                    </p>
                </div>
            </div>
        ),
    },
};

export const WithFixedHeight: Story = {
    args: {
        icon: 'chat',
        title: 'Messages',
        subtitle: 'Scrollable message history',
        contentHeight: '200px',
        children: (
            <div>
                {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="mb-3 p-3 bg-gray-50 rounded">
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-sm">User {i + 1}</span>
                            <span className="text-xs text-gray-500">2:3{i} PM</span>
                        </div>
                        <p className="text-sm text-gray-700">
                            This is message {i + 1} in the scrollable content area.
                            The content height is fixed and scrollable.
                        </p>
                    </div>
                ))}
            </div>
        ),
    },
};

export const WithLinkActions: Story = {
    args: {
        icon: 'github',
        title: 'Repository',
        subtitle: 'Manage your GitHub repository',
        actions: [
            {
                variant: 'blue',
                href: 'https://github.com',
                children: 'View on GitHub',
            },
            {
                variant: 'gray',
                href: '/settings',
                children: 'Settings',
            },
        ],
        children: (
            <div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-sm font-medium">main</span>
                        <span className="text-xs text-gray-500">3 commits ahead</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        Your repository is up to date with the latest changes.
                    </p>
                    <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">JavaScript</span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">TypeScript</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded">React</span>
                    </div>
                </div>
            </div>
        ),
    },
};

export const ComplexContent: Story = {
    args: {
        icon: 'energy',
        title: 'Energy Dashboard',
        subtitle: 'Monitor your energy consumption and savings',
        rightHeader: (
            <div className="flex items-center gap-2">
                <span className="text-sm text-green-600 font-medium">+15%</span>
                <span className="text-xs text-gray-500">vs last month</span>
            </div>
        ),
        actions: [
            {
                variant: 'blue',
                children: 'Export Data',
                onClick: () => console.log('Export clicked'),
            },
            {
                variant: 'gray',
                children: 'View Details',
                onClick: () => console.log('Details clicked'),
            },
        ],
        children: (
            <div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-800">Solar Power</span>
                            <span className="text-xs text-blue-600">2.4 kW</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-green-800">Battery</span>
                            <span className="text-xs text-green-600">85%</span>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Today's Generation</span>
                        <span className="font-medium">18.5 kWh</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Consumption</span>
                        <span className="font-medium">12.3 kWh</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Savings</span>
                        <span className="font-medium text-green-600">$4.25</span>
                    </div>
                </div>
            </div>
        ),
    },
};
