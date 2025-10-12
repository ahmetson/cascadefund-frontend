import React from 'react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="w-12 h-12">
          <div className="absolute inset-0">
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '0px', left: '18px', animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '6px', left: '30px', animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '18px', left: '36px', animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '30px', left: '30px', animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '36px', left: '18px', animationDelay: '0.4s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '30px', left: '6px', animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '18px', left: '0px', animationDelay: '0.6s' }}></div>
            <div className="w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping" style={{ top: '6px', left: '6px', animationDelay: '0.7s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
