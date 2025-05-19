import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div 
      className="glass overflow-hidden rounded-xl h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-start/10 group"
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 glass rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;