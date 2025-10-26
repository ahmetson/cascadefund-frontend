import type { Meta, StoryObj } from '@storybook/react'
import IssueListPanel from './IssueListPanel'

const meta: Meta<typeof IssueListPanel> = {
    title: 'Components/Maintainer/Issue List Panel',
    component: IssueListPanel,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'IssueListPanel displays a comprehensive issue management interface with drag-and-drop functionality. It shows both public and funded issues in a two-column layout, with filtering options and priority-based categorization.'
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
                story: 'The default view of the Issue List Panel showing both public and funded issues with drag-and-drop functionality. Users can drag issues between sections or onto roadmap tabs.'
            }
        }
    }
}

export const WithMoreIssues: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates how the component would look with more issues in both public and funded sections.'
            }
        }
    },
    decorators: [
        (Story) => {
            // Mock component with more issues for demonstration
            const MockIssueListPanel = () => {
                const MockIssueCard = ({ id, title, author, description, likes, date, replies, priority, type, isDropped }: any) => {
                    const getPriorityColor = (priority: string) => {
                        switch (priority) {
                            case 'Urgent': return 'border border-orange-500'
                            case 'Bug': return 'border border-red-500'
                            case 'Wish': return 'border border-green-500'
                            default: return 'border border-gray-500'
                        }
                    }

                    return (
                        <div
                            data-testid={id}
                            className={`cursor-move p-4 text-gray-800 rounded-lg border ${type === 'funded'
                                    ? 'bg-green-50 border-green-200 hover:bg-green-100 border-green-300'
                                    : 'bg-white border-gray-200 hover:bg-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-sm">{title}</h3>
                                {type === 'funded' && (
                                    <div className="flex items-center space-x-1 text-blue-600">
                                        <span className="text-sm">⚡</span>
                                        <span className="text-sm">{likes}</span>
                                    </div>
                                )}
                            </div>

                            {type === 'funded' ? (
                                <div className="w-full h-6 rounded-full flex items-center mb-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm bg-blue-500"></div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm bg-green-500 -ml-2"></div>
                                    <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm bg-yellow-500 -ml-2"></div>
                                    <div className="text-gray-700 bg-gray-200 border-1 border-gray-400 text-xs p-1/2 rounded-full text-center ml-1">+3</div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                    <span className="text-xs text-gray-600">{author}</span>
                                </div>
                            )}

                            <p className="text-xs text-gray-600 mb-2">{description}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-4 text-xs text-gray-500">
                                    <span className="flex space-x-1">🕒 {date}</span>
                                    {type === 'funded' && <span className='flex space-x-1'>❤️ {replies}</span>}
                                    {type === 'funded' && <span className='flex space-x-1 text-blue-500'>👍 {likes}</span>}
                                </div>
                                <span className={`px-2 py-1 text-xs font-medium rounded ${getPriorityColor(priority)}`}>
                                    {priority}
                                </span>
                            </div>
                        </div>
                    )
                }

                return (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <p className='text-xs mb-2 -mt-2.5'>To clean the board, drag and drop the issues onto the tabs or onto roadmap.</p>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">All</button>
                                <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">Bug</button>
                                <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">Fix</button>
                                <button className="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded">Urgent</button>
                                <button className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded">Wish</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded">Suggested</button>
                            </div>
                            <div>
                                Sort:
                                <select className="text-xs ml-1 border border-gray-300 rounded px-2 py-1">
                                    <option>All</option>
                                    <option>Priority</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex items-center space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Public issues</h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">20000</span>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <MockIssueCard
                                        id="1"
                                        title="Authentication fails on slow connections"
                                        author="Serkan Balguliyev"
                                        description="Users are experiencing authentication failures when their connection speed drops below 100ms."
                                        likes={24}
                                        date="Oct 5, 2023"
                                        replies={5}
                                        priority="Urgent"
                                        type="public"
                                    />

                                    <MockIssueCard
                                        id="2"
                                        title="Implement dark mode across all pages"
                                        author="Serkan Balguliyev"
                                        description="Many users have requested a dark mode option to reduce eye strain during night time usage."
                                        likes={42}
                                        date="Oct 3, 2023"
                                        replies={5}
                                        priority="Urgent"
                                        type="public"
                                    />

                                    <MockIssueCard
                                        id="3"
                                        title="Add keyboard shortcuts for power users"
                                        author="Alex Johnson"
                                        description="Implement keyboard shortcuts for common actions to improve productivity."
                                        likes={18}
                                        date="Oct 2, 2023"
                                        replies={3}
                                        priority="Wish"
                                        type="public"
                                    />

                                    <MockIssueCard
                                        id="4"
                                        title="Optimize database queries for better performance"
                                        author="Maria Garcia"
                                        description="Several database queries are taking too long to execute, affecting overall application performance."
                                        likes={31}
                                        date="Oct 1, 2023"
                                        replies={2}
                                        priority="Bug"
                                        type="public"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Funded issues</h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">20000</span>
                                    <span className="text-xs text-gray-500">(+12 stars to rating)</span>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <MockIssueCard
                                        id="5"
                                        title="Fix responsive layout on tablet devices"
                                        author="Serkan Balguliyev"
                                        description="The dashboard layout breaks on iPad and other tablet devices in landscape orientation."
                                        likes={15}
                                        date="Oct 6, 2023"
                                        replies={6}
                                        priority="Bug"
                                        type="funded"
                                    />

                                    <MockIssueCard
                                        id="6"
                                        title="Data export feature crashes with large datasets"
                                        author="Serkan Balguliyev"
                                        description="When attempting to export data sets larger than 10,000 records, the application crashes."
                                        likes={37}
                                        date="Oct 5, 2023"
                                        replies={6}
                                        priority="Wish"
                                        type="funded"
                                    />

                                    <MockIssueCard
                                        id="7"
                                        title="Implement real-time notifications system"
                                        author="David Chen"
                                        description="Add a comprehensive notification system for user activities and system updates."
                                        likes={28}
                                        date="Oct 4, 2023"
                                        replies={4}
                                        priority="Feature"
                                        type="funded"
                                    />

                                    <MockIssueCard
                                        id="8"
                                        title="Add multi-language support"
                                        author="Emma Wilson"
                                        description="Implement internationalization to support multiple languages for global users."
                                        likes={45}
                                        date="Oct 3, 2023"
                                        replies={8}
                                        priority="Enhancement"
                                        type="funded"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <button className="inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
                                Add Issue
                            </button>
                        </div>
                    </div>
                )
            }
            return <MockIssueListPanel />
        }
    ]
}

export const EmptyState: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story shows how the component would appear when there are no issues in either section.'
            }
        }
    },
    decorators: [
        (Story) => {
            const EmptyIssueListPanel = () => {
                return (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <p className='text-xs mb-2 -mt-2.5'>To clean the board, drag and drop the issues onto the tabs or onto roadmap.</p>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">All</button>
                                <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">Bug</button>
                                <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">Fix</button>
                                <button className="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded">Urgent</button>
                                <button className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded">Wish</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded">Suggested</button>
                            </div>
                            <div>
                                Sort:
                                <select className="text-xs ml-1 border border-gray-300 rounded px-2 py-1">
                                    <option>All</option>
                                    <option>Priority</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex items-center space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Public issues</h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">0</span>
                                </div>
                                <div className="text-center py-8">
                                    <div className="text-gray-400 text-4xl mb-2">📋</div>
                                    <p className="text-sm text-gray-500">No public issues found</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Funded issues</h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">0</span>
                                </div>
                                <div className="text-center py-8">
                                    <div className="text-gray-400 text-4xl mb-2">💰</div>
                                    <p className="text-sm text-gray-500">No funded issues found</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <button className="inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
                                Add Issue
                            </button>
                        </div>
                    </div>
                )
            }
            return <EmptyIssueListPanel />
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
            const LoadingIssueListPanel = () => {
                return (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <p className='text-xs mb-2 -mt-2.5'>To clean the board, drag and drop the issues onto the tabs or onto roadmap.</p>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">All</button>
                                <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">Bug</button>
                                <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">Fix</button>
                                <button className="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded">Urgent</button>
                                <button className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded">Wish</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded">Suggested</button>
                            </div>
                            <div>
                                Sort:
                                <select className="text-xs ml-1 border border-gray-300 rounded px-2 py-1">
                                    <option>All</option>
                                    <option>Priority</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex items-center space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Public issues</h4>
                                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse">
                                            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                                            <div className="h-3 bg-gray-200 rounded mb-2 w-1/2"></div>
                                            <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
                                            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Funded issues</h4>
                                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    {[1, 2].map(i => (
                                        <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
                                            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                                            <div className="h-3 bg-gray-200 rounded mb-2 w-1/2"></div>
                                            <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
                                            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                )
            }
            return <LoadingIssueListPanel />
        }
    ]
}

export const FilteredView: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'This story shows the component with active filters applied, demonstrating how the interface responds to different filter states.'
            }
        }
    },
    decorators: [
        (Story) => {
            const FilteredIssueListPanel = () => {
                return (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <p className='text-xs mb-2 -mt-2.5'>To clean the board, drag and drop the issues onto the tabs or onto roadmap.</p>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">All</button>
                                <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">Bug</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">Fix</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">Urgent</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">Wish</button>
                                <button className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">Suggested</button>
                            </div>
                            <div>
                                Sort:
                                <select className="text-xs ml-1 border border-gray-300 rounded px-2 py-1">
                                    <option>Priority</option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="flex items-center space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Public issues</h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">2</span>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <div className="bg-white border border-red-200 rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-sm">Database connection timeout issues</h3>
                                        </div>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                            <span className="text-xs text-gray-600">John Doe</span>
                                        </div>
                                        <p className="text-xs text-gray-600 mb-2">Database connections are timing out under high load conditions.</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-4 text-xs text-gray-500">
                                                <span className="flex space-x-1">🕒 Oct 5, 2023</span>
                                            </div>
                                            <span className="px-2 py-1 text-xs font-medium rounded border border-red-500">
                                                Bug
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-white border border-red-200 rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-sm">Memory leak in user session handling</h3>
                                        </div>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                            <span className="text-xs text-gray-600">Jane Smith</span>
                                        </div>
                                        <p className="text-xs text-gray-600 mb-2">User sessions are not being properly cleaned up, causing memory leaks.</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-4 text-xs text-gray-500">
                                                <span className="flex space-x-1">🕒 Oct 4, 2023</span>
                                            </div>
                                            <span className="px-2 py-1 text-xs font-medium rounded border border-red-500">
                                                Bug
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex space-x-2 h-5 mb-4">
                                    <h4 className="text-sm text-gray-600">Funded issues</h4>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">1</span>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-sm">Critical security vulnerability in authentication</h3>
                                            <div className="flex items-center space-x-1 text-blue-600">
                                                <span className="text-sm">⚡</span>
                                                <span className="text-sm">25</span>
                                            </div>
                                        </div>
                                        <div className="w-full h-6 rounded-full flex items-center mb-2">
                                            <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm bg-blue-500"></div>
                                            <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm bg-green-500 -ml-2"></div>
                                            <div className="text-gray-700 bg-gray-200 border-1 border-gray-400 text-xs p-1/2 rounded-full text-center ml-1">+2</div>
                                        </div>
                                        <p className="text-xs text-gray-600 mb-2">Authentication system has a critical vulnerability that needs immediate attention.</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-4 text-xs text-gray-500">
                                                <span className="flex space-x-1">🕒 Oct 6, 2023</span>
                                                <span className='flex space-x-1'>❤️ 8</span>
                                                <span className='flex space-x-1 text-blue-500'>👍 25</span>
                                            </div>
                                            <span className="px-2 py-1 text-xs font-medium rounded border border-red-500">
                                                Bug
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-4'>
                            <button className="inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
                                Add Issue
                            </button>
                        </div>
                    </div>
                )
            }
            return <FilteredIssueListPanel />
        }
    ]
}
