import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Twitter, ArrowDownCircle } from 'lucide-react';
import Button from '../ui/Button';
import profile from '../../assets/images/Ahmad_bg.png'

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-start/20 to-primary-end/20 rounded-full filter blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-start/20 to-secondary-end/20 rounded-full filter blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <motion.span 
                className="inline-block px-4 py-2 text-sm font-medium glass rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                👋 Welcome to my portfolio
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="gradient-text-primary">Ahmad Raza</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-secondary">
                Frontend Developer
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-lg mb-8">
                I create beautiful, responsive websites with modern technologies and frameworks. Let's bring your vision to life.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                href="#contact" 
                variant="primary"
              >
                Get in Touch
              </Button>
              <Button 
                href="#projects" 
                variant="outline"
              >
                View My Work
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                <GitHub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-md">
              <div className="absolute inset-0 glass rounded-full overflow-hidden border border-white/20 shadow-xl">
                <img 
                  src={profile}
                  alt="Ahmad Raza" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="w-8 h-8 text-text-secondary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;