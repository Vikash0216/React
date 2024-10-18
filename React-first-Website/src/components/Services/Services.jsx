import React from 'react'

const Services = () => {
  return (
    <div>
    <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-full mx-auto">
      {/* Flex container for text and image */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-full">
        
        {/* Text Section */}
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Services</h1>
          <p className="text-gray-600 mt-4 text-lg">
            We are dedicated to offering comprehensive services that elevate your business. 
            Whether you are looking for consultation, implementation, or continuous support, 
            we are here to help you achieve your goals.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mt-6">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2 text-lg">
            With our experienced team and cutting-edge solutions, you can trust us to deliver 
            the results you need. Our commitment to excellence and customer satisfaction sets us apart.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mt-6">Our Key Services</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 text-lg">
            <li>Business Consultation and Strategy</li>
            <li>Technology Implementation and Support</li>
            <li>Custom Software Development</li>
            <li>Continuous Performance Monitoring</li>
          </ul>
        </div>

        {/* Image Section */}
        <img 
          src="https://via.placeholder.com/600x400" // Replace with your image URL
          alt="Service" 
          className="w-full md:w-1/2 h-auto object-cover rounded-lg mt-6 md:mt-0 md:ml-8"
        />
      </div>
    </div>
    </div>
  )
}

export default Services
