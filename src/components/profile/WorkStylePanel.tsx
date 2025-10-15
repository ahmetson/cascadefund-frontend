import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'
import Slider from '@/components/Slider'

const WorkStyleSection: React.FC = () => {
  return (
    <Card title="Availability & Work Style" actions={[]} bg='green-50'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-medium mb-4">Availability Status</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-sm">Partially Available</span>
            </div>
            <p className="text-xs text-gray-500">Estimated by CascadeFund, not guaranteed</p>
          </div>

          <div className="mt-6">
            <h5 className="font-medium mb-4">Communication Style</h5>
            <div className="space-y-3">
              <Slider label="Direct" leftLabel="Direct" rightLabel="Thinking style" value={25} />
              <Slider label="Verbal" leftLabel="Verbal" rightLabel="Gently discussing" value={40} />
              <Slider label="Approach" leftLabel="Approach" rightLabel="Cautious" value={60} />
              <Slider label="Ideas" leftLabel="Ideas" rightLabel="Encouraging" value={30} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">Work Methodology</h4>
          <div className="space-y-3">
            <Slider label="Less face-to-face" leftLabel="Less face-to-face" rightLabel="Technology Preference" value={70} />
            <Slider label="Big Picture" leftLabel="Big Picture" rightLabel="Task Performance" value={45} />
            <Slider label="Don't rush me" leftLabel="Don't rush me" rightLabel="Work ethics" value={35} />
          </div>

          <div className="mt-6">
            <h5 className="font-medium mb-4">Collaboration Style</h5>
            <div className="space-y-3">
              <Slider label="Research first" leftLabel="Research first" rightLabel="Proactive" value={40} />
              <Slider label="Prefer alone" leftLabel="Prefer alone" rightLabel="Brainstorming with people" value={65} />
              <Slider label="Creative" leftLabel="Creative" rightLabel="Structured" value={55} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        Estimated by CascadeFund based on communication analysis
      </p>
    </Card>
  )
}

export default WorkStyleSection
