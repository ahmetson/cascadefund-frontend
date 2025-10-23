import type { Meta, StoryObj } from '@storybook/react-vite';
import QuestPanel from './QuestPanel';

const meta = {
    component: QuestPanel,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A quest panel component that displays a list of tasks with interactive features. Users can select, navigate, and complete tasks using keyboard shortcuts and mouse interactions. Features include task selection, completion animations, and keyboard navigation.',
            },
        },
    },
    argTypes: {
        title: {
            control: { type: 'text' },
            description: 'Title of the quest panel',
            defaultValue: 'My Tasks',
        },
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-2xl">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof QuestPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'My Tasks',
    },
    parameters: {
        docs: {
            description: {
                story: 'The default quest panel with a standard set of tasks. Users can interact with tasks using keyboard shortcuts or mouse clicks.',
            },
        },
    },
};

export const CustomTitle: Story = {
    args: {
        title: 'Daily Quests',
    },
    parameters: {
        docs: {
            description: {
                story: 'Quest panel with a custom title. The title appears in the header along with the task count badge.',
            },
        },
    },
};

export const EmptyTasks: Story = {
    args: {
        title: 'Completed Tasks',
    },
    parameters: {
        docs: {
            description: {
                story: 'Quest panel showing the completed state when all tasks are finished. This demonstrates the "no tasks" message and completion state.',
            },
        },
    },
    decorators: [
        (Story) => {
            // Mock the component to show empty state
            return (
                <div className="w-full max-w-2xl">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-lg font-semibold text-gray-900">Completed Tasks</h3>
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        0
                                    </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="flex items-center space-x-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-gray-300">★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-500 text-center">
                                Come back in a few days later. No tasks to do.
                            </p>
                        </div>
                    </div>
                </div>
            );
        },
    ],
};

export const InteractiveDemo: Story = {
    args: {
        title: 'Interactive Quest Panel',
    },
    parameters: {
        docs: {
            description: {
                story: `
Interactive demonstration of the quest panel with keyboard shortcuts:

**Keyboard Controls:**
- **Enter**: Select first task or complete selected task
- **Left Arrow**: Navigate to previous task
- **Right Arrow**: Navigate to next task  
- **Escape**: Deselect current task

**Mouse Interactions:**
- Click on any task to select/deselect it
- Use the action buttons at the bottom for navigation and task completion

**Features:**
- Task selection with visual highlighting
- Smooth scrolling to selected tasks
- Completion animations with strikethrough effects
- Auto-navigation to next task after completion
- Responsive design with hover effects
                `,
            },
        },
    },
};

export const WithManyTasks: Story = {
    args: {
        title: 'Project Sprint Tasks',
    },
    parameters: {
        docs: {
            description: {
                story: 'Quest panel with a larger number of tasks to demonstrate scrolling behavior and navigation through multiple items.',
            },
        },
    },
    decorators: [
        (Story) => {
            // Create a custom component with more tasks
            const CustomQuestPanel = () => {
                const [tasks] = React.useState([
                    { title: "Setup project repository", points: 50, time: "9:00 AM", id: "1" },
                    { title: "Create wireframes", points: 75, time: "10:30 AM", id: "2" },
                    { title: "Implement authentication", points: 100, time: "12:00 PM", id: "3" },
                    { title: "Design user interface", points: 80, time: "1:30 PM", id: "4" },
                    { title: "Write unit tests", points: 60, time: "3:00 PM", id: "5" },
                    { title: "Code review session", points: 40, time: "4:30 PM", id: "6" },
                    { title: "Deploy to staging", points: 70, time: "5:30 PM", id: "7" },
                    { title: "Update documentation", points: 30, time: "6:00 PM", id: "8" },
                    { title: "Client presentation prep", points: 90, time: "7:00 PM", id: "9" },
                    { title: "Final testing", points: 50, time: "8:00 PM", id: "10" },
                ]);

                return (
                    <div className="w-full max-w-2xl">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                            <div className="p-4 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-lg font-semibold text-gray-900">Project Sprint Tasks</h3>
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            {tasks.length}
                                        </span>
                                        <p className="text-sm text-gray-500 font-normal text-center">
                                            Complete the management tasks.
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-gray-300">★</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-3 max-h-[30vh] overflow-y-auto bg-gray-50">
                                {tasks.map((task) => (
                                    <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border bg-white border-gray-300 hover:cursor-pointer shadow-lg hover:bg-gray-200 hover:border-green-400">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-4 h-4 rounded-full border-2 border-green-300"></div>
                                            <span className="text-sm text-gray-900">{task.title}</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xs font-medium text-green-600">+{task.points} pts</span>
                                            <span className="text-xs text-gray-500">{task.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="h-6 flex justify-between p-4">
                                <button className="flex items-center space-x-1 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                                    <kbd className="px-1 py-0.5 text-xs bg-gray-100 rounded">Enter</kbd>
                                    <span>selects a task</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            };

            return <CustomQuestPanel />;
        },
    ],
};

// Import React for the custom component
import React from 'react';
