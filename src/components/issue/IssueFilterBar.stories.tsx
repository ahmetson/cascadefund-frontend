import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import IssueFilterBar from './IssueFilterBar'

const meta: Meta<typeof IssueFilterBar> = {
    title: 'Components/Issue/IssueFilterBar',
    component: IssueFilterBar,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A filter bar component for issue filtering with category buttons and sorting options.'
            }
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: 'Default',
    parameters: {
        docs: {
            description: {
                story: 'The default filter bar with all filter buttons and sorting dropdown.'
            }
        }
    }
}

export const WithActiveFilter: Story = {
    name: 'With Active Filter',
    parameters: {
        docs: {
            description: {
                story: 'Filter bar with a specific filter button active (Bug filter).'
            }
        }
    },
    render: () => (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300">
                    All
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-red-500 text-white hover:opacity-80">
                    Bug
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-blue-500 text-white hover:opacity-80">
                    Fix
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-orange-500 text-white hover:opacity-80">
                    Urgent
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-green-500 text-white hover:opacity-80">
                    Wish
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-yellow-600 text-white hover:opacity-80">
                    Suggested
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white">
                    <option>Priority</option>
                    <option>Date</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
    )
}

export const Compact: Story = {
    name: 'Compact',
    parameters: {
        docs: {
            description: {
                story: 'A more compact version of the filter bar with reduced spacing.'
            }
        }
    },
    render: () => (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
                <button className="px-2 py-1 rounded text-xs font-medium transition-colors bg-blue-500 text-white">
                    All
                </button>
                <button className="px-2 py-1 rounded text-xs font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Bug
                </button>
                <button className="px-2 py-1 rounded text-xs font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Fix
                </button>
                <button className="px-2 py-1 rounded text-xs font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Urgent
                </button>
                <button className="px-2 py-1 rounded text-xs font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Wish
                </button>
                <button className="px-2 py-1 rounded text-xs font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Suggested
                </button>
            </div>
            <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-600">Sort:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white">
                    <option>Priority</option>
                    <option>Date</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
    )
}

export const DarkMode: Story = {
    name: 'Dark Mode',
    parameters: {
        docs: {
            description: {
                story: 'Filter bar adapted for dark mode theme.'
            }
        },
        backgrounds: {
            default: 'dark'
        }
    },
    render: () => (
        <div className="flex items-center justify-between mb-6 bg-gray-900 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-blue-500 text-white">
                    All
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-red-500 text-white hover:opacity-80">
                    Bug
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-blue-500 text-white hover:opacity-80">
                    Fix
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-orange-500 text-white hover:opacity-80">
                    Urgent
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-green-500 text-white hover:opacity-80">
                    Wish
                </button>
                <button className="px-3 py-1 rounded-lg text-sm font-medium transition-colors bg-yellow-600 text-white hover:opacity-80">
                    Suggested
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">Sort by:</span>
                <select className="border border-gray-600 rounded-lg px-3 py-1 text-sm bg-gray-800 text-white">
                    <option>Priority</option>
                    <option>Date</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
    )
}

export const Interactive: Story = {
    name: 'Interactive',
    parameters: {
        docs: {
            description: {
                story: 'Interactive version showing how the filter buttons and sorting work together.'
            }
        }
    },
    render: () => {
        const [activeFilter, setActiveFilter] = React.useState('All')
        const [sortBy, setSortBy] = React.useState('Priority')

        const filters = [
            { text: 'All', color: 'bg-gray-200' },
            { text: 'Bug', color: 'bg-red-500' },
            { text: 'Fix', color: 'bg-blue-500' },
            { text: 'Urgent', color: 'bg-orange-500' },
            { text: 'Wish', color: 'bg-green-500' },
            { text: 'Suggested', color: 'bg-yellow-600' }
        ]

        return (
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    {filters.map((filter) => (
                        <button
                            key={filter.text}
                            onClick={() => setActiveFilter(filter.text)}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${activeFilter === filter.text
                                    ? 'bg-blue-500 text-white'
                                    : filter.color === 'bg-gray-200'
                                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        : `${filter.color} text-white hover:opacity-80`
                                }`}
                        >
                            {filter.text}
                        </button>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white"
                    >
                        <option value="Priority">Priority</option>
                        <option value="Date">Date</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
            </div>
        )
    }
}
