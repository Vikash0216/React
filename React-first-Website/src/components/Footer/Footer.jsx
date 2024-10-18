import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
     <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm">
              We are committed to providing the best services and products to help you achieve your goals. Our team is dedicated to ensuring customer satisfaction.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className='flex gap-8 text-white'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/services"><li>Services</li></NavLink>
                <NavLink to="/contactus"><li>Contact</li></NavLink>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Subscribe</h2>
            <p className="text-sm mb-4">
              Stay updated with our latest news and offerings. Subscribe to our newsletter.
            </p>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  className="w-full p-2 rounded-l bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none"
                  placeholder="Your email"
                />
                <button className="p-2 bg-indigo-600 text-white rounded-r hover:bg-indigo-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
