import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import ProjectIssueListPanel from './ForkLinkingPanel'

const meta: Meta<typeof ProjectIssueListPanel> = {
    title: 'Components/Project/Fork Linking Panel',
    component: ProjectIssueListPanel,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A comprehensive issue selection panel that allows users to browse, search, and select issues from a forked repository. Features issue cards with different types (bug, feature, improvement, enhancement, custom) and search functionality.',
            },
        },
    },
    args: {
        onIssueSelect: fn(),
        onActionClick: fn(),
        project: {
            id: 'project-123',
            name: 'My Project',
            repository: 'https://github.com/user/my-project'
        },
        fork: {
            id: 'fork-456',
            name: 'Original Repository',
            repository: 'https://github.com/organization/original-repo'
        }
    },
    argTypes: {
        selectedIssues: {
            control: { type: 'object' },
            description: 'Array of selected issue IDs',
        },
        className: {
            control: { type: 'text' },
            description: 'Additional CSS classes for styling',
        },
        project: {
            control: { type: 'object' },
            description: 'Current project information',
        },
        fork: {
            control: { type: 'object' },
            description: 'Original repository information that was forked',
        },
        onIssueSelect: {
            description: 'Callback when an issue is selected/deselected',
        },
        onActionClick: {
            description: 'Callback when the Next button is clicked',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story with no selected issues
export const Default: Story = {
    args: {
        selectedIssues: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Default issue list panel with no issues selected. Shows the complete interface including search functionality and all available issues.',
            },
        },
    },
}

// With some issues selected
export const WithSelectedIssues: Story = {
    args: {
        selectedIssues: ['142', '189'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel with some issues pre-selected. Shows how the component displays selected state for issue cards.',
            },
        },
    },
}

// With all issues selected
export const AllIssuesSelected: Story = {
    args: {
        selectedIssues: ['142', '156', '189', '201', 'custom'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel with all issues selected. Demonstrates the maximum selection state.',
            },
        },
    },
}

// With custom styling
export const WithCustomStyling: Story = {
    args: {
        selectedIssues: ['142'],
        className: 'max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg',
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel with custom styling applied. Shows how the component can be customized with additional CSS classes.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        selectedIssues: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different issue selection states. Use the controls below to modify the selected issues and test the component behavior.',
            },
        },
    },
}

// Focus on bug issues
export const BugIssues: Story = {
    args: {
        selectedIssues: ['189'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel focusing on bug-type issues. Shows how the component displays different issue types with appropriate styling.',
            },
        },
    },
}

// Focus on feature issues
export const FeatureIssues: Story = {
    args: {
        selectedIssues: ['156'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel focusing on feature-type issues. Demonstrates the green styling for feature requests.',
            },
        },
    },
}

// Focus on improvement issues
export const ImprovementIssues: Story = {
    args: {
        selectedIssues: ['142'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel focusing on improvement-type issues. Shows the blue styling for improvement requests.',
            },
        },
    },
}

// Focus on enhancement issues
export const EnhancementIssues: Story = {
    args: {
        selectedIssues: ['201'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel focusing on enhancement-type issues. Demonstrates the purple styling for enhancements.',
            },
        },
    },
}

// Focus on custom issues
export const CustomIssues: Story = {
    args: {
        selectedIssues: ['custom'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel focusing on custom-type issues. Shows the gray styling for custom contributions.',
            },
        },
    },
}

// Mixed selection
export const MixedSelection: Story = {
    args: {
        selectedIssues: ['142', '189', '201'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel with a mixed selection of different issue types. Shows how the component handles multiple selections across different categories.',
            },
        },
    },
}

// Empty selection state
export const EmptySelection: Story = {
    args: {
        selectedIssues: [],
    },
    parameters: {
        docs: {
            description: {
                story: 'Issue list panel with no issues selected. Shows the initial state and the warning message about selecting issues.',
            },
        },
    },
}
