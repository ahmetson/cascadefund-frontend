import type { Meta, StoryObj } from '@storybook/react'
import IssueListPanel2 from './IssueListPanel2'

const meta: Meta<typeof IssueListPanel2> = {
    title: 'Components/Maintainer/Issue List Panel 2',
    component: IssueListPanel2,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'IssueListPanel2 displays a list of issues with filtering capabilities. It includes a filter bar with different issue types and sorting options, along with issue cards showing detailed information about each issue.'
            }
        }
    },
    argTypes: {
        // Since the component doesn't accept props, we'll document the internal structure
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'The default view of the Issue List Panel showing two sample issues with different statuses (Bug and Wish).'
            }
        }
    }
}

export const WithManyIssues: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates how the component would look with a larger number of issues. The component uses a grid layout to display multiple issue cards.'
            }
        }
    },
    decorators: [
        (Story) => {
            // Mock component with more issues for demonstration
            const MockIssueListPanel2 = () => {
                const issues = [
                    {
                        id: 1,
                        title: "Fix responsive layout on tablet devices",
                        author: "Serkan Bulgurcu",
                        authorAvatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=S",
                        rating: 270,
                        roadmapVersion: "v23.0",
                        description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible.",
                        date: "Oct 5, 2023",
                        followers: 5,
                        messages: 5,
                        status: "Bug",
                        priority: 18,
                        votes: "VP"
                    },
                    {
                        id: 2,
                        title: "Data export feature crashes with large datasets",
                        author: "Serkan Bulgurcu",
                        authorAvatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=S",
                        rating: 290,
                        roadmapVersion: "v23.0",
                        description: "When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming.",
                        date: "Oct 5, 2023",
                        followers: 5,
                        messages: 5,
                        status: "Wish",
                        priority: 23,
                        votes: "VP"
                    },
                    {
                        id: 3,
                        title: "Implement dark mode theme",
                        author: "Alex Johnson",
                        authorAvatar: "https://dummyimage.com/32x32/FF6B6B/ffffff?text=A",
                        rating: 320,
                        roadmapVersion: "v24.0",
                        description: "Users have requested a dark mode option for better accessibility and reduced eye strain during night usage.",
                        date: "Oct 4, 2023",
                        followers: 12,
                        messages: 8,
                        status: "Feature",
                        priority: 15,
                        votes: "VP"
                    },
                    {
                        id: 4,
                        title: "Optimize database queries for better performance",
                        author: "Maria Garcia",
                        authorAvatar: "https://dummyimage.com/32x32/4ECDC4/ffffff?text=M",
                        rating: 180,
                        roadmapVersion: "v23.0",
                        description: "Several database queries are taking too long to execute, affecting overall application performance.",
                        date: "Oct 3, 2023",
                        followers: 3,
                        messages: 2,
                        status: "Bug",
                        priority: 25,
                        votes: "VP"
                    },
                    {
                        id: 5,
                        title: "Add keyboard shortcuts for power users",
                        author: "David Chen",
                        authorAvatar: "https://dummyimage.com/32x32/45B7D1/ffffff?text=D",
                        rating: 150,
                        roadmapVersion: "v24.0",
                        description: "Implement keyboard shortcuts for common actions to improve productivity for experienced users.",
                        date: "Oct 2, 2023",
                        followers: 7,
                        messages: 4,
                        status: "Enhancement",
                        priority: 12,
                        votes: "VP"
                    }
                ]

                return (
                    <div className="max-w-6xl mx-auto p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg">All</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Bug</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Fix</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Urgent</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Wish</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Suggested</button>
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
                        <div className="grid gap-6">
                            {issues.map(issue => (
                                <div key={issue.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {issue.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                                <div className="flex items-center space-x-2">
                                                    <img src={issue.authorAvatar} alt={issue.author} className="w-6 h-6 rounded-full" />
                                                    <span>{issue.author}</span>
                                                </div>
                                                <span className="text-yellow-600">{issue.rating} rating</span>
                                                <span>Reflect</span>
                                                <span>{issue.roadmapVersion} roadmap</span>
                                            </div>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {issue.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-3 ml-6">
                                            <div className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded">
                                                P{issue.priority} {issue.votes}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <span>{issue.date}</span>
                                            <span>{issue.followers} followers</span>
                                            <span>{issue.messages} msg</span>
                                        </div>
                                        <div className={`px-2 py-1 text-xs font-medium rounded ${issue.status === 'Bug' ? 'bg-red-100 text-red-800' :
                                                issue.status === 'Wish' ? 'bg-green-100 text-green-800' :
                                                    issue.status === 'Feature' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {issue.status}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            return <MockIssueListPanel2 />
        }
    ]
}

export const EmptyState: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story shows how the component would appear when there are no issues to display.'
            }
        }
    },
    decorators: [
        (Story) => {
            const EmptyIssueListPanel2 = () => {
                return (
                    <div className="max-w-6xl mx-auto p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg">All</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Bug</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Fix</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Urgent</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Wish</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Suggested</button>
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
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">📋</div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No issues found</h3>
                            <p className="text-gray-500">There are currently no issues matching your filters.</p>
                        </div>
                    </div>
                )
            }
            return <EmptyIssueListPanel2 />
        }
    ]
}

export const LoadingState: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates a loading state while issues are being fetched.'
            }
        }
    },
    decorators: [
        (Story) => {
            const LoadingIssueListPanel2 = () => {
                return (
                    <div className="max-w-6xl mx-auto p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg">All</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Bug</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Fix</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Urgent</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Wish</button>
                                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Suggested</button>
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
                        <div className="grid gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
                                            <div className="flex items-center space-x-4 mb-3">
                                                <div className="h-4 bg-gray-200 rounded w-24"></div>
                                                <div className="h-4 bg-gray-200 rounded w-16"></div>
                                                <div className="h-4 bg-gray-200 rounded w-20"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                            </div>
                                        </div>
                                        <div className="h-6 bg-gray-200 rounded w-16 ml-6"></div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="h-4 bg-gray-200 rounded w-20"></div>
                                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                                            <div className="h-4 bg-gray-200 rounded w-12"></div>
                                        </div>
                                        <div className="h-5 bg-gray-200 rounded w-12"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            return <LoadingIssueListPanel2 />
        }
    ]
}
