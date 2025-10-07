import React from 'react'
import Card from './ui/Card'

interface CastMember {
  id: string
  name: string
  role: string
  description: string
  avatar: string
}

const castMembers: CastMember[] = [
  {
    id: '1',
    name: 'Maintainer',
    role: 'The Creator',
    description: 'The original creator who manages the project and makes key decisions about its direction and development.',
    avatar: 'https://dummyimage.com/120x120/f3f4f6/374151?text=M'
  },
  {
    id: '2',
    name: 'Contributor',
    role: 'The Helper',
    description: 'Developers who help improve the project by submitting code, fixing bugs, and adding new features.',
    avatar: 'https://dummyimage.com/120x120/dbeafe/1e40af?text=C'
  },
  {
    id: '3',
    name: 'Influencer',
    role: 'The Promoter',
    description: 'Users who advocate for and promote the project to help it gain visibility and attract more contributors.',
    avatar: 'https://dummyimage.com/120x120/ecfdf5/059669?text=I'
  }
]

const CastSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet the Cast
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {castMembers.map((member) => (
            <Card key={member.id} className="text-center">
              <div className="mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CastSection
