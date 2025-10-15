import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'
import IssueLink from '@/components/issue/IssueLinkPanel'

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
    <Card className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4" title='Highlighted Issues'>
      {issues.map((issue, index) => (
        <IssueLink
          key={index}
          title={issue.title}
          description={issue.description}
          supporters={issue.supporters}
          vp={issue.vp}
        />
      ))}
    </Card>
  )
}

export default HighlightedIssues
