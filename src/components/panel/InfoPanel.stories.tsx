import type { Meta, StoryObj } from '@storybook/react-vite';

import InfoPanel from './InfoPanel';

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
        children: {
            control: { type: 'text' },
            description: 'Content to display in the panel (optional)',
        },
        expandable: {
            control: { type: 'boolean' },
            description: 'Whether the panel can be expanded/collapsed (only works when children or actions are provided)',
        },
        defaultExpanded: {
            control: { type: 'boolean' },
            description: 'Whether the panel starts expanded (only when expandable=true and content exists)',
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
} satisfies Meta<typeof InfoPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Info Panel',
        children: (
            <div>
                <p>This is a basic info panel with default styling.</p>
                <p>It includes a title, content area, and no background or border.</p>
            </div>
        ),
    },
};

export const WithIcon: Story = {
    args: {
        icon: 'info',
        title: 'Information Panel',
        children: (
            <div>
                <p>This info panel includes an icon in the title.</p>
                <p>The title uses Georgia font and is semi-bold.</p>
                <p>The content uses Noto Sans font with normal weight.</p>
            </div>
        ),
    },
};

export const WithActions: Story = {
    args: {
        icon: 'settings',
        title: 'Settings Panel',
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

export const Expandable: Story = {
    args: {
        icon: 'analytics',
        title: 'Analytics Dashboard',
        expandable: true,
        defaultExpanded: false,
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

export const WithIconAndActions: Story = {
    args: {
        icon: 'energy',
        title: 'Energy Dashboard',
        expandable: true,
        defaultExpanded: true,
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

export const WithLinkActions: Story = {
    args: {
        icon: 'github',
        title: 'Repository',
        actions: [
            {
                variant: 'blue',
                uri: 'https://github.com',
                children: 'View on GitHub',
            },
            {
                variant: 'gray',
                uri: '/settings',
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
        icon: 'project',
        title: 'Project Information',
        expandable: true,
        defaultExpanded: false,
        actions: [
            {
                variant: 'primary',
                children: 'Edit Project',
                onClick: () => console.log('Edit clicked'),
            },
            {
                variant: 'secondary',
                children: 'Archive',
                onClick: () => console.log('Archive clicked'),
            },
        ],
        children: (
            <div>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Project Details</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Status:</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Created:</span>
                                <span className="text-gray-900">January 15, 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Last Updated:</span>
                                <span className="text-gray-900">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Team Members</h4>
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium">
                                    {i}
                                </div>
                            ))}
                            <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs">
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
};

export const TitleOnly: Story = {
    args: {
        icon: 'info',
        title: 'Information',
    },
};

export const TitleOnlyWithIcon: Story = {
    args: {
        icon: 'warning',
        title: 'Warning',
    },
};

export const TitleOnlyWithCustomIcon: Story = {
    args: {
        icon: { iconType: 'fire', width: 'w-6', height: 'h-6', className: 'text-red-500' },
        title: 'Fire Alert',
    },
};

export const TitleOnlyExpandableDisabled: Story = {
    args: {
        icon: 'settings',
        title: 'Settings',
        expandable: true, // This should be ignored since there's no content
    },
};
