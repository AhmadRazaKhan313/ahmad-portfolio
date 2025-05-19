import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';
import NavLink from './NavLink';

interface HeaderProps {
  scrolledPast: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolledPast }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolledPast ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 md:py-5 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2 text-xl font-semibold">
          <Code className="w-6 h-6 text-accent" />
          <span className="gradient-text-primary">Ahmad Raza</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden glass fixed inset-0 z-40 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col space-y-6 p-8">
            <NavLink href="#about" label="About" onClick={closeMenu} />
            <NavLink href="#skills" label="Skills" onClick={closeMenu} />
            <NavLink href="#projects" label="Projects" onClick={closeMenu} />
            <NavLink href="#contact" label="Contact" onClick={closeMenu} />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;