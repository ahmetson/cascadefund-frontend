import React from 'react'
import FilterButton from './IssueFilterButton'

const FilterBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <FilterButton text="All" active={true} />
        <FilterButton text="Bug" color="bg-red-500" />
        <FilterButton text="Fix" color="bg-blue-500" />
        <FilterButton text="Urgent" color="bg-orange-500" />
        <FilterButton text="Wish" color="bg-green-500" />
        <FilterButton text="Suggested" color="bg-yellow-600" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white">
          <option>Priority</option>
          <option>Date</option>
          <option>Rating</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
