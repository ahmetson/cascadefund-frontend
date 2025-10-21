import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuPanel from './MenuPanel';

const meta = {
    component: MenuPanel,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        hoverable: {
            control: { type: 'boolean' },
            description: 'Whether the panel should have hover effects',
        },
        title: {
            control: { type: 'text' },
            description: 'Title of the menu panel',
        },
        activeMenuItem: {
            control: { type: 'select' },
            options: ['ihistory', 'iwork', 'balance', 'cbalance', 'project', 'marketing', 'work', 'cwork'],
            description: 'Currently active menu item',
        },
        onlyCustomChildren: {
            control: { type: 'boolean' },
            description: 'Whether to show only custom children without default menu items',
        },
    },
} satisfies Meta<typeof MenuPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Main Menu',
        activeMenuItem: 'balance',
        hoverable: true,
    },
};

export const MaintainerMainMenu: Story = {
    args: {
        title: 'Maintainer Dashboard',
        activeMenuItem: 'balance',
        hoverable: true,
    },
};

export const MaintainerWithActiveProject: Story = {
    args: {
        title: 'Project Management',
        activeMenuItem: 'project',
        hoverable: true,
    },
};

export const MaintainerWithActiveMarketing: Story = {
    args: {
        title: 'Marketing Tools',
        activeMenuItem: 'marketing',
        hoverable: true,
    },
};

export const MaintainerWithActiveWork: Story = {
    args: {
        title: 'Work Management',
        activeMenuItem: 'work',
        hoverable: true,
    },
};

export const InfluencerHistoryMenu: Story = {
    args: {
        title: 'Influencer Dashboard',
        activeMenuItem: 'ihistory',
        hoverable: true,
    },
};

export const InfluencerWorkMenu: Story = {
    args: {
        title: 'Influencer Work',
        activeMenuItem: 'iwork',
        hoverable: true,
    },
};

export const CascadingBalanceMenu: Story = {
    args: {
        title: 'Cascading Balance',
        activeMenuItem: 'cbalance',
        hoverable: true,
    },
};

export const CascadingWorkMenu: Story = {
    args: {
        title: 'Cascading Work',
        activeMenuItem: 'cwork',
        hoverable: true,
    },
};

export const WithCustomChildren: Story = {
    args: {
        title: 'Custom Menu',
        activeMenuItem: 'balance',
        onlyCustomChildren: true,
        hoverable: true,
        children: (
            <div className="space-y-1">
                <div className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-50 text-blue-700">
                    <div className="flex items-center space-x-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" />
                        </svg>
                        <span className="text-sm font-medium">Custom Item 1</span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        New
                    </span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-900">
                    <div className="flex items-center space-x-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                        <span className="text-sm font-medium">Custom Item 2</span>
                    </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-900">
                    <div className="flex items-center space-x-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                        </svg>
                        <span className="text-sm font-medium">Custom Item 3</span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                        5
                    </span>
                </div>
            </div>
        ),
    },
};

export const NonHoverable: Story = {
    args: {
        title: 'Static Menu',
        activeMenuItem: 'balance',
        hoverable: false,
    },
};

export const WithLongTitle: Story = {
    args: {
        title: 'Very Long Menu Title That Might Wrap',
        activeMenuItem: 'marketing',
        hoverable: true,
    },
};

export const AllMenuItems: Story = {
    args: {
        title: 'Complete Menu System',
        activeMenuItem: 'balance',
        hoverable: true,
        children: (
            <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Additional Menu Items</h3>
                <div className="flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-900">
                    <div className="flex items-center space-x-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-sm font-medium">Favorites</span>
                    </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-900">
                    <div className="flex items-center space-x-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" />
                        </svg>
                        <span className="text-sm font-medium">Settings</span>
                    </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-900">
                    <div className="flex items-center space-x-3">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        <span className="text-sm font-medium">Help & Support</span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        New
                    </span>
                </div>
            </div>
        ),
    },
};

export const ErrorState: Story = {
    args: {
        title: 'Error State Menu',
        activeMenuItem: 'ihistory',
        hoverable: true,
    },
};

export const EmptyState: Story = {
    args: {
        title: 'Empty Menu',
        activeMenuItem: 'balance',
        onlyCustomChildren: true,
        hoverable: true,
        children: (
            <div className="text-center py-8 text-gray-500">
                <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" />
                </svg>
                <p className="text-sm">No menu items available</p>
                <p className="text-xs text-gray-400 mt-1">Add some items to get started</p>
            </div>
        ),
    },
};
