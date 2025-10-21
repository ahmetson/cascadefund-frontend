import type { Meta, StoryObj } from '@storybook/react'
import MenuPanel from './MenuPanel'

const meta: Meta<typeof MenuPanel> = {
    title: 'Components/Panel/MenuPanel',
    component: MenuPanel,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        activeMenuItem: {
            control: 'select',
            options: ['ihistory', 'iwork', 'balance', 'cbalance', 'project', 'marketing', 'work', 'cwork'],
        },
        focusMenuItem: {
            control: 'select',
            options: ['ihistory', 'iwork', 'balance', 'cbalance', 'project', 'marketing', 'work', 'cwork'],
        },
        title: {
            control: 'text',
        },
        onlyCustomChildren: {
            control: 'boolean',
        },
    },
}

export default meta
type Story = StoryObj<typeof MenuPanel>

// User Stories for focusMenuItem functionality

/**
 * USER STORY 1: Navigation Highlighting
 * As a user navigating through the application
 * I want to see which menu item I'm currently focused on
 * So that I can understand my current location in the navigation hierarchy
 */
export const FocusedNavigation: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'work',
        title: 'Main Menu',
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows how focusMenuItem highlights a different item than the active one, useful for showing user attention or pending navigation.',
            },
        },
    },
}

/**
 * USER STORY 2: Attention Direction
 * As a user with notifications or pending actions
 * I want the system to draw my attention to specific menu items
 * So that I can quickly access important features or updates
 */
export const AttentionDirection: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'work',
        title: 'Main Menu',
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates how focusMenuItem can be used to direct user attention to items with notifications or pending actions.',
            },
        },
    },
}

/**
 * USER STORY 3: Multi-level Navigation
 * As a user navigating between different sections
 * I want to see both my current active section and the section I'm about to navigate to
 * So that I can maintain context while exploring the application
 */
export const MultiLevelNavigation: Story = {
    args: {
        activeMenuItem: 'project',
        focusMenuItem: 'marketing',
        title: 'Project Dashboard',
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows how focusMenuItem can indicate the next navigation target while maintaining the current active state.',
            },
        },
    },
}

/**
 * USER STORY 4: Influencer Focus
 * As an influencer user
 * I want to see focused attention on my work-related menu items
 * So that I can quickly access my tasks and assignments
 */
export const InfluencerFocus: Story = {
    args: {
        activeMenuItem: 'ihistory',
        focusMenuItem: 'iwork',
        title: 'Influencer Dashboard',
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates focus functionality for influencer-specific menu items.',
            },
        },
    },
}

/**
 * USER STORY 5: Maintainer Focus
 * As a maintainer user
 * I want to see focused attention on collaboration items
 * So that I can quickly access team coordination features
 */
export const MaintainerFocus: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'cwork',
        title: 'Maintainer Dashboard',
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows focus on collaboration items for maintainer users.',
            },
        },
    },
}

/**
 * USER STORY 6: No Focus State
 * As a user in a standard navigation state
 * I want to see only the active menu item highlighted
 * So that the interface remains clean and uncluttered
 */
export const NoFocusState: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: undefined,
        title: 'Main Menu',
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the default state without any focused menu item, maintaining clean navigation.',
            },
        },
    },
}

/**
 * USER STORY 7: Focus with Badges
 * As a user with notifications
 * I want to see both the focused item and its notification badges
 * So that I can understand both the attention direction and the notification count
 */
export const FocusWithBadges: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'work',
        title: 'Main Menu',
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates how focus works with menu items that have notification badges.',
            },
        },
    },
}

/**
 * USER STORY 8: Cascading Focus
 * As a user working with cascading features
 * I want to see focused attention on cascading-related items
 * So that I can quickly access cascading balance and work features
 */
export const CascadingFocus: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'cbalance',
        title: 'Main Menu',
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows focus on cascading balance features for users working with cascading functionality.',
            },
        },
    },
}

/**
 * USER STORY 9: Marketing Focus
 * As a user focused on marketing activities
 * I want to see attention directed to marketing menu items
 * So that I can quickly access marketing tools and campaigns
 */
export const MarketingFocus: Story = {
    args: {
        activeMenuItem: 'project',
        focusMenuItem: 'marketing',
        title: 'Project Dashboard',
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates focus on marketing menu items for users engaged in marketing activities.',
            },
        },
    },
}

/**
 * USER STORY 10: Custom Children with Focus
 * As a user with custom menu items
 * I want the focus functionality to work with custom children
 * So that I can maintain consistent navigation behavior
 */
export const CustomChildrenWithFocus: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'work',
        title: 'Custom Menu',
        onlyCustomChildren: true,
        children: (
            <div className="space-y-1">
                <div className="px-3 py-2 rounded-md bg-blue-50 text-blue-700">
                    Custom Item 1
                </div>
                <div className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                    Custom Item 2
                </div>
            </div>
        ),
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows how focus functionality works when using custom children instead of default menu items.',
            },
        },
    },
}

/**
 * USER STORY 11: Focus Animation States
 * As a user interacting with the menu
 * I want to see smooth transitions between focus states
 * So that the interface feels responsive and polished
 */
export const FocusAnimationStates: Story = {
    args: {
        activeMenuItem: 'work',
        focusMenuItem: 'cwork',
        title: 'Work Dashboard',
    },
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates the electric border animation that appears when a menu item is focused.',
            },
        },
    },
}

/**
 * USER STORY 12: Focus Accessibility
 * As a user with accessibility needs
 * I want the focus state to be clearly visible and accessible
 * So that I can navigate the menu effectively using assistive technologies
 */
export const FocusAccessibility: Story = {
    args: {
        activeMenuItem: 'balance',
        focusMenuItem: 'project',
        title: 'Accessible Menu',
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows how focus states provide clear visual feedback for accessibility compliance.',
            },
        },
    },
}