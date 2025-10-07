import React from 'react';
import LinkBtn from '../LinkBtn'

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Influencer Work' }) => {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">Main Menu</h3>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="text-blue-600" defaultChecked />
              <span className="text-sm text-gray-700">Maintainer Menu (todo expand)</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-100 p-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-sm">Influence history</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">Collaboration Menu</h3>
          <div className="flex items-center space-x-2 p-4">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <LinkBtn label={activeItem} href='/v2/influencer/work' variant='blue' />
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">1</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
