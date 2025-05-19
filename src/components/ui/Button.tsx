import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium transition-all duration-300 focus:outline-none";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-primary-start to-primary-end text-white hover:shadow-lg hover:shadow-primary-start/20",
    secondary: "bg-gradient-to-r from-secondary-start to-secondary-end text-white hover:shadow-lg hover:shadow-secondary-start/20",
    outline: "gradient-border bg-transparent hover:bg-white/5"
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  };
  
  if (href) {
    return (
      <motion.a 
        href={href}
        className={buttonStyles}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={buttonStyles}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;