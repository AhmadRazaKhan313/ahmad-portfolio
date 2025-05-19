import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Code2, Layers, Palette, Smartphone } from 'lucide-react';
import SkillProgress from '../ui/SkillProgress';

// Skill categories and their respective skills
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Next.js', level: 50 },
      { name: 'Angular', level: 25 },
    ],
  },
  {
    id: 'ui',
    title: 'UI Frameworks',
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material UI', level: 90 },
      { name: 'Bootstrap', level: 88 },
      { name: 'Styled Components', level: 85 },
      { name: 'SASS/SCSS', level: 92 },
    ],
  },
  {
    id: 'design',
    title: 'Design & Tools',
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Webflow', level: 80 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'Webpack/Vite', level: 88 },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Progressive Web Apps', level: 90 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Mobile UX Principles', level: 88 },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const activeSkills = skillCategories.find(category => category.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding bg-background/50" ref={ref}>
      <div className="container mx-auto container-padding">
        <SectionHeading title="My Skills" subtitle="Technologies I work with" />
        
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'glass border border-white/30'
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveCategory(category.id)}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`p-3 glass rounded-full mb-3 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-start to-primary-end'
                    : 'bg-white/10'
                }`}>
                  {category.icon}
                </div>
                <span className="text-sm font-medium">{category.title}</span>
              </motion.button>
            ))}
          </div>
          
          <Card className="p-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {activeSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <SkillProgress skill={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;