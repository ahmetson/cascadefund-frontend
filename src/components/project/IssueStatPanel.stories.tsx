import type { Meta, StoryObj } from '@storybook/react'
import IssuesSection from './IssueStatPanel'

const meta: Meta<typeof IssuesSection> = {
    title: 'Components/Project/IssueStatPanel',
    component: IssuesSection,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A panel component that displays project issue statistics including version information, open/closed issues count, and action links for maintainers and influencers.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: 'Default',
    parameters: {
        docs: {
            description: {
                story: 'The default issue statistics panel showing typical project metrics.',
            },
        },
    },
}

export const WithDifferentStats: Story = {
    name: 'With Different Statistics',
    parameters: {
        docs: {
            description: {
                story: 'Example of how the component would look with different statistical values.',
            },
        },
    },
    render: () => (
        <div className="space-y-4">
            <div className="bg-white p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">High Activity Project</h3>
                <IssuesSection />
            </div>

            <div className="bg-white p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Low Activity Project</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-2">Note: This would show different stats in a real implementation</div>
                    <IssuesSection />
                </div>
            </div>
        </div>
    ),
}

export const InDarkMode: Story = {
    name: 'Dark Mode',
    parameters: {
        docs: {
            description: {
                story: 'The component in dark mode context.',
            },
        },
        backgrounds: {
            default: 'dark',
        },
    },
    decorators: [
        (Story) => (
            <div className="dark bg-gray-900 p-6">
                <Story />
            </div>
        ),
    ],
}

export const Responsive: Story = {
    name: 'Responsive Layout',
    parameters: {
        docs: {
            description: {
                story: 'How the component adapts to different screen sizes.',
            },
        },
        viewport: {
            viewports: {
                mobile: {
                    name: 'Mobile',
                    styles: {
                        width: '375px',
                        height: '667px',
                    },
                },
                tablet: {
                    name: 'Tablet',
                    styles: {
                        width: '768px',
                        height: '1024px',
                    },
                },
                desktop: {
                    name: 'Desktop',
                    styles: {
                        width: '1024px',
                        height: '768px',
                    },
                },
            },
        },
    },
    render: () => (
        <div className="space-y-4">
            <div className="bg-white p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Mobile View (375px)</h3>
                <div className="w-[375px] mx-auto">
                    <IssuesSection />
                </div>
            </div>

            <div className="bg-white p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Tablet View (768px)</h3>
                <div className="w-[768px] mx-auto">
                    <IssuesSection />
                </div>
            </div>

            <div className="bg-white p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Desktop View (1024px)</h3>
                <div className="w-[1024px] mx-auto">
                    <IssuesSection />
                </div>
            </div>
        </div>
    ),
}

export const Interactive: Story = {
    name: 'Interactive Elements',
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates the interactive elements including hover states and clickable links.',
            },
        },
    },
    render: () => (
        <div className="space-y-4">
            <div className="bg-white p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Hover over the links to see interaction states</h3>
                <IssuesSection />
            </div>
        </div>
    ),
}

export const WithCustomStyling: Story = {
    name: 'Custom Styling',
    parameters: {
        docs: {
            description: {
                story: 'Example of how the component can be styled with custom CSS classes.',
            },
        },
    },
    decorators: [
        (Story) => (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                <div className="max-w-2xl mx-auto">
                    <Story />
                </div>
            </div>
        ),
    ],
}
