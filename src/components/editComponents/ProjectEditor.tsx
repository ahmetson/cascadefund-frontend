import React, { useState } from 'react'
import ProjectLogo from './ProjectLogo'
import FormField from './FormField'
import SourceCode from './SourceCode'
import Contact from './Contact'
import SoftwareBillOfMaterials from './SoftwareBillOfMaterials'

const ProjectEditor: React.FC = () => {
  const [formData, setFormData] = useState({
    title: 'Audius NFT Package',
    subtitle: 'A package to reflect and receive information',
    description: 'A package to reflect and receive information',
    hyperpaymentProposal: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <button className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <span className="mr-2">←</span>
          Back to projects
        </button>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Edit project info
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ProjectLogo />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <FormField
            label="Title:"
            value={formData.title}
            onChange={(value) => handleInputChange('title', value)}
            placeholder="Audius NFT Package"
          />

          <FormField
            label="Subtitle:"
            value={formData.subtitle}
            onChange={(value) => handleInputChange('subtitle', value)}
            placeholder="A package to reflect and receive information"
          />

          <FormField
            label="Description:"
            value={formData.description}
            onChange={(value) => handleInputChange('description', value)}
            placeholder="A package to reflect and receive information"
            multiline
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hyperpayment proposal:
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
              Hyperpayment and crypto-bounty hyperpayment
            </a>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 flex items-start">
            <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <p className="text-sm text-gray-700">
              Submissions must only post open-source that meets
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <SourceCode />
        <Contact />
        <SoftwareBillOfMaterials />
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg font-medium">
          Continue
        </button>
      </div>

      <div className="text-center mt-4">
        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
          Skip for now...
        </a>
      </div>
    </main>
  )
}

export default ProjectEditor
