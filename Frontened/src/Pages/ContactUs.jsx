import React, { useState } from 'react';
import HomeLayouts from '@/Layouts/HomeLayouts';
import { BsTelephone, BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <HomeLayouts>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 max-w-4xl w-full mx-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-teal-400">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-400 mb-6">
                If you have any questions or inquiries, feel free to contact us using the form or the contact information below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BsTelephone className="text-teal-500 mr-3" />
                  <span>+123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <BsEnvelope className="text-teal-500 mr-3" />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center">
                  <BsGeoAlt className="text-teal-500 mr-3" />
                  <span>123 Main St, Anytown, USA</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-teal-500 hover:text-teal-400"><FaFacebookF /></a>
                <a href="#" className="text-teal-500 hover:text-teal-400"><FaTwitter /></a>
                <a href="#" className="text-teal-500 hover:text-teal-400"><FaInstagram /></a>
                <a href="#" className="text-teal-500 hover:text-teal-400"><FaLinkedinIn /></a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-700 rounded-lg shadow-sm p-3 bg-gray-800 text-gray-300"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-700 rounded-lg shadow-sm p-3 bg-gray-800 text-gray-300"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full border border-gray-700 rounded-lg shadow-sm p-3 bg-gray-800 text-gray-300"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="mt-4 bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-colors duration-300 w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
}

export default Contact;
