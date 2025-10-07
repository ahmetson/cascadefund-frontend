import React from 'react'
import Card from './Card'
import Link from './Link'
import LinkBtn from "../LinkBtn"

const SignInCard: React.FC = () => {
  return (
    <Card className="bg-cyan-50 border-cyan-100">
      <div className="text-center space-y-6">
        {/* <Button
          variant="dark"
          size="lg"
          className="w-full max-w-sm mx-auto"
          onClick={() => console.log('Sign in with GitHub')}
        >
          Sign in with GitHub
        </Button> */}
        <LinkBtn href="/v2/login/callback" variant="blue" label="Sign in with GitHub" />
        <p className="text-sm text-gray-600 mt-3">
          By signing in, you agree to our{' '}
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
        </p>
      </div>
    </Card>
  )
}

export default SignInCard
