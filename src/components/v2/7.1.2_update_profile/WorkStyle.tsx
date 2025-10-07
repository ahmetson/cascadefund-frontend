import React from 'react'
import Card from './ui/Card'
import Slider from './ui/Slider'

const WorkStyle: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Availability & Work Style</h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Availability Status</h4>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Partially Available</span>
            </div>
            <p className="text-xs text-gray-500">Estimated by CascadeFund, not guaranteed</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Communication Style</h4>
            <div className="space-y-3">
              <Slider label="Results" leftLabel="Results" rightLabel="Gently directing" value={75} />
              <Slider label="Mindset" leftLabel="Mindset" rightLabel="Practical" value={60} />
              <Slider label="Personality" leftLabel="Personality" rightLabel="Casual/fun" value={40} />
              <Slider label="Motivation" leftLabel="Motivation" rightLabel="Encouraging" value={80} />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-3">Work Methodology</h4>
          <div className="space-y-3 mb-6">
            <Slider label="Big risk first" leftLabel="Big risk first" rightLabel="Technology Preference" value={70} />
            <Slider label="Use references" leftLabel="Use references" rightLabel="One-time first" value={50} />
            <Slider label="Work ethics" leftLabel="Work ethics" rightLabel="Lightly disruptive" value={30} />
            <Slider label="Other issue" leftLabel="Other issue" rightLabel="Our thing really well" value={85} />
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-3">Collaboration Style</h4>
            <div className="space-y-3">
              <Slider label="Autonomous" leftLabel="Autonomous" rightLabel="Rules first" value={65} />
              <Slider label="Pair work" leftLabel="Pair work" rightLabel="Working with people" value={45} />
              <Slider label="Communication" leftLabel="Communication" rightLabel="Technical" value={75} />
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Estimated by CascadeFund based on communication analysis
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkStyle
