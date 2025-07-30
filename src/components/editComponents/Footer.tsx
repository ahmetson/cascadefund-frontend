import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Made by Ars Foundation.</h4>
          <div className="space-y-1">
            <p>contacts</p>
            <p>• (email)</p>
            <p>• (telegram)</p>
          </div>
          <div className="mt-4 space-y-1">
            <p>currently registered as Ars OÜ, UIC</p>
            <p>address: 11 Tartu mnt, Tallinn, Estonia</p>
          </div>
        </div>
        
        <div>
          <div className="space-y-1">
            <p>community or for early testers</p>
            <p>• (github)</p>
            <p>• (telegram)</p>
            <p>• (discord)</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Technical details of the Cascade Fund</h4>
          <div className="space-y-1">
            <p>• (github)</p>
            <p>• (smart contract) on Blockchain network</p>
            <p>• (whitepaper spec.)</p>
          </div>
          <div className="mt-4">
            <span className="text-gray-400">miro</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
