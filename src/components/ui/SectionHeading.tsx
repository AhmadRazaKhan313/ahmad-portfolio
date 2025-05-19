import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <motion.span 
        className="inline-block text-sm font-medium text-text-secondary uppercase tracking-wider mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.span>
      
      <motion.h2 
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
        <span className="text-accent">.</span>
      </motion.h2>
      
      <motion.div 
        className="h-1 w-20 bg-gradient-to-r from-primary-start to-primary-end rounded-full mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>
    </div>
  );
};

export default SectionHeading;