import React from 'react'

interface TagProps {
  label: string
  variant: 'gray' | 'red' | 'blue' | 'green'
  removable?: boolean
  onRemove?: () => void
}

const Tag: React.FC<TagProps> = ({ label, variant, removable = false, onRemove }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gray':
        return 'bg-gray-100 text-gray-800'
      case 'red':
        return 'bg-red-100 text-red-800'
      case 'blue':
        return 'bg-blue-100 text-blue-800'
      case 'green':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getVariantStyles()}`}>
      {label}
      {removable && (
        <button 
          onClick={onRemove}
          className="ml-2 text-current hover:text-gray-600"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  )
}

export default Tag
