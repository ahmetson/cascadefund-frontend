import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import Card from './Card'

const AuthSuccessCard: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
        const timer = setTimeout(() => {
          setShowButton(true); // Set to true after 1000ms (1 second)
        }, 1000);

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="text-center">
        <div className="mb-6">
          <LoadingSpinner />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Authentication
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Successful
        </h2>
        
        <p className="text-lg font-medium text-gray-700 mb-4">
          Please wait for automatic redirection
        </p>
        
        <p className="text-sm text-gray-500">
          You will be redirected to the CascadeFund alpha version shortly
        </p>
        <p>
          {
            showButton && 
            <a href="/v2/login/getting-started" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Getting Started</a>
          }
        </p>
      </div>
    </Card>
  )
}

export default AuthSuccessCard
