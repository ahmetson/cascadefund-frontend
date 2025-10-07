import React from 'react'

interface ContributorRowProps {
  type: string
  percentage: string
  languages: string
  interests: string
  retention: string
}

const ContributorRow: React.FC<ContributorRowProps> = ({ 
  type, 
  percentage, 
  languages, 
  interests, 
  retention 
}) => {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3 px-4 text-sm text-gray-700">{type}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{percentage}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{languages}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{interests}</td>
      <td className="py-3 px-4 text-sm text-gray-700">{retention}</td>
    </tr>
  )
}

const ContributorAnalytics: React.FC = () => {
  return (
    <section className="mb-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Contributor Analytics</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Contributor Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">%</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Favorite Languages</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Interest Areas</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Retention</th>
              </tr>
            </thead>
            <tbody>
              <ContributorRow
                type="Developers"
                percentage="65%"
                languages="Rust, Python"
                interests="Bug fixes, Features"
                retention="72%"
              />
              <ContributorRow
                type="Designers"
                percentage="15%"
                languages="Figma, CSS"
                interests="UI/UX, Branding"
                retention="58%"
              />
              <ContributorRow
                type="Writers"
                percentage="10%"
                languages="Markdown"
                interests="Documentation"
                retention="64%"
              />
              <ContributorRow
                type="Testers"
                percentage="10%"
                languages="JS/PyTest"
                interests="QA, Automation"
                retention="51%"
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ContributorAnalytics
