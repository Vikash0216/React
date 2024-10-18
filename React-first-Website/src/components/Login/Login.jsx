import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-purple-100">
      {/* Card for Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img 
            src="https://via.placeholder.com/100" // Replace with your logo
            alt="Logo"
            className="w-24 h-24 mx-auto"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome Back!</h1>
          <p className="text-gray-600 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          
          {/* Password Input */}
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-purple-600"/>
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Additional Options */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?  
          <Link to="/signup" className='text-purple-600'> Sign up</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
