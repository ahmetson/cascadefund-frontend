import React from 'react'

interface AllocationItemProps {
  name: string
  votes: number
  link?: string
}

const AllocationItem: React.FC<AllocationItemProps> = ({ name, votes, link }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {link ? (
          <a href={link} className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
            {name}
          </a>
        ) : (
          <span className="text-gray-700 text-sm">{name}</span>
        )}
      </div>
      <div className="flex items-center space-x-1">
        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-blue-600 font-medium text-sm">{votes}</span>
      </div>
    </div>
  )
}

export default AllocationItem
