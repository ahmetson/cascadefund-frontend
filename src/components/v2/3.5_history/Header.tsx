import React from 'react';

interface HeaderProps {
  user: {
    name: string;
    avatar: string;
    points: number;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cascade-blue rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Reflect
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Projects</span>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">2</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-8 h-8 rounded-full"
              referrerpolicy="no-referrer"
            />
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500 text-sm font-medium">{user.points}</span>
              <span className="text-gray-500 text-sm">{user.name}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
