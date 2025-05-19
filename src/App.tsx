import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledPast = window.scrollY > 50;
      setScrolledPast(isScrolledPast);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrolledPast={scrolledPast} />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {scrolledPast && <ScrollToTop />}
      </AnimatePresence>
    </div>
  );
}

export default App;