import React from 'react'

interface LabelProps {
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2 w-full">
      {children}
    </label>
  )
}

export default Label
