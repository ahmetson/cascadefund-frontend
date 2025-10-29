import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import FilterToggle, { type FilterOption } from './FilterToggle'

const meta: Meta<typeof FilterToggle> = {
    title: 'Components/List/FilterToggle',
    component: FilterToggle,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes for the wrapper',
        },
        onValueChange: {
            action: 'valueChanged',
            description: 'Callback when filter or sort changes',
        },
        filters: {
            control: false,
            description: 'Array of filter options with their sort configurations',
        },
        defaultFilterId: {
            control: 'text',
            description: 'Initial filter to select (defaults to first filter)',
        },
    },
}

export default meta
type Story = StoryObj<typeof FilterToggle>

// Sample filter configurations
const basicFilters: FilterOption[] = [
    {
        id: 'all',
        label: 'All',
        sortIds: [
            { id: 'priority', label: 'Priority' },
            { id: 'date', label: 'Date' },
            { id: 'rating', label: 'Rating' },
        ],
    },
    {
        id: 'active',
        label: 'Active',
        sortIds: [
            { id: 'recent', label: 'Most Recent' },
            { id: 'popular', label: 'Most Popular' },
        ],
    },
    {
        id: 'completed',
        label: 'Completed',
        sortIds: [
            { id: 'date', label: 'Completion Date' },
            { id: 'duration', label: 'Duration' },
        ],
    },
]

const issueFilters: FilterOption[] = [
    {
        id: 'all',
        label: 'All',
        sortIds: [
            { id: 'priority', label: 'Priority' },
            { id: 'date', label: 'Date' },
            { id: 'rating', label: 'Rating' },
        ],
    },
    {
        id: 'bug',
        label: 'Bug',
        className: 'data-[state=on]:bg-red-500 data-[state=on]:text-white',
        sortIds: [
            { id: 'severity', label: 'Severity' },
            { id: 'date', label: 'Date' },
            { id: 'priority', label: 'Priority' },
        ],
    },
    {
        id: 'fix',
        label: 'Fix',
        className: 'data-[state=on]:bg-blue-500 data-[state=on]:text-white',
        sortIds: [
            { id: 'complexity', label: 'Complexity' },
            { id: 'date', label: 'Date' },
        ],
    },
    {
        id: 'urgent',
        label: 'Urgent',
        className: 'data-[state=on]:bg-orange-500 data-[state=on]:text-white',
        sortIds: [
            { id: 'urgency', label: 'Urgency Level' },
            { id: 'date', label: 'Date' },
        ],
    },
    {
        id: 'wish',
        label: 'Wish',
        className: 'data-[state=on]:bg-green-500 data-[state=on]:text-white',
        sortIds: [
            { id: 'votes', label: 'Votes' },
            { id: 'date', label: 'Date' },
        ],
    },
    {
        id: 'suggested',
        label: 'Suggested',
        className: 'data-[state=on]:bg-yellow-600 data-[state=on]:text-white',
        sortIds: [
            { id: 'relevance', label: 'Relevance' },
            { id: 'date', label: 'Date' },
        ],
    },
]

const projectFilters: FilterOption[] = [
    {
        id: 'all',
        label: 'All',
        sortIds: [
            { id: 'trending', label: 'Trending' },
            { id: 'newest', label: 'Newest' },
            { id: 'rating', label: 'Rating' },
        ],
    },
    {
        id: 'explore',
        label: 'Explore',
        sortIds: [
            { id: 'discovery', label: 'Discovery Score' },
            { id: 'activity', label: 'Activity' },
        ],
    },
    {
        id: 'my-projects',
        label: 'My Projects',
        sortIds: [
            { id: 'last-modified', label: 'Last Modified' },
            { id: 'progress', label: 'Progress' },
        ],
    },
    {
        id: 'following',
        label: 'Following',
        sortIds: [
            { id: 'recent-activity', label: 'Recent Activity' },
            { id: 'updates', label: 'Updates' },
        ],
    },
    {
        id: 'recommended',
        label: 'Recommended',
        sortIds: [
            { id: 'match-score', label: 'Match Score' },
            { id: 'relevance', label: 'Relevance' },
        ],
    },
]

// Interactive wrapper component
const InteractiveWrapper: React.FC<{
    filters: FilterOption[]
    defaultFilterId?: string
    className?: string
}> = ({ filters, defaultFilterId, className }) => {
    const [currentFilter, setCurrentFilter] = useState<string>('')
    const [currentSort, setCurrentSort] = useState<string>('')

    const handleValueChange = (filterId: string, sortId: string) => {
        setCurrentFilter(filterId)
        setCurrentSort(sortId)
    }

    return (
        <div className="space-y-4">
            <FilterToggle
                filters={filters}
                defaultFilterId={defaultFilterId}
                onValueChange={handleValueChange}
                className={className}
            />
            <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Current Selection</h3>
                <div className="text-sm text-gray-600 space-y-1">
                    <div>Filter: <span className="font-medium">{currentFilter || 'None'}</span></div>
                    <div>Sort: <span className="font-medium">{currentSort || 'None'}</span></div>
                </div>
            </div>
        </div>
    )
}

export const Default: Story = {
    render: () => <InteractiveWrapper filters={basicFilters} />,
    parameters: {
        docs: {
            description: {
                story: 'Basic FilterToggle with three filters, each having different sort options.',
            },
        },
    },
}

export const IssueFilters: Story = {
    render: () => <InteractiveWrapper filters={issueFilters} />,
    parameters: {
        docs: {
            description: {
                story: 'Issue filter configuration replicating IssueFilterBar functionality with color-coded filter buttons.',
            },
        },
    },
}

export const ProjectFilters: Story = {
    render: () => <InteractiveWrapper filters={projectFilters} />,
    parameters: {
        docs: {
            description: {
                story: 'Project filter configuration replicating ProjectFilterTabs functionality.',
            },
        },
    },
}

export const WithCustomClassName: Story = {
    render: () => (
        <InteractiveWrapper
            filters={[
                {
                    id: 'custom',
                    label: 'Custom Styled',
                    className: 'data-[state=on]:bg-purple-500 data-[state=on]:text-white data-[state=on]:shadow-lg',
                    sortIds: [
                        { id: 'option1', label: 'Option 1' },
                        { id: 'option2', label: 'Option 2' },
                    ],
                },
                {
                    id: 'normal',
                    label: 'Normal',
                    sortIds: [
                        { id: 'default', label: 'Default' },
                    ],
                },
            ]}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates custom styling on individual filter buttons using className prop.',
            },
        },
    },
}

export const SingleFilter: Story = {
    render: () => (
        <InteractiveWrapper
            filters={[
                {
                    id: 'only',
                    label: 'Only Filter',
                    sortIds: [
                        { id: 'sort1', label: 'Sort Option 1' },
                        { id: 'sort2', label: 'Sort Option 2' },
                    ],
                },
            ]}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: 'Edge case with only one filter option.',
            },
        },
    },
}

export const EmptySortOptions: Story = {
    render: () => (
        <InteractiveWrapper
            filters={[
                {
                    id: 'no-sort',
                    label: 'No Sort Options',
                    sortIds: [],
                },
                {
                    id: 'with-sort',
                    label: 'With Sort',
                    sortIds: [
                        { id: 'option1', label: 'Option 1' },
                    ],
                },
            ]}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: 'Filter with empty sortIds array - no sort dropdown should appear.',
            },
        },
    },
}

export const WithDefaultFilter: Story = {
    render: () => (
        <InteractiveWrapper
            filters={basicFilters}
            defaultFilterId="active"
        />
    ),
    parameters: {
        docs: {
            description: {
                story: 'FilterToggle with a specific default filter selected instead of the first one.',
            },
        },
    },
}

export const LongFilterList: Story = {
    render: () => (
        <InteractiveWrapper
            filters={[
                ...basicFilters,
                {
                    id: 'archived',
                    label: 'Archived',
                    sortIds: [
                        { id: 'archive-date', label: 'Archive Date' },
                        { id: 'original-date', label: 'Original Date' },
                    ],
                },
                {
                    id: 'draft',
                    label: 'Draft',
                    sortIds: [
                        { id: 'last-edit', label: 'Last Edit' },
                        { id: 'creation', label: 'Creation Date' },
                    ],
                },
                {
                    id: 'review',
                    label: 'Under Review',
                    sortIds: [
                        { id: 'review-date', label: 'Review Date' },
                        { id: 'submission-date', label: 'Submission Date' },
                    ],
                },
            ]}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: 'FilterToggle with many filter options to test layout and scrolling behavior.',
            },
        },
    },
}
