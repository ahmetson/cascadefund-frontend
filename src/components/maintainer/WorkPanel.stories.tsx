import type { Meta, StoryObj } from '@storybook/react'
import WorkPanel from './WorkPanel'

const meta: Meta<typeof WorkPanel> = {
    title: 'Components/Maintainer/Work Panel',
    component: WorkPanel,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'WorkPanel displays a comprehensive work management interface with drag-and-drop functionality. It shows different categories of issues (Public, Funded, Detailize, Heavy, Closed) in a tabbed interface, allowing maintainers to organize and manage issues through drag-and-drop operations.'
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
                story: 'The default view of the Work Panel showing all tabs with drag-and-drop functionality. Users can switch between different issue categories and drag issues between sections.'
            }
        }
    }
}

export const WithMoreIssues: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates how the component would look with more issues in each tab, showing the full functionality of the drag-and-drop interface.'
            }
        }
    },
    decorators: [
        () => {
            // Mock component with more issues for demonstration
            const MockWorkPanel = () => {
                const MockIssueCard = ({ id, title, author, description, type, stats, isDraggable }: any) => {
                    const getTypeColor = (type: string) => {
                        switch (type) {
                            case 'bug': return 'border-red-200 bg-red-50'
                            case 'feature': return 'border-blue-200 bg-blue-50'
                            case 'wish': return 'border-green-200 bg-green-50'
                            case 'improvement': return 'border-yellow-200 bg-yellow-50'
                            default: return 'border-gray-200 bg-white'
                        }
                    }

                    return (
                        <div
                            className={`p-3 rounded-lg border cursor-move hover:shadow-md transition-shadow ${getTypeColor(type)}`}
                            style={{ cursor: isDraggable ? 'move' : 'default' }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
                                <span className={`px-2 py-1 text-xs font-medium rounded ${type === 'bug' ? 'bg-red-100 text-red-800' :
                                        type === 'feature' ? 'bg-blue-100 text-blue-800' :
                                            type === 'wish' ? 'bg-green-100 text-green-800' :
                                                'bg-gray-100 text-gray-800'
                                    }`}>
                                    {type}
                                </span>
                            </div>

                            <p className="text-sm text-gray-600 mb-3">{description}</p>

                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={author.avatar}
                                        alt={author.name}
                                        className="w-5 h-5 rounded-full"
                                    />
                                    <span>{author.name}</span>
                                </div>
                                <span>{new Date(author.createdTime).toLocaleDateString()}</span>
                            </div>

                            {stats && (
                                <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-gray-100">
                                    {Object.entries(stats).map(([key, stat]: [string, any]) => (
                                        <div key={key} className="flex items-center space-x-1 text-xs text-gray-600">
                                            <span className="font-medium">{stat.children}</span>
                                            <span>{stat.hint}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }

                const MockTabContent = ({ title, issues, isDropTarget = false }: any) => (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                            <span className="text-sm text-gray-500">{issues.length} issues</span>
                        </div>

                        {isDropTarget ? (
                            <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50">
                                <div className="text-blue-600 text-lg mb-2">🎯</div>
                                <p className="text-blue-700 font-medium">Drop issues here</p>
                                <p className="text-blue-600 text-sm">Drag issues from other tabs to organize them</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-3">
                                {issues.map((issue: any) => (
                                    <MockIssueCard key={issue.id} {...issue} isDraggable={true} />
                                ))}
                            </div>
                        )}
                    </div>
                )

                const mockIssues = [
                    {
                        id: 1,
                        title: "Fix responsive layout on tablet devices",
                        author: { name: 'Serkan Bulgurcu', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=S', createdTime: '2023-10-05T00:00:00Z' },
                        description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation.",
                        type: 'bug',
                        stats: { follower: { children: 5, hint: 'Followers' }, chat: { children: 3, hint: 'Messages' } }
                    },
                    {
                        id: 2,
                        title: "Data export feature crashes with large datasets",
                        author: { name: 'Alex Johnson', avatar: 'https://dummyimage.com/32x32/81C784/ffffff?text=A', createdTime: '2023-10-04T00:00:00Z' },
                        description: "When attempting to export data sets larger than 10,000 records, the application crashes.",
                        type: 'wish',
                        stats: { follower: { children: 8, hint: 'Followers' }, chat: { children: 7, hint: 'Messages' } }
                    },
                    {
                        id: 3,
                        title: "Implement dark mode across all pages",
                        author: { name: 'Maria Garcia', avatar: 'https://dummyimage.com/32x32/F48FB1/ffffff?text=M', createdTime: '2023-10-03T00:00:00Z' },
                        description: "Many users have requested a dark mode option to reduce eye strain during night time usage.",
                        type: 'feature',
                        stats: { follower: { children: 12, hint: 'Followers' }, chat: { children: 5, hint: 'Messages' } }
                    },
                    {
                        id: 4,
                        title: "Add keyboard shortcuts for power users",
                        author: { name: 'David Chen', avatar: 'https://dummyimage.com/32x32/FFB74D/ffffff?text=D', createdTime: '2023-10-02T00:00:00Z' },
                        description: "Implement keyboard shortcuts for common actions to improve productivity.",
                        type: 'improvement',
                        stats: { follower: { children: 6, hint: 'Followers' }, chat: { children: 4, hint: 'Messages' } }
                    }
                ]

                return (
                    <div className="bg-gray-50 min-h-screen p-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                {/* Tab Navigation */}
                                <div className="bg-blue-100 text-gray-700 py-1 px-4">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-t-md shadow-sm border-b-2 border-blue-500">
                                            Public Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Funded Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Detailize
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Heavy
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Closed
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    <MockTabContent
                                        title="Public Issues"
                                        issues={mockIssues.slice(0, 3)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return <MockWorkPanel />
        }
    ]
}

export const EmptyState: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story shows how the component would appear when there are no issues in any of the tabs.'
            }
        }
    },
    decorators: [
        () => {
            const EmptyWorkPanel = () => {
                const EmptyTabContent = ({ title, isDropTarget = false }: any) => (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                            <span className="text-sm text-gray-500">0 issues</span>
                        </div>

                        {isDropTarget ? (
                            <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50">
                                <div className="text-blue-600 text-lg mb-2">🎯</div>
                                <p className="text-blue-700 font-medium">Drop issues here</p>
                                <p className="text-blue-600 text-sm">Drag issues from other tabs to organize them</p>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-6xl mb-4">📋</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No issues found</h3>
                                <p className="text-gray-500 mb-6">This section doesn't have any issues yet.</p>
                                <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Issue
                                </button>
                            </div>
                        )}
                    </div>
                )

                return (
                    <div className="bg-gray-50 min-h-screen p-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                {/* Tab Navigation */}
                                <div className="bg-blue-100 text-gray-700 py-1 px-4">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-t-md shadow-sm border-b-2 border-blue-500">
                                            Public Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Funded Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Detailize
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Heavy
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Closed
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    <EmptyTabContent title="Public Issues" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return <EmptyWorkPanel />
        }
    ]
}

export const DropTargetsActive: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates the drop target functionality, showing how issues can be dragged between different tabs for organization.'
            }
        }
    },
    decorators: [
        () => {
            const DropTargetWorkPanel = () => {
                const DropTargetContent = ({ title, isActive = false }: any) => (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                            <span className="text-sm text-gray-500">Drop target active</span>
                        </div>

                        <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isActive
                                ? 'border-green-500 bg-green-50'
                                : 'border-blue-300 bg-blue-50'
                            }`}>
                            <div className={`text-lg mb-2 ${isActive ? 'text-green-600' : 'text-blue-600'}`}>
                                {isActive ? '🎯' : '🎯'}
                            </div>
                            <p className={`font-medium ${isActive ? 'text-green-700' : 'text-blue-700'}`}>
                                {isActive ? 'Drop here!' : 'Drop issues here'}
                            </p>
                            <p className={`text-sm ${isActive ? 'text-green-600' : 'text-blue-600'}`}>
                                {isActive
                                    ? 'Release to drop the issue'
                                    : 'Drag issues from other tabs to organize them'
                                }
                            </p>
                        </div>
                    </div>
                )

                return (
                    <div className="bg-gray-50 min-h-screen p-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                {/* Tab Navigation */}
                                <div className="bg-blue-100 text-gray-700 py-1 px-4">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Public Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Funded Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-t-md shadow-sm border-b-2 border-blue-500">
                                            Detailize
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Heavy
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Closed
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    <DropTargetContent title="Detailize Issues" isActive={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return <DropTargetWorkPanel />
        }
    ]
}

export const LoadingState: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates a loading state while issues are being fetched from the server.'
            }
        }
    },
    decorators: [
        () => {
            const LoadingWorkPanel = () => {
                const LoadingTabContent = ({ title }: any) => (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-6 w-16 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded mb-2 w-5/6"></div>
                                    <div className="h-3 bg-gray-200 rounded mb-3 w-2/3"></div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                            <div className="h-3 bg-gray-200 rounded w-20"></div>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded w-16"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )

                return (
                    <div className="bg-gray-50 min-h-screen p-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                {/* Tab Navigation */}
                                <div className="bg-blue-100 text-gray-700 py-1 px-4">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-t-md shadow-sm border-b-2 border-blue-500">
                                            Public Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Funded Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Detailize
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Heavy
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Closed
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    <LoadingTabContent title="Public Issues" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return <LoadingWorkPanel />
        }
    ]
}

export const AllTabsView: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story shows all tabs in a single view to demonstrate the complete work panel interface with different content for each tab.'
            }
        }
    },
    decorators: [
        () => {
            const AllTabsWorkPanel = () => {
                const TabContent = ({ title, issues, isDropTarget = false, isClosed = false }: any) => (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                            <span className="text-sm text-gray-500">{issues.length} issues</span>
                        </div>

                        {isDropTarget ? (
                            <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50">
                                <div className="text-blue-600 text-lg mb-2">🎯</div>
                                <p className="text-blue-700 font-medium">Drop issues here</p>
                                <p className="text-blue-600 text-sm">Drag issues from other tabs to organize them</p>
                            </div>
                        ) : isClosed ? (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-6xl mb-4">✅</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No closed issues</h3>
                                <p className="text-gray-500">Issues that have been completed will appear here.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-3">
                                {issues.map((issue: any) => (
                                    <div key={issue.id} className="p-3 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-sm text-gray-900">{issue.title}</h4>
                                            <span className={`px-2 py-1 text-xs font-medium rounded ${issue.type === 'bug' ? 'bg-red-100 text-red-800' :
                                                    issue.type === 'feature' ? 'bg-blue-100 text-blue-800' :
                                                        issue.type === 'wish' ? 'bg-green-100 text-green-800' :
                                                            'bg-gray-100 text-gray-800'
                                                }`}>
                                                {issue.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>{issue.author}</span>
                                            <span>{issue.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )

                const mockData = {
                    public: [
                        { id: 1, title: "Fix responsive layout on tablet devices", author: "Serkan Bulgurcu", date: "Oct 5, 2023", type: "bug", description: "The dashboard layout breaks on iPad and other tablet devices." },
                        { id: 2, title: "Implement dark mode across all pages", author: "Alex Johnson", date: "Oct 4, 2023", type: "feature", description: "Many users have requested a dark mode option." },
                        { id: 3, title: "Add keyboard shortcuts for power users", author: "Maria Garcia", date: "Oct 3, 2023", type: "improvement", description: "Implement keyboard shortcuts for common actions." }
                    ],
                    funded: [
                        { id: 4, title: "Data export feature crashes with large datasets", author: "David Chen", date: "Oct 6, 2023", type: "wish", description: "When attempting to export data sets larger than 10,000 records." },
                        { id: 5, title: "Optimize database queries for better performance", author: "Emma Wilson", date: "Oct 5, 2023", type: "bug", description: "Several database queries are taking too long to execute." }
                    ],
                    detailize: [],
                    heavy: [],
                    closed: []
                }

                return (
                    <div className="bg-gray-50 min-h-screen p-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                {/* Tab Navigation */}
                                <div className="bg-blue-100 text-gray-700 py-1 px-4">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-t-md shadow-sm border-b-2 border-blue-500">
                                            Public Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Funded Issues
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Detailize
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Heavy
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-500 hover:bg-blue-200 rounded-t-md">
                                            Closed
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="p-6">
                                    <TabContent title="Public Issues" issues={mockData.public} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return <AllTabsWorkPanel />
        }
    ]
}
