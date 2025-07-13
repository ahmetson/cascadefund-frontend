import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cascade Fund is part of Ara project. Ara aims to create internet as the living organism of open source projects. 
            Cascade Fund uses Hyperpayment protocol and its implementation on the Blockchain network.
          </p>
          <p className="text-gray-700 mt-4">
            How CascadeFund distribution works using hyperpayment?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contacts / about us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email</li>
              <li>Telegram</li>
              <li>Github</li>
              <li>Linkedin</li>
              <li>Twitter</li>
              <li>Discord</li>
              <li>out of subject</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Join our Community / News channel</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Telegram</li>
              <li>Github</li>
              <li>Linkedin</li>
              <li>Twitter</li>
              <li>Discord</li>
              <li>out of subject</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Technical details</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Hyperpayment protocol</li>
              <li>Hyperpayment smart State Blockchain</li>
              <li>Hyperpayment smart State Blockchain</li>
              <li>Hyperpayment smart State Blockchain</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-600 text-sm">
          <p>© 2024 Cascade Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
