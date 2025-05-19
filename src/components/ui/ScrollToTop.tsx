import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 glass rounded-full shadow-lg z-40 hover:bg-white/20 transition-colors"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

export default ScrollToTop;