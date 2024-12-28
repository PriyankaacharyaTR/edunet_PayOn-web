import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1a237e] mb-4">Contact Us</h1>
        <p className="text-gray-600">We're here to help and answer any question you might have</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Mail className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">support@payease.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Phone className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">1-800-PAY-EASE</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <MapPin className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-600">123 Payment Street<br />Financial District<br />New York, NY 10004</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#1a237e] text-white px-6 py-2 rounded-lg hover:bg-[#283593] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;