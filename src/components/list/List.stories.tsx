import type { Meta, StoryObj } from '@storybook/react'
import List from './List'

const meta: Meta<typeof List> = {
    title: 'Components/List/List',
    component: List,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        contentHeight: {
            control: 'text',
            description: 'Optional height constraint with overflow-y-auto',
        },
        children: {
            control: false,
            description: 'List items to be rendered',
        },
    },
}

export default meta
type Story = StoryObj<typeof List>

// Sample list items for stories
const sampleItems = [
    'First item in the list',
    'Second item with more content',
    'Third item',
    'Fourth item with even longer content that might wrap to multiple lines',
    'Fifth item',
]

const SampleListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {children}
    </div>
)

export const Default: Story = {
    args: {
        children: sampleItems.map((item, index) => (
            <SampleListItem key={index}>
                {item}
            </SampleListItem>
        )),
    },
}

export const WithFixedHeight: Story = {
    args: {
        contentHeight: 'h-64',
        children: Array.from({ length: 10 }, (_, index) => (
            <SampleListItem key={index}>
                Item {index + 1} - This is a longer item that demonstrates scrolling behavior
            </SampleListItem>
        )),
    },
}

export const WithCustomHeight: Story = {
    args: {
        contentHeight: 'h-48',
        children: Array.from({ length: 8 }, (_, index) => (
            <SampleListItem key={index}>
                Custom height item {index + 1}
            </SampleListItem>
        )),
    },
}

export const Empty: Story = {
    args: {
        children: null,
    },
}

export const SingleItem: Story = {
    args: {
        children: (
            <SampleListItem>
                Single item in the list
            </SampleListItem>
        ),
    },
}

export const WithRichContent: Story = {
    args: {
        children: [
            <SampleListItem key="header">
                <div className="font-semibold text-gray-900">Header Item</div>
                <div className="text-sm text-gray-500 mt-1">Subtitle or description</div>
            </SampleListItem>,
            <SampleListItem key="content">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="font-medium">Content Item</div>
                        <div className="text-sm text-gray-500">With additional details</div>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Status
                    </span>
                </div>
            </SampleListItem>,
            <SampleListItem key="action">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">A</span>
                    </div>
                    <div>
                        <div className="font-medium">Action Item</div>
                        <div className="text-sm text-gray-500">With avatar and description</div>
                    </div>
                </div>
            </SampleListItem>,
        ],
    },
}

export const LongList: Story = {
    args: {
        contentHeight: 'h-80',
        children: Array.from({ length: 20 }, (_, index) => (
            <SampleListItem key={index}>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="font-medium">Item {index + 1}</div>
                        <div className="text-sm text-gray-500">
                            Description for item {index + 1} with some additional context
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                            ${(Math.random() * 1000).toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500">
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </SampleListItem>
        )),
    },
}
