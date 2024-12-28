import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Key } from 'lucide-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-[#1a237e]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a237e] mb-2">Welcome to PayEase</h1>
          <p className="text-gray-600">Your trusted digital payment platform</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => loginWithRedirect()}
            className="w-full bg-[#1a237e] text-white px-4 py-3 rounded-lg hover:bg-[#283593] transition-colors flex items-center justify-center space-x-2"
          >
            <Key className="h-5 w-5" />
            <span>Login to Continue</span>
          </button>

          <p className="text-sm text-gray-500 text-center">
            By continuing, you agree to PayEase's Terms of Service and Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;