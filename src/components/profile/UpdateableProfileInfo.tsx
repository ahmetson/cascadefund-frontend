import React from 'react'
import BasePanel from '@/components/panel/BasePanel'
import LinkBtn from '@/components/LinkBtn'
import Link from '@/components/Link'
import type { PanelEvents } from '@/types/eventTypes'
import Button from '@/components/Button'

const ProfileCard: React.FC<PanelEvents> = ({ onActionClick }) => {
  return (
    <>
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src="https://dummyimage.com/80x80/4A5568/ffffff?text=User"
            alt="Ahmetson"
            className="w-20 h-20 rounded-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-gray-200 rounded px-3 py-2 mb-2">
            <h2 className="text-xl font-semibold text-gray-800">Ahmetson</h2>
          </div>

          <p className="text-gray-600 text-sm mb-2">Full Stack Developer & Open Source Enthusiast</p>
          <p className="text-gray-500 text-xs mb-4">San Francisco, CA</p>

          <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
            <span>Github since 2018, CascadeFund member since January 2022</span>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            Passionate about building scalable web applications and contributing to open source projects. Specialized in JavaScript ecosystems and distributed systems. Always looking for challenging problems to solve and new technologies to explore.
          </p>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span>linkedin.com/in/ahmetson</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <input type="checkbox" id="financial-status" className="rounded" />
            <label htmlFor="financial-status" className="text-sm text-gray-600">Public Financial Status</label>
          </div>
        </div>

        <div className="text-right">
          <div className="mb-2">
            <span className="text-sm text-gray-500">Rating:</span>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500 font-semibold">220</span>
              <span className="text-green-500 text-xs">+24</span>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-xs text-gray-500">Voting Power</span>
            <div className="flex items-center space-x-1">
              <span className="text-red-500">♥</span>
              <span className="text-sm">23</span>
            </div>
          </div>

          <Button variant="blue" onClick={onActionClick} >Save Changes</Button>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t">
        <LinkBtn variant="orange" label="Log out" href="/" />
        <Link className="ml-4 text-sm text-blue-600 cursor-pointer" href='/data/projects'>
          View All Projects
        </Link>
        <div className="inline-flex ml-2 space-x-1">
          <div className="w-6 h-6 bg-red-500 text-center text-white rounded-full">2</div>
          <div className="w-6 h-6 bg-blue-500 text-center text-white rounded-full">0</div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
