import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import IssueBoardPanel from './IssueBoardPanel'

const meta: Meta<typeof IssueBoardPanel> = {
    title: 'Components/Influencer/IssueBoardPanel',
    component: IssueBoardPanel,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# IssueBoardPanel

A comprehensive issue management panel that displays issues with filtering, searching, and sorting capabilities. 
Uses the FilterableList component to provide a consistent interface for issue management.

## Features

- **Filterable Issues**: Filter by type (Bug, Fix, Urgent, Wish, etc.)
- **Search Functionality**: Search through issue titles and descriptions
- **Sorting Options**: Sort by priority, date, upvotes, or comments
- **Issue Cards**: Display detailed issue information with voting capabilities
- **Responsive Layout**: Grid layout that adapts to screen size

## Usage

The IssueBoardPanel is designed for influencer dashboards where users need to:
- View and manage issues
- Filter issues by different criteria
- Search for specific issues
- Sort issues by various metrics
- Vote on issues (for cascadefund storage issues)

## Integration

This component integrates with:
- \`FilterableList\` for filtering and search functionality
- \`IssueCard\` for individual issue display
- \`PageLikePanel\` for consistent panel layout
        `
            }
        }
    },
    argTypes: {
        // No props to control since this is a self-contained component
    }
}

export default meta
type Story = StoryObj<typeof IssueBoardPanel>

// Default story showing the complete IssueBoardPanel
export const Default: Story = {
    name: 'Default Issue Board',
    render: () => <IssueBoardPanel />,
    parameters: {
        docs: {
            description: {
                story: 'The default IssueBoardPanel with all features enabled, showing 4 sample issues with different types and statuses.'
            }
        }
    }
}

// Story showing the panel in different states
export const WithDifferentIssueTypes: Story = {
    name: 'Different Issue Types',
    render: () => <IssueBoardPanel />,
    parameters: {
        docs: {
            description: {
                story: 'Shows how the panel handles different issue types including bugs, features, improvements, and urgent issues with various voting power states.'
            }
        }
    }
}

// Story demonstrating filtering capabilities
export const FilteringCapabilities: Story = {
    name: 'Filtering & Search',
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Filter Capabilities</h3>
                <p className="text-sm text-gray-600 mb-4">
                    The IssueBoardPanel includes comprehensive filtering options:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>All</strong> - Shows all issues with sorting by Priority, Date, Upvotes, Comments</li>
                    <li>• <strong>Bug</strong> - Shows bug issues, sorted by Priority or Date</li>
                    <li>• <strong>Fix</strong> - Shows fix-related issues, sorted by Priority or Date</li>
                    <li>• <strong>Urgent</strong> - Shows urgent issues, sorted by Priority or Date</li>
                    <li>• <strong>Wish</strong> - Shows wishlist items, sorted by Upvotes or Date</li>
                    <li>• <strong>Suggested</strong> - Shows suggested improvements, sorted by Upvotes or Date</li>
                    <li>• <strong>Following</strong> - Shows followed issues, sorted by Date or Upvotes</li>
                    <li>• <strong>My</strong> - Shows user's own issues, sorted by Date or Priority</li>
                </ul>
            </div>
            <IssueBoardPanel />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates the filtering and search capabilities of the IssueBoardPanel, showing how users can filter by different issue types and sort by various criteria.'
            }
        }
    }
}

// Story showing responsive behavior
export const ResponsiveLayout: Story = {
    name: 'Responsive Layout',
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Responsive Design</h3>
                <p className="text-sm text-gray-600 mb-4">
                    The IssueBoardPanel adapts to different screen sizes:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>Desktop</strong> - 2-column grid layout for optimal viewing</li>
                    <li>• <strong>Tablet</strong> - Single column layout for better readability</li>
                    <li>• <strong>Mobile</strong> - Optimized single column with touch-friendly controls</li>
                </ul>
            </div>
            <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-4">Resize your browser window to see the responsive behavior</p>
                <IssueBoardPanel />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Shows how the IssueBoardPanel responds to different screen sizes, with the grid layout adapting from 2 columns on desktop to 1 column on mobile devices.'
            }
        }
    }
}

// Story demonstrating issue states
export const IssueStates: Story = {
    name: 'Issue States & Voting',
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Issue States & Voting Power</h3>
                <p className="text-sm text-gray-600 mb-4">
                    The panel displays issues in various states with different voting capabilities:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>Rating Issues</strong> - Issues with voting power that can be voted on</li>
                    <li>• <strong>Non-Rating Issues</strong> - Issues without voting power (like/dislike only)</li>
                    <li>• <strong>Solved Issues</strong> - Issues marked as already resolved</li>
                    <li>• <strong>Different Storage</strong> - Issues from GitHub vs Cascadefund with different capabilities</li>
                </ul>
            </div>
            <IssueBoardPanel />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates different issue states including rating vs non-rating issues, solved issues, and issues from different storage systems (GitHub vs Cascadefund).'
            }
        }
    }
}

// Story showing the component structure
export const ComponentStructure: Story = {
    name: 'Component Structure',
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Component Architecture</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-sm text-gray-700">
                        {`IssueBoardPanel
├── PageLikePanel (wrapper with title and "Add Issue" button)
│   └── FilterableList
│       ├── FilterToggle (filter buttons with sort dropdowns)
│       ├── SearchBar (search input)
│       └── List (grid layout)
│           └── IssueCard (for each issue)
│               ├── Issue metadata (title, description, author)
│               ├── Voting controls (for rating issues)
│               └── Status indicators (type, priority, etc.)`}
                    </pre>
                </div>
            </div>
            <IssueBoardPanel />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Shows the component hierarchy and how the IssueBoardPanel integrates with FilterableList and other components.'
            }
        }
    }
}
