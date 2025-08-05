// /app/(auth)/page.tsx или /auth/page.tsx — зависит от структуры Next.js 14 App Router

'use client'

import { useState } from 'react'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin')

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[424px] p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl">
        {/* Tabs */}
        <div className="flex justify-center mb-6 h-[60px]">
          <button
            onClick={() => setActiveTab('signin')}
            className={`w-1/2 text-center text-[20px] font-semibold leading-[28px] ${
              activeTab === 'signin' ? 'text-black dark:text-white' : 'text-zinc-400'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`w-1/2 text-center text-[20px] font-semibold leading-[28px] ${
              activeTab === 'signup' ? 'text-black dark:text-white' : 'text-zinc-400'
            }`}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'signin' ? <SignInForm /> : <SignUpForm />}
      </div>
    </section>
  )
}
