import React from 'react'

const Contactus = () => {
  return (
    <div>
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-full mx-auto">
      {/* Flex container for text and image */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-full">
        
        {/* Text and Form Section */}
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-gray-600 mt-4 text-lg">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, 
            our team is ready to answer all your questions.
          </p>

          {/* Contact Details */}
          <div className="mt-6">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Information</h2>
            <p className="text-gray-600 mt-2 text-lg">📞 Phone: +123-456-7890</p>
            <p className="text-gray-600 mt-2 text-lg">✉️ Email: contact@ourcompany.com</p>
            <p className="text-gray-600 mt-2 text-lg">📍 Address: 123 Business St, City, Country</p>
          </div>

          {/* Contact Form */}
          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-gray-700 text-lg" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <img 
          src="https://via.placeholder.com/600x400" // Replace with your image URL
          alt="Contact Us" 
          className="w-full md:w-1/2 h-auto object-cover rounded-lg mt-6 md:mt-0 md:ml-8"
        />
      </div>
    </div>
    </div>
  )
}

export default Contactus
