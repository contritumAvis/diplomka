// 'use client'

// import React from 'react'

// const SignInForm = () => {
//   return (
//     <form className="flex flex-col gap-4 w-full max-w-[360px]">
//       <input
//         type="email"
//         placeholder="Email"
//         className="p-3 border rounded-md"
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="p-3 border rounded-md"
//         required
//       />
//       <div className="text-right text-sm text-blue-500 hover:underline cursor-pointer">
//         Forgot password?
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//       >
//         Sign In
//       </button>
//     </form>
//   )
// }

// export default SignInForm

'use client'

import React, { useState } from 'react'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    if (res.ok) {
      alert('User registered successfully!')
    } else {
      alert(`Error: ${data.message}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-[360px]"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 border rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 border rounded-md"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
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
