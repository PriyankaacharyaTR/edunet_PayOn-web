import React from 'react';
import { Shield, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1a237e] mb-4">About PayEase</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          PayEase is your trusted partner for all digital payments and financial services. 
          We're committed to making financial transactions simple, secure, and accessible to everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Shield className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-600">
            Bank-grade security with end-to-end encryption for all your transactions
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Zap className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">
            Lightning-fast transactions with instant confirmations
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Users className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted</h3>
          <p className="text-gray-600">
            Trusted by millions of users for their daily financial needs
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At PayEase, our mission is to revolutionize the way people handle their financial transactions. 
          We believe in creating a seamless, integrated platform that makes managing money easier than ever before.
        </p>
        <p className="text-gray-600">
          We're building the future of digital payments, where every transaction is secure, 
          every payment is instant, and every financial service is just a tap away.
        </p>
      </div>

      <div className="bg-[#1a237e] text-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Our Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10M+</div>
            <div>Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1B+</div>
            <div>Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div>Partner Banks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;