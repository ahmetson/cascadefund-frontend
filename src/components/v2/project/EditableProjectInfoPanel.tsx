import React from 'react'
import FormField from '@/components/v2/LabeledInput'
import TextArea from '@/components/v2/TextArea'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const ProjectForm: React.FC = () => {
  return (
    <Card title = "Update Project Information" actions={[{
      href: "/v2/data/project/blockchain",
      children: 'Next',
      variant: 'blue'
    }]}>
        <FormField 
          label="Project Title"
          value="blockchain-verification-tool"
          type="text"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 px-3 py-2 rounded text-sm">
            <span className="text-gray-600">License:</span> <span className="font-medium">MIT</span>
          </div>
          <div className="bg-gray-200 px-3 py-2 rounded text-sm">
            <span className="text-gray-600">Created At:</span> <span className="font-medium">12/05/2023</span>
          </div>
          <div className="bg-gray-200 px-3 py-2 rounded text-sm">
            <span className="text-gray-600">Primary Language:</span> <span className="font-medium">Javascript</span>
          </div>
        </div>
        
        <TextArea 
          label="Repository Description"
          value="An open-source tool for verifying software components on the blockchain, ensuring transparency and security in the software supply chain."
        />
        
        <TextArea 
          label="What are the advantages compared to other projects?"
          placeholder="Describe what makes your app different."
        />
        
        
    </Card>
  )
}

export default ProjectForm
