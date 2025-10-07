import React from 'react'

interface FormFieldProps {
  label: string
  value: string
  type: 'text' | 'email' | 'password'
  placeholder?: string
  onChange?: (value: string) => void
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  value, 
  type, 
  placeholder,
  onChange 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cascade-blue focus:border-cascade-blue bg-purple-100"
      />
    </div>
  )
}

export default FormField
