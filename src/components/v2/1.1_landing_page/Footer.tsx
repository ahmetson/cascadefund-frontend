import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="ml-2 text-xl font-bold">CascadeFund</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering open source maintainers through sustainable funding and community collaboration.
            </p>
            <p className="text-gray-500 text-xs">
              Part of the Ara project ecosystem
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">For Maintainers</a></li>
              <li><a href="/v2/meta/user" className="hover:text-white transition-colors">For Users/Influencers</a></li>
              <li><a href="/v2/meta/contributor" className="hover:text-white transition-colors">For Contributors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/v2/meta/work" className="hover:text-white transition-colors">How it Works?</a></li>
              <li><a href="/v2/meta/quest" className="hover:text-white transition-colors">Quest Task List</a></li>
              <li><a href="#" className="hover:text-white transition-colors">
                <svg className="h-4 w-4 text-blue-400 inline mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                See CascadeFund issues
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">
                <svg className="h-4 w-4 text-blue-400 inline mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Be the CascadeFund Influencer  
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Organization</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/v2/meta/team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="/v2/meta/policy" className="hover:text-white transition-colors">Privacy Policy (no-boring-lawyer-edition)</a></li>
              <li>Contact/Follow:</li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.007 0C5.373 0 0 5.373 0 12.007s5.373 12.007 12.007 12.007 12.007-5.373 12.007-12.007S18.641.001 12.007.001zM8.901 18.569L6.27 15.95l9.106-9.106 2.631 2.618-9.106 9.107z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 CascadeFund. All rights reserved. Part of the Ara project.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
