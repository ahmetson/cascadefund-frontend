import React from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import LinkBtn from '../../LinkBtn'
import Link from '../../Link'

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex space-x-2">
        <Button variant="primary" size="sm" className="flex-1 inline">Messages</Button>
        <Link className="flex-1" label="People" href="/v2/issue/people" />
      </div>

      <Card>
        <h3 className="text-sm font-medium text-gray-900 mb-3">ISSUE DETAILS</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <Badge variant="success">Open</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Created:</span>
            <span className="text-gray-900">3 days ago</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Updated:</span>
            <span className="text-gray-900">Today</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Assignee:</span>
            <div className="flex items-center space-x-2">
              <img 
                src="https://dummyimage.com/20x20/4A90E2/ffffff?text=E" 
                alt="Emily W." 
                className="w-5 h-5 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="text-gray-900">Emily W.</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Likes</span>
            <div className="flex items-center space-x-2">
              <span className="text-red-500">23</span>
              <Button variant="danger" size="sm">Follow</Button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tags:</span>
            <div className="flex space-x-1">
              <Badge variant="warning">Suggested</Badge>
              <Badge variant="danger">Bug</Badge>
            </div>
          </div>
        </div>
        <LinkBtn variant="blue" href="/v2/issue/update" className="w-full mt-4" label="Edit" />
      </Card>

      <Card>
        <div className="space-y-4">
          <a href="/v2/issue/chatbox2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">OAuth Integration Discussion</h3>
          <p className="text-sm text-gray-600 mb-4">Sarah: Let's discuss the implementation approach</p>
          </a>
        
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Project Timeline</h4>
            <p className="text-xs text-gray-600">Alex: Updated the milestone dates</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Budget Planning</h4>
            <p className="text-xs text-gray-600">Michael: Q3 estimates attached</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Team Meeting Notes</h4>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">Emily: Action items from yesterday</p>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <LinkBtn variant="blue" className="w-full mt-4" href="/v2/issue/topic" label="Add new chat" />
      </Card>

      <Card>
        <h3 className="text-sm font-medium text-gray-900 mb-3">RELATED ISSUES</h3>
        <div className="space-y-3">
          <div>
            <a href="#" className="text-sm text-cascade-blue hover:underline">"Blog Site"</a>
            <h4 className="text-sm font-medium text-gray-900">User Session Management</h4>
            <p className="text-xs text-gray-600">Feature • Authentication Module</p>
          </div>
          
          <div>
            <a href="#" className="text-sm text-cascade-blue hover:underline">"Blog Site"</a>
            <h4 className="text-sm font-medium text-gray-900">Password Reset Flow</h4>
            <p className="text-xs text-gray-600">Bug • Authentication Module</p>
          </div>
          
          <div>
            <a href="#" className="text-sm text-cascade-blue hover:underline">"Blog Site"</a>
            <h4 className="text-sm font-medium text-gray-900">2FA Implementation</h4>
            <p className="text-xs text-gray-600">Feature • Authentication Module</p>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-medium text-gray-900 mb-3">ACTIVITY</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <div className="text-xs">
              <p className="text-gray-900">Sarah Johnson commented on this issue</p>
              <p className="text-gray-500">Today at 9:22 AM</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <div className="text-xs">
              <p className="text-gray-900">Michael Chen added David Rodriguez to this issue</p>
              <p className="text-gray-500">Yesterday at 1:15 PM</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div className="text-xs">
              <p className="text-gray-900">Emily Wong added tags to this issue</p>
              <p className="text-gray-500">3 days ago</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Sidebar
