import React from 'react'
import Card from './ui/Card'
import IssueCard from './ui/IssueCard'

const HighlightedIssues: React.FC = () => {
  const issues = [
    {
      title: 'Add Typescript Support',
      description: 'Add full TypeScript support to improve developer experience and type safety.',
      supporters: 12,
      vp: 45
    },
    {
      title: 'Fix Linux memory leak',
      description: 'Resolve critical memory leak affecting Linux deployments in production.',
      supporters: 8,
      vp: 32
    },
    {
      title: 'Consult me how the code work for internal project',
      description: 'Create comprehensive guides and examples for newcomers to the library.',
      supporters: 1,
      vp: 20
    },
    {
      title: 'Better documentation for beginners',
      description: 'Create comprehensive guides and examples for newcomers to the library.',
      supporters: 5,
      vp: 20
    }
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Highlighted Issues</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {issues.map((issue, index) => (
          <IssueCard
            key={index}
            title={issue.title}
            description={issue.description}
            supporters={issue.supporters}
            vp={issue.vp}
          />
        ))}
      </div>
    </Card>
  )
}

export default HighlightedIssues
