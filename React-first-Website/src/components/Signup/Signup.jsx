import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-purple-100 ">
      {/* Card for Signup Form */}
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full mx-4 my-8">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img 
            src="https://via.placeholder.com/100" // Replace with your logo
            alt="Logo"
            className="w-20 h-20 mx-auto"
          />
          <h1 className="text-4xl font-bold text-gray-800 mt-4">Create Account</h1>
          <p className="text-gray-600 mt-2">Join us and start your journey!</p>
        </div>

        {/* Signup Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Options */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Already have an account?  
          <Link to="/login" className='text-purple-600' > Log in</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
