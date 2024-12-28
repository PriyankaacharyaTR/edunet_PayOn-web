import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader2 } from 'lucide-react';

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button className="bg-white text-[#1a237e] px-4 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center">
        <Loader2 className="animate-spin h-5 w-5" />
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="bg-white text-[#1a237e] px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-white text-[#1a237e] px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
    >
      Login
    </button>
  );
};

export default AuthButton;