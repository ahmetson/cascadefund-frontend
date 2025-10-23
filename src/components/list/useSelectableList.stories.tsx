import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useSelectableList, SelectedItem } from './useSelectableList'
import List from './List'
import SelectableItem from './SelectableItem'

const meta: Meta<typeof useSelectableList> = {
    title: 'Components/List/useSelectableList',
    component: useSelectableList,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        allowMany: {
            control: 'boolean',
            description: 'Allow multiple items to be selected',
        },
    },
}

export default meta
type Story = StoryObj<typeof useSelectableList>

// Sample data
const sampleItems = [
    { id: '1', title: 'Complete project proposal', points: 50, time: '10:00 AM' },
    { id: '2', title: 'Review client feedback', points: 30, time: '11:30 AM' },
    { id: '3', title: 'Team meeting', points: 20, time: '1:00 PM' },
    { id: '4', title: 'Update documentation', points: 40, time: '3:00 PM' },
    { id: '5', title: 'Send weekly report', points: 25, time: '5:00 PM' },
]

// Component that uses the hook
const SelectableListExample: React.FC<{ allowMany?: boolean }> = ({ allowMany = false }) => {
    const { selectedItem, setSelectedItem } = useSelectableList({ allowMany })

    return (
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Selection Info</h3>
                <div className="text-sm text-gray-600 space-y-1">
                    <div>Selected items: {selectedItem.amount}</div>
                    <div>Allow multiple: {selectedItem.allowMany ? 'Yes' : 'No'}</div>
                    <div>Selected IDs: {selectedItem.asArray.length > 0 ? selectedItem.asArray.join(', ') : 'None'}</div>
                </div>
            </div>

            <List contentHeight="h-64" className="border border-gray-200 rounded-lg">
                {sampleItems.map((item) => (
                    <SelectableItem
                        key={item.id}
                        id={item.id}
                        selectedId={selectedItem.equals(item.id) ? item.id : undefined}
                        onClick={setSelectedItem}
                        iconClassName="border-green-300"
                    >
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <div className="font-medium text-gray-900">{item.title}</div>
                                <div className="text-sm text-gray-500">{item.time}</div>
                            </div>
                            <div className="text-sm font-medium text-green-600">
                                +{item.points} pts
                            </div>
                        </div>
                    </SelectableItem>
                ))}
            </List>
        </div>
    )
}

// Single selection story
export const SingleSelection: Story = {
    render: () => <SelectableListExample allowMany={false} />,
    parameters: {
        docs: {
            description: {
                story: 'Single selection mode - only one item can be selected at a time.',
            },
        },
    },
}

// Multiple selection story
export const MultipleSelection: Story = {
    render: () => <SelectableListExample allowMany={true} />,
    parameters: {
        docs: {
            description: {
                story: 'Multiple selection mode - multiple items can be selected simultaneously.',
            },
        },
    },
}

// Interactive example with custom styling
const InteractiveExample: React.FC<{ allowMany?: boolean }> = ({ allowMany = false }) => {
    const { selectedItem, setSelectedItem } = useSelectableList({ allowMany })

    const clearSelection = () => {
        // Reset to empty selection
        const emptySelection = new SelectedItem({ allowMany })
        // This would need to be handled differently in a real implementation
        // For demo purposes, we'll just show the concept
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Interactive Selection Demo</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={clearSelection}
                        className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-800">
                    <strong>Selection Status:</strong> {selectedItem.amount} item(s) selected
                    {selectedItem.asArray.length > 0 && (
                        <span className="ml-2">({selectedItem.asArray.join(', ')})</span>
                    )}
                </div>
            </div>

            <List contentHeight="h-80" className="border border-gray-200 rounded-lg">
                {sampleItems.map((item, index) => {
                    const isSelected = selectedItem.equals(item.id)
                    return (
                        <SelectableItem
                            key={item.id}
                            id={item.id}
                            selectedId={isSelected ? item.id : undefined}
                            onClick={setSelectedItem}
                            iconClassName={isSelected ? 'bg-green-500 border-green-500' : 'border-gray-300'}
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">{item.title}</div>
                                        <div className="text-sm text-gray-500">{item.time}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-green-600">
                                        +{item.points} pts
                                    </span>
                                    {isSelected && (
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                            Selected
                                        </span>
                                    )}
                                </div>
                            </div>
                        </SelectableItem>
                    )
                })}
            </List>
        </div>
    )
}

export const InteractiveDemo: Story = {
    render: () => <InteractiveExample allowMany={true} />,
    parameters: {
        docs: {
            description: {
                story: 'Interactive demo showing the useSelectableList hook in action with visual feedback.',
            },
        },
    },
}

// Comparison between single and multiple selection
export const Comparison: Story = {
    render: () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <h3 className="text-lg font-semibold mb-4">Single Selection</h3>
                <SelectableListExample allowMany={false} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Multiple Selection</h3>
                <SelectableListExample allowMany={true} />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Side-by-side comparison of single vs multiple selection modes.',
            },
        },
    },
}
