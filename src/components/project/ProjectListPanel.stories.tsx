import type { Meta, StoryObj } from '@storybook/react'
import ProjectListPanel from './ProjectListPanel'
import type { ProjectInfoProps } from './ProjectInfoPanel2'

const meta: Meta<typeof ProjectListPanel> = {
    title: 'Components/Project/ProjectListPanel',
    component: ProjectListPanel,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A comprehensive project list panel that displays projects with search, filtering, and pagination capabilities. Features project cards with detailed information including ratings, statistics, and collaboration data.',
            },
        },
    },
    argTypes: {
        projects: {
            control: { type: 'object' },
            description: 'Array of project data to display in the list',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Mock data for projects
const mockProjects: ProjectInfoProps[] = [
    {
        title: 'React Dashboard',
        isInfluencer: true,
        rating: 4.8,
        forks: 124,
        likes: 89,
        isFollowing: true,
        originalProject: 'facebook/react',
        issue: '#1234',
        description: 'A modern React dashboard with TypeScript, Tailwind CSS, and real-time data visualization capabilities.',
        license: 'MIT License',
        balance: '$2,450',
        cascadeBalance: '$1,200',
        totalAmount: '$3,650',
        duration: '6 months',
        lastActivity: '2 days ago',
        totalCommits: '1,234',
        commitsPerDay: '12.5',
        openIssues: 8,
        closedIssues: 156,
        avgResponseTime: '2.3 hours',
        collaborators: [
            { name: 'John Doe', percentage: 45, color: '#3B82F6' },
            { name: 'Jane Smith', percentage: 30, color: '#10B981' },
            { name: 'Mike Johnson', percentage: 25, color: '#F59E0B' },
        ],
        activeYears: 2,
        maintainer: {
            name: 'John Doe',
            rating: '4.9',
        },
        influencers: [
            { avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
            { avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
            { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
        ],
    },
    {
        title: 'Vue.js E-commerce',
        isInfluencer: false,
        rating: 4.6,
        forks: 67,
        likes: 45,
        isFollowing: false,
        originalProject: 'vuejs/vue',
        issue: '#567',
        description: 'Full-stack e-commerce solution built with Vue.js, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management.',
        license: 'Apache 2.0',
        balance: '$1,890',
        cascadeBalance: '$950',
        totalAmount: '$2,840',
        duration: '4 months',
        lastActivity: '1 week ago',
        totalCommits: '892',
        commitsPerDay: '8.2',
        openIssues: 12,
        closedIssues: 89,
        avgResponseTime: '4.1 hours',
        collaborators: [
            { name: 'Sarah Wilson', percentage: 60, color: '#8B5CF6' },
            { name: 'Tom Brown', percentage: 25, color: '#EF4444' },
            { name: 'Lisa Davis', percentage: 15, color: '#06B6D4' },
        ],
        activeYears: 1,
        maintainer: {
            name: 'Sarah Wilson',
            rating: '4.7',
        },
        influencers: [
            { avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
            { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
        ],
    },
    {
        title: 'Node.js API Gateway',
        isInfluencer: true,
        rating: 4.9,
        forks: 203,
        likes: 156,
        isFollowing: true,
        originalProject: 'expressjs/express',
        issue: '#890',
        description: 'High-performance API gateway built with Node.js and Express. Includes rate limiting, authentication, load balancing, and comprehensive monitoring.',
        license: 'GPL-3.0',
        balance: '$3,200',
        cascadeBalance: '$1,800',
        totalAmount: '$5,000',
        duration: '8 months',
        lastActivity: '3 days ago',
        totalCommits: '2,156',
        commitsPerDay: '15.8',
        openIssues: 5,
        closedIssues: 234,
        avgResponseTime: '1.2 hours',
        collaborators: [
            { name: 'Alex Chen', percentage: 50, color: '#F97316' },
            { name: 'Maria Garcia', percentage: 35, color: '#84CC16' },
            { name: 'David Lee', percentage: 15, color: '#EC4899' },
        ],
        activeYears: 3,
        maintainer: {
            name: 'Alex Chen',
            rating: '4.9',
        },
        influencers: [
            { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
            { avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
            { avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
            { avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
        ],
    },
]

// Default story with mock data
export const Default: Story = {
    args: {
        projects: mockProjects,
    },
    parameters: {
        docs: {
            description: {
                story: 'Default project list panel with sample projects. Shows the complete interface including search, filters, and project cards.',
            },
        },
    },
}

// Empty state
export const EmptyState: Story = {
    args: {
        projects: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Empty state when no projects are available. The panel still shows the search and filter interface.',
            },
        },
    },
}

// Single project
export const SingleProject: Story = {
    args: {
        projects: [mockProjects[0]],
    },
    parameters: {
        docs: {
            description: {
                story: 'Project list panel with a single project. Useful for testing the layout with minimal content.',
            },
        },
    },
}

// Many projects (stress test)
export const ManyProjects: Story = {
    args: {
        projects: [
            ...mockProjects,
            ...mockProjects.map((project, index) => ({
                ...project,
                title: `${project.title} ${index + 2}`,
                rating: Math.max(1, project.rating - (index * 0.1)),
                forks: project.forks + (index * 10),
                likes: project.likes + (index * 5),
            })),
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Project list panel with many projects to test scrolling and performance. Shows how the component handles larger datasets.',
            },
        },
    },
}

// Projects with different states
export const MixedStates: Story = {
    args: {
        projects: [
            mockProjects[0], // Influencer, following
            {
                ...mockProjects[1],
                isInfluencer: true,
                isFollowing: true,
            },
            {
                ...mockProjects[2],
                rating: 2.1, // Low rating
                openIssues: 45, // Many open issues
                avgResponseTime: '2 days', // Slow response
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Project list with mixed states including influencer projects, different ratings, and various issue counts.',
            },
        },
    },
}

// High-rated projects
export const HighRatedProjects: Story = {
    args: {
        projects: mockProjects.map(project => ({
            ...project,
            rating: 4.8 + Math.random() * 0.2, // 4.8-5.0 rating
            forks: project.forks + Math.floor(Math.random() * 100),
            likes: project.likes + Math.floor(Math.random() * 50),
        })),
    },
    parameters: {
        docs: {
            description: {
                story: 'Project list featuring high-rated projects with excellent metrics. Shows the best-case scenario for project display.',
            },
        },
    },
}

// Projects with issues
export const ProjectsWithIssues: Story = {
    args: {
        projects: mockProjects.map(project => ({
            ...project,
            openIssues: Math.floor(Math.random() * 50) + 10, // 10-60 open issues
            avgResponseTime: `${Math.floor(Math.random() * 48) + 1} hours`, // 1-48 hours
        })),
    },
    parameters: {
        docs: {
            description: {
                story: 'Project list showing projects with various issue counts and response times. Useful for testing how the component displays projects that need attention.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        projects: mockProjects,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different project configurations. Use the controls below to modify the project data.',
            },
        },
    },
}
