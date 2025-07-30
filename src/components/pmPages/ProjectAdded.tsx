import React, { useState } from 'react'

type TabType = 'markdown' | 'html' | 'svg'

const ProjectAddedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('markdown')
  const [copied, setCopied] = useState(false)

  const widgetContent = {
    markdown: `[![Cascade Donate](https://cascadefund.org/projects/reflect/button.svg)](https://cascadefund.org/projects/reflect)

Support the **Reflect** project through Cascade Fund - enabling developers to receive donations and build amazing open source projects.`,
    html: `<a href="https://cascadefund.org/projects/reflect" target="_blank">
  <img src="https://cascadefund.org/projects/reflect/button.svg" alt="Cascade Donate" style="height: 40px;">
</a>

<!-- Support the Reflect project through Cascade Fund -->`,
    svg: `<svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#7dd3c0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a8c8ec;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="40" rx="5" fill="url(#bg)"/>
  <text x="20" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2d3748">
    Cascade Donate "Reflect"
  </text>
</svg>`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(widgetContent[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container" style={{minHeight: '100vh'}}>
      <a href="/project" className="back-link">
        ← Back to projects
      </a>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}  className="max-w-2xl w-full text-center">

      {/* <main className="flex-1 flex items-center justify-center px-6 py-12"> */}
        {/* <div className="max-w-2xl w-full text-center"> */}
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Reflect was added
          </h2>
          
          <p className="text-gray-600 mb-8">
            Copy and post the Widget on your social channels, also on README.md
          </p>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium">
                Cascade Donate "Reflect"
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                  Donate to "Reflect" and let your donors donate
                </p>
                <p className="text-sm text-gray-600">
                  linked to your "Reflect" project.
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded border border-gray-300">
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => setActiveTab('markdown')}
                  className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                    activeTab === 'markdown'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Markdown
                </button>
                <button
                  onClick={() => setActiveTab('html')}
                  className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                    activeTab === 'html'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setActiveTab('svg')}
                  className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                    activeTab === 'svg'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  SVG
                </button>
              </div>
              
              <div className="p-4 bg-white border border-gray-300 rounded text-left">
                <pre className="text-sm text-gray-800 whitespace-pre-wrap overflow-x-auto">
                  <code>{widgetContent[activeTab]}</code>
                </pre>
              </div>
              
              <button
                onClick={handleCopy}
                className="mt-3 text-sm text-blue-600 hover:text-blue-800 hover:cursor-pointer font-medium transition-colors"
              >
                {copied ? 'Copied!' : 'Copy to clipboard'}
              </button>
            </div>
          </div>
          
          <a
            href='/project'
            className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            OK
          </a>
        {/* </div> */}
      {/* </main> */}
      </div>
    </div>
  )
}

export default ProjectAddedPage
