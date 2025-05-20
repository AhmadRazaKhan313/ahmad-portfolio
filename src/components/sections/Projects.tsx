import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { ExternalLink } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Water Logic',
    description: 'Australias leader in water dispensers & coolers for workplaces',
    image: "https://www.waterlogicaustralia.com.au/fileadmin/_processed_/2/5/csm_workplace_meeting_banner_d4f1910592.jpg",
    technologies: ['React', 'Redux'],
    link: 'https://www.waterlogicaustralia.com.au/',
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Safety Team',
    description: 'A Fully Automated Solution for OSHA Workplace Safety Training',
    image: 'https://oursafetyteam.com/_next/image?url=%2Fimages%2Fcalendar2.jpg&w=1920&q=75',
    technologies: ['React,js', 'Redux'],
    link: '#',
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Smart Home IOT',
    description: 'An analytics dashboard for healthcare providers with data visualization and patient management.',
    image: 'https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Angular', 'TypeScript', 'D3.js'],
    link: '#',
    category: 'frontend',
  },
  {
    id: 4,
    title: 'Safety Team mobile App',
    description: 'Since we started using the app, everything changed',
    image: 'https://oursafetyteam.com/_next/image?url=%2Fimages%2Fscreenshot-2.png&w=640&q=75',
    technologies: ['React Native', 'Jango', 'AWS'],
    link: 'https://oursafetyteam.com/',
    category: 'mobile',
  },
  {
    id: 5,
    title: 'Educational Platform',
    description: 'An online learning platform with course creation, progress tracking, and interactive quizzes.',
    image: 'https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'Travel Companion App',
    description: 'A travel planner with itinerary management, location bookmarking, and offline capabilities.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'Redux', 'Firebase'],
    link: '#',
    category: 'mobile',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto container-padding">
        <SectionHeading title="My Projects" subtitle="Recent work I've completed" />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-start to-primary-end text-white'
                  : 'glass hover:bg-white/20'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-text-secondary py-16"
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
        
        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent font-medium hover:underline"
            whileHover={{ x: 5 }}
          >
            View more projects on GitHub
            <ExternalLink className="ml-2 w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;