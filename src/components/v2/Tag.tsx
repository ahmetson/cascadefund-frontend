import React from 'react'

interface TagProps {
  label: string
  variant?: string
  removable?: boolean
  onRemove?: () => void
  score?: number
}

const Tag: React.FC<TagProps> = ({ score, label, variant = 'gray', removable = false, onRemove }) => {
  let variantClasses = variant;
  if (variant === 'orange') {
    variantClasses = 'bg-orange-100 text-orange-800'
  }
  if (variant === 'red') {
    variantClasses = 'bg-red-100 text-red-800'
  }
  if (variant === 'blue') {
    variantClasses = 'bg-blue-100 text-blue-800'
  }
  if (variant === 'gray') {
    variantClasses = 'bg-gray-100 text-gray-800'
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses}`}>
      {label}
      {score && (
        <span className="ml-1 px-1.5 py-0.5 bg-white rounded-full text-xs font-bold">
          {score}
        </span>
      )}
      {removable && (
        <button
          onClick={onRemove}
          className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-black hover:bg-opacity-20 focus:outline-none"
        >
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="m1 1 6 6m0-6-6 6" />
          </svg>
        </button>
      )}
    </span>
  )
}

export default Tag
