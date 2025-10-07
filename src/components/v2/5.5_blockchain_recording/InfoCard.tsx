import React from 'react'

const InfoCard: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mt-0.5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-800 mb-2">
            Why use Blockchain?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            For every donations you receive you also get the voting power
             to interact with the third party libraries you use. 
             But, why they should listen your requests? 
             Of course, if you share portion of your project.
             CascadeFund uses the open-source hyperpayment specification 
             and its implementation on the blockchain 
             network to send money in a cascading way.
          </p>
          <a 
            href="https://www.hyperpayment.org/specification/opensource-hyperpayment-specification" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Opensource hyperpayment specification
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
