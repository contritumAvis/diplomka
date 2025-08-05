
'use client'

import React from 'react'

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full max-w-[360px]">
      <input
        type="text"
        placeholder="Name"
        className="p-3 border rounded-md"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 border rounded-md"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 border rounded-md"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Sign Up
      </button>
    </form>
  )
}

export default SignUpForm
