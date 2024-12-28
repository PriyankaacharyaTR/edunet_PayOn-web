import React from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, onClick }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      onClick();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <Icon className="h-12 w-12 text-[#1a237e] mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;