import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'
import Button from '@/components/Button'
import StarRating from '@/components/StarRating'

const HeroSection: React.FC = () => {
  return (
    <section className="gradient-bg text-white px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold">NodeDB Toolkit</h1>
            <StarRating rating={5} />
          </div>

          <p className="text-purple-200">Highlighted collaboration</p>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-xs">SJ</span>
              </div>
              <span>Sarah Johnson</span>
            </div>
            <span className="bg-yellow-600 px-2 py-1 rounded text-xs">+345</span>
          </div>

          <p className="text-purple-200">
            Help us build the next generation of database tools for Node.js developers. Your
            donation directly funds feature development, bug fixes, and comprehensive
            documentation that benefit both developers and end users.
          </p>

          <div className="flex items-center space-x-4 text-sm text-purple-200">
            <span>@reactnativetools</span>
            <span>2.9 stars</span>
            <span>2.5K comments</span>
            <span>Updated 3 days ago</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Maintainers</span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">Alice</span>
            </div>
            <div className="text-sm">
              <span>12,500 users</span>
              <span className="ml-4">232 influencers</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="danger" size="sm">Work</Button>
            <Button variant="primary" size="sm">Cascade Work</Button>
          </div>

          <p className="text-xs text-purple-300">
            See what maintainers and other people are doing on this project
          </p>
        </div>

        <div className="lg:pl-8">
          <Card className="bg-white text-gray-900 p-6 space-y-4" title='Obtain voting power for "NodeDB Toolkit"'>
            <div>
              <label className="block text-sm font-medium mb-2">Amount</label>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">$1</Button>
                <Button variant="outline" size="sm">$5</Button>
                <Button variant="outline" size="sm">$20</Button>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-2xl font-bold text-blue-500">+100 VP</span>
                <span className="ml-2 text-sm text-gray-500">Sign in to see exact bonus voting</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Tell why you are supporting (optional)
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md text-sm"
                placeholder="Because, I want to support the maintainer for hard work. He is amazing!"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                The good and genuine comment will be used in the highlights and for other people
              </p>
            </div>

            {/* <Button variant="dark" className="w-full">
                Become an Influencer
              </Button> */}
            <p className='text-center'>
              <a href="/influencer/welcome" className="bg-stone-700 hover:bg-stone-900 text-white font-bold py-2 px-4 border border-slate-700 rounded transition-colors">
                Become an Influencer
              </a>
            </p>

            <p className="text-xs text-center text-gray-500">
              Powered by NodePay
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
