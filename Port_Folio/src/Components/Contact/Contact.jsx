import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Contact Me</h2>
          <div className="w-full my-4 border-t border-gray-400" />
          <form action="https://formsubmit.co/YOUR_EMAIL" method="POST" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col"
            >
              <label htmlFor="name" className="text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col"
            >
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 rounded border focus:outline-none focus:border-blue-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col"
            >
              <label htmlFor="message" className="text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="p-2 rounded border focus:outline-none focus:border-blue-400"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-600"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white shadow-lg min-h-[31rem] rounded-lg w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Get In Touch</h2>
          <div className="w-full my-4 border-t border-gray-400" />
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Email:</strong> example@example.com
            </p>
            <p>
              <strong>Address:</strong> 123 Your Street, Your City, Your Country
            </p>
            <p>
              <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">linkedin.com/in/yourprofile</a>
            </p>
            <p>
              <strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-500">github.com/yourusername</a>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
