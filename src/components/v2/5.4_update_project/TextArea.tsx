import React from 'react'

interface TextAreaProps {
  label: string
  value?: string
  placeholder?: string
  rows?: number
  onChange?: (value: string) => void
}

const TextArea: React.FC<TextAreaProps> = ({ 
  label, 
  value, 
  placeholder, 
  rows = 4,
  onChange 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cascade-blue focus:border-cascade-blue bg-gray-100 resize-none"
      />
    </div>
  )
}

export default TextArea
