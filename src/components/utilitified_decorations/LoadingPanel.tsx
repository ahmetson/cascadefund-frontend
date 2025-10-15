import React, { useEffect, useState } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import Component from '@/components/utilitified_decorations/Panel'
import type { SectionProps } from '@/types/eventTypes';
import Link from '@/components/Link';

const AuthSuccessCard: React.FC<SectionProps & { gotoLink?: string, gotoLabel?: string }> = ({ gotoLink, gotoLabel, title, children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Set to true after 1000ms (1 second)
    }, 1000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Component className="w-full max-w-md mx-auto">
      <div className="text-center">
        <div className="mb-6">
          <LoadingSpinner />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h1>

        {children}

        <p className="text-sm text-gray-500">
          You will be redirected to the CascadeFund alpha version shortly
        </p>
        <p>
          {
            showButton &&
            <Link href={gotoLink!} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{gotoLabel}</Link>
          }
        </p>
      </div>
    </Component>
  )
}

export default AuthSuccessCard
