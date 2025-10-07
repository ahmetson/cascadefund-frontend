import React from 'react'
import Button from './ui/Button'

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          See a website walkthrough
        </h2>
        
        <div className="relative bg-gray-300 rounded-lg overflow-hidden mb-8" style={{ aspectRatio: '16/9' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-4 left-4 space-y-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
          
          <div className="absolute top-4 right-4 space-y-2">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        <Button variant="primary" size="lg">
          Watch on YouTube
        </Button>
      </div>
    </section>
  )
}

export default VideoSection
