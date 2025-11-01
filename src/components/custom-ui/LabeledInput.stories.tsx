import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import FormField from './LabeledInput'

const meta: Meta<typeof FormField> = {
    title: 'Components/Custom UI/LabeledInput',
    component: FormField,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A form input component with a label, supporting text, email, and password input types. Features consistent styling with focus states and placeholder support.',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'The label text displayed above the input field',
        },
        value: {
            control: 'text',
            description: 'The current value of the input field',
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password'],
            description: 'The type of input field',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text shown when the input is empty',
        },
        onChange: {
            action: 'value changed',
            description: 'Function called when the input value changes',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormField>

// Interactive wrapper component for controlled inputs
const InteractiveFormField = (args: any) => {
    const [value, setValue] = useState(args.value || '')
    return (
        <FormField
            {...args}
            value={value}
            onChange={(newValue) => {
                setValue(newValue)
                args.onChange?.(newValue)
            }}
        />
    )
}

// Default story
export const Default: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Name',
        value: '',
        type: 'text',
        placeholder: 'Enter your name',
    },
}

// Text input
export const TextInput: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Username',
        value: '',
        type: 'text',
        placeholder: 'Enter username',
    },
    parameters: {
        docs: {
            description: {
                story: 'A standard text input field for general text input.',
            },
        },
    },
}

// Email input
export const EmailInput: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Email Address',
        value: '',
        type: 'email',
        placeholder: 'example@email.com',
    },
    parameters: {
        docs: {
            description: {
                story: 'An email input field with email validation.',
            },
        },
    },
}

// Password input
export const PasswordInput: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Password',
        value: '',
        type: 'password',
        placeholder: 'Enter password',
    },
    parameters: {
        docs: {
            description: {
                story: 'A password input field that masks the entered characters.',
            },
        },
    },
}

// With value
export const WithValue: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Full Name',
        value: 'John Doe',
        type: 'text',
        placeholder: 'Enter your name',
    },
    parameters: {
        docs: {
            description: {
                story: 'Input field with a pre-filled value.',
            },
        },
    },
}

// All input types showcase
export const AllInputTypes: Story = {
    render: () => {
        const [textValue, setTextValue] = useState('')
        const [emailValue, setEmailValue] = useState('')
        const [passwordValue, setPasswordValue] = useState('')

        return (
            <div className="space-y-4 w-80">
                <FormField
                    label="Text Input"
                    value={textValue}
                    type="text"
                    placeholder="Enter text"
                    onChange={setTextValue}
                />
                <FormField
                    label="Email Input"
                    value={emailValue}
                    type="email"
                    placeholder="Enter email"
                    onChange={setEmailValue}
                />
                <FormField
                    label="Password Input"
                    value={passwordValue}
                    type="password"
                    placeholder="Enter password"
                    onChange={setPasswordValue}
                />
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'All available input types displayed together.',
            },
        },
    },
}

// Form example
export const FormExample: Story = {
    render: () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
        })

        return (
            <div className="space-y-4 w-80">
                <FormField
                    label="Full Name"
                    value={formData.name}
                    type="text"
                    placeholder="John Doe"
                    onChange={(value) => setFormData({ ...formData, name: value })}
                />
                <FormField
                    label="Email"
                    value={formData.email}
                    type="email"
                    placeholder="john@example.com"
                    onChange={(value) => setFormData({ ...formData, email: value })}
                />
                <FormField
                    label="Password"
                    value={formData.password}
                    type="password"
                    placeholder="••••••••"
                    onChange={(value) => setFormData({ ...formData, password: value })}
                />
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Multiple input fields used together in a form layout.',
            },
        },
    },
}

// Long labels
export const LongLabel: Story = {
    render: InteractiveFormField,
    args: {
        label: 'This is a very long label that demonstrates how the component handles extended label text',
        value: '',
        type: 'text',
        placeholder: 'Enter value',
    },
    parameters: {
        docs: {
            description: {
                story: 'Input field with a long label to demonstrate text wrapping behavior.',
            },
        },
    },
}

// Without placeholder
export const WithoutPlaceholder: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Optional Field',
        value: '',
        type: 'text',
    },
    parameters: {
        docs: {
            description: {
                story: 'Input field without placeholder text.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    render: InteractiveFormField,
    args: {
        label: 'Input Label',
        value: '',
        type: 'text',
        placeholder: 'Enter text here',
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different input configurations. Use the controls below to modify the component properties.',
            },
        },
    },
}

