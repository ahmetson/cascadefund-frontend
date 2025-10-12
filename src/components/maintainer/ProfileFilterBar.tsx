import React from 'react'

interface Filter {
  id: string
  label: string
  active: boolean
  color: 'gray' | 'green' | 'purple' | 'orange'
}

interface FilterBarProps {
  filters: Filter[]
  sortBy: string
  sortOptions: string[]
  onFilterChange?: (filterId: string) => void
  onSortChange?: (sortBy: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  filters, 
  sortBy, 
  sortOptions, 
  onFilterChange, 
  onSortChange 
}) => {
  const getFilterButtonClasses = (filter: Filter) => {
    const baseClasses = 'px-4 py-2 text-sm font-medium rounded-lg transition-colors'
    
    if (filter.active) {
      const colorClasses = {
        gray: 'bg-gray-200 text-gray-800',
        green: 'bg-green-500 text-white',
        purple: 'bg-purple-500 text-white',
        orange: 'bg-orange-500 text-white'
      }
      return `${baseClasses} ${colorClasses[filter.color]}`
    }
    
    return `${baseClasses} bg-gray-100 text-gray-600 hover:bg-gray-200`
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={getFilterButtonClasses(filter)}
            onClick={() => onFilterChange?.(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <select 
          className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortBy}
          onChange={(e) => onSortChange?.(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar
