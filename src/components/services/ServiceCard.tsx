import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import ServiceOptions from './ServiceOptions';

interface ServiceOption {
  id: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  options?: ServiceOption[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    if (options) {
      setShowOptions(true);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#1a237e] p-4 rounded-full mb-4">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>

      {options && (
        <ServiceOptions
          isOpen={showOptions}
          onClose={() => setShowOptions(false)}
          options={options}
          title={title}
        />
      )}
    </>
  );
};

export default ServiceCard;