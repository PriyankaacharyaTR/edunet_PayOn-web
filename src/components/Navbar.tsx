import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import AuthButton from './AuthButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { user } = useAuth0();

  return (
    <nav className="bg-[#1a237e] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8" />
              <span className="font-bold text-xl">PayEase</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            <div className="flex items-center space-x-4">
              {user && <span className="text-sm">Welcome, {user.name}</span>}
              <AuthButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;