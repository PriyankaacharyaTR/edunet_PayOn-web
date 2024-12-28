import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceOption {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface ServiceOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  options: ServiceOption[];
  title: string;
}

const ServiceOptions: React.FC<ServiceOptionsProps> = ({ isOpen, onClose, options, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1a237e]">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {options.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceOptions;