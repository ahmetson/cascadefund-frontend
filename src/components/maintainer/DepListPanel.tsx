import React, { useState } from 'react'
import Panel from '@/components/utilitified_decorations/Panel'
import Button from '@/components/Button'
import DepInfo from './DepInfoPanel'

const C: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const dependencies = [
    {
      name: "TailwindCSS",
      version: "v3.3",
      rating: 71.5,
      status: "registered",
      description: "A utility-first CSS framework for rapidly building custom user interfaces. You Don't Have To Worry About Specificity...",
      links: {
        website: "#",
        github: "#"
      },
      followers: "4.2M"
    },
    {
      name: "React",
      version: "v18.2.0",
      rating: null,
      status: "not-on-platform",
      description: "Description is not available...",
      links: {
        website: "#",
        github: "#"
      },
      followers: "4.2M"
    },
    {
      name: "TailwindCSS",
      version: "v3.3",
      rating: 71.5,
      status: "registered",
      description: "A utility-first CSS framework for rapidly building custom user interfaces. You Don't Have To Worry About Specificity...",
      links: {
        website: "#",
        github: "#"
      },
      followers: "4.2M"
    }
  ]

  return (
    <Panel className="bg-task-yellow">
      <div className="flex space-x-2 mb-4">
        <Button
          variant={activeFilter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setActiveFilter('all')}
        >
          All
        </Button>
        <Button
          variant={activeFilter === 'not-on-platform' ? 'danger' : 'secondary'}
          size="sm"
          onClick={() => setActiveFilter('not-on-platform')}
        >
          Not on platform
        </Button>
        <Button
          variant={activeFilter === 'on-platform' ? 'success' : 'secondary'}
          size="sm"
          onClick={() => setActiveFilter('on-platform')}
        >
          On platform
        </Button>
        <Button
          variant={activeFilter === 'following' ? 'info' : 'secondary'}
          size="sm"
          onClick={() => setActiveFilter('following')}
        >
          Following
        </Button>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search Dependencies..."
            className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dependencies.map((dep, index) => (
          <DepInfo key={index} {...dep} />
        ))}
      </div>
    </Panel>
  )
}

export default C
