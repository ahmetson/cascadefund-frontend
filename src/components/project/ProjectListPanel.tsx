import React, { useState } from 'react'
import FilterTabs from '@/components/project/ProjectFilterTabs'
import ProjectCard, { type ProjectInfoProps } from '@/components/project/ProjectInfoPanel2'
import Pagination from '@/components/Pagination'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Badge from '../custom-ui/Badge'

interface Props {
  projects: ProjectInfoProps[]
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
  const [projectsCount, setProjectsCount] = useState(projects.length)

  return (
    <PageLikePanel
      interactive={false}
      title={
        <div className="flex items-center gap-2">
          <span className="mt-1">Projects</span>
          <Badge variant="gray" static={true}>{projectsCount}</Badge>
        </div>}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search projects..."
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sort by: Rating</option>
          </select>
        </div>
      </div>

      <FilterTabs />

      <div className="space-y-4">
        {projects.map((projectData) => <ProjectCard {...projectData} />)}
      </div>

      <Pagination />
    </PageLikePanel>
  )
}

export default ProjectsSection
