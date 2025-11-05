import type { Meta, StoryObj } from '@storybook/react-vite';

import InteractivePanel from './InteractiveContainer';

const meta = {
    component: InteractivePanel,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        expandableTitle: {
            control: { type: 'text' },
            description: 'Whether the panel can be expanded/collapsed',
        },
        defaultExpanded: {
            control: { type: 'boolean' },
            description: 'Whether the panel starts expanded',
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
} satisfies Meta<typeof InteractivePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Interactive Panel</h3>
                <p className="text-gray-600">This is a basic interactive panel with hover effects.</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Click me
                </button>
            </div>
        ),
    },
};


export const DifferentPadding: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Large Padding</h3>
                <p className="text-gray-600">This panel uses large padding (p-6).</p>
                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-sm text-blue-700">Notice the extra spacing around the content</p>
                </div>
            </div>
        ),
        padding: 'p-8',
    },
};

export const NoPadding: Story = {
    args: {
        children: (
            <div className="bg-gray-100 rounded">
                <h3 className="text-lg font-semibold mb-2">No Padding</h3>
                <p className="text-gray-600">This panel has no padding, so content goes to the edges.</p>
                <div className="mt-3 p-2 bg-white rounded shadow-sm">
                    <p className="text-sm text-gray-500">Content with its own padding</p>
                </div>
            </div>
        ),
        padding: 'none',
    },
};

export const CustomBackground: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Custom Background</h3>
                <p className="text-white/80">This panel has a custom background color.</p>
                <div className="mt-3 p-3 bg-white/20 rounded backdrop-blur-sm">
                    <p className="text-sm text-white">Semi-transparent content area</p>
                </div>
            </div>
        ),
        bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
        expandableTitle: 'Custom Background',
    },
};

export const ComplexContent: Story = {
    args: {
        children: (
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Complex Panel</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                </div>
                <p className="text-gray-600 mb-4">This panel contains more complex content with multiple elements.</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-blue-50 rounded">
                        <p className="text-sm font-medium text-blue-800">Metric 1</p>
                        <p className="text-lg font-bold text-blue-600">1,234</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                        <p className="text-sm font-medium text-green-800">Metric 2</p>
                        <p className="text-lg font-bold text-green-600">567</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
                        Action 1
                    </button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors">
                        Action 2
                    </button>
                </div>
            </div>
        ),
        expandableTitle: 'Complex Panel',
        defaultExpanded: true,
        padding: 'lg',
    },
};



export const ExpandFromCenter: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Center Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands equally from the center (default behavior).</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Expands up and down from center</p>
                    <p className="text-sm text-gray-500">• Title stays in place</p>
                    <p className="text-sm text-gray-500">• Smooth center-out animation</p>
                </div>
            </div>
        ),
        expandableTitle: 'Center Anchor',
        expandableAnchor: 'center',
        defaultExpanded: false,
    },
};

export const ExpandedByDefault: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Expandable Panel</h3>
                <p className="text-gray-600 mb-4">This panel can be expanded and collapsed.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Feature 1: Smooth animations</p>
                    <p className="text-sm text-gray-500">• Feature 2: Hover effects</p>
                    <p className="text-sm text-gray-500">• Feature 3: Click to expand/collapse</p>
                </div>
            </div>
        ),
        expandableTitle: 'Expandable Panel',
        defaultExpanded: true,
    },
};

export const ExpandibleWithBackgroundImage: Story = {
    args: {
        children: (
            <div className="text-white">
                <h3 className="text-lg font-semibold mb-2">Panel with Background</h3>
                <p className="text-white/80 mb-4">This panel has a background image with frosted glass effect.</p>
                <div className="space-y-2">
                    <p className="text-sm text-white/70">• Beautiful background</p>
                    <p className="text-sm text-white/70">• Frosted glass effect</p>
                    <p className="text-sm text-white/70">• Interactive hover effects</p>
                </div>
            </div>
        ),
        bg: {
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            label: 'Mountain landscape',
            className: ''
        },
        expandableTitle: 'Panel with Background',
        defaultExpanded: true,
    },
};

export const ExpandFromTop: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Top Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands downward from the top edge.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Expands only downward</p>
                    <p className="text-sm text-gray-500">• Title position remains fixed</p>
                    <p className="text-sm text-gray-500">• Top edge stays in place</p>
                </div>
            </div>
        ),
        expandableTitle: 'Top Anchor',
        expandableAnchor: 'top',
        defaultExpanded: false,
    },
};

export const ExpandFromBottom: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Bottom Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands upward from the bottom edge.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Expands only upward</p>
                    <p className="text-sm text-gray-500">• Title moves up as content expands</p>
                    <p className="text-sm text-gray-500">• Bottom edge stays in place</p>
                </div>
            </div>
        ),
        expandableTitle: 'Bottom Anchor',
        expandableAnchor: 'bottom',
        defaultExpanded: false,
    },
};

export const ExpandFromTopLeft: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Top-Left Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands from the top-left corner.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Top-left corner stays fixed</p>
                    <p className="text-sm text-gray-500">• Expands right and down</p>
                    <p className="text-sm text-gray-500">• Corner point remains unchanged</p>
                </div>
            </div>
        ),
        expandableTitle: 'Top-Left Anchor',
        expandableAnchor: 'top-left',
        defaultExpanded: false,
    },
};

export const ExpandFromTopRight: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Top-Right Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands from the top-right corner.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Top-right corner stays fixed</p>
                    <p className="text-sm text-gray-500">• Expands left and down</p>
                    <p className="text-sm text-gray-500">• Corner point remains unchanged</p>
                </div>
            </div>
        ),
        expandableTitle: 'Top-Right Anchor',
        expandableAnchor: 'top-right',
        defaultExpanded: false,
    },
};

export const ExpandFromBottomLeft: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Bottom-Left Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands from the bottom-left corner.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Bottom-left corner stays fixed</p>
                    <p className="text-sm text-gray-500">• Expands right and up</p>
                    <p className="text-sm text-gray-500">• Corner point remains unchanged</p>
                </div>
            </div>
        ),
        expandableTitle: 'Bottom-Left Anchor',
        expandableAnchor: 'bottom-left',
        defaultExpanded: false,
    },
};

export const ExpandFromBottomRight: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Bottom-Right Anchor</h3>
                <p className="text-gray-600 mb-4">Content expands from the bottom-right corner.</p>
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">• Bottom-right corner stays fixed</p>
                    <p className="text-sm text-gray-500">• Expands left and up</p>
                    <p className="text-sm text-gray-500">• Corner point remains unchanged</p>
                </div>
            </div>
        ),
        expandableTitle: 'Bottom-Right Anchor',
        expandableAnchor: 'bottom-right',
        defaultExpanded: false,
    },
};

