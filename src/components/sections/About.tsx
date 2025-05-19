import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto container-padding">
        <SectionHeading title="About Me" subtitle="My journey & background" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text-primary">Who am I?</h3>
                <p className="text-text-secondary mb-4">
                  I'm a passionate Frontend Developer with over 5 years of experience in creating 
                  exceptional user experiences. I specialize in modern JavaScript frameworks like 
                  React, Vue, and Angular, and I'm always eager to learn new technologies.
                </p>
                <p className="text-text-secondary">
                  With a strong foundation in UI/UX design principles and a keen eye for detail, 
                  I build responsive, accessible, and performant web applications that deliver real value 
                  to users and businesses alike. My approach combines technical excellence with creative 
                  problem-solving to bring ideas to life.
                </p>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <Card className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 glass rounded-lg mr-4">
                      <Briefcase className="w-6 h-6 text-primary-start" />
                    </div>
                    <h3 className="text-xl font-semibold">Experience</h3>
                  </div>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-medium">Senior Frontend Developer</h4>
                      <p className="text-sm text-text-secondary">TechCorp Inc. • 2021 - Present</p>
                    </li>
                    <li>
                      <h4 className="font-medium">UI Developer</h4>
                      <p className="text-sm text-text-secondary">WebSolutions • 2018 - 2021</p>
                    </li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 glass rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6 text-secondary-start" />
                    </div>
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-medium">MSc in Computer Science</h4>
                      <p className="text-sm text-text-secondary">Tech University • 2016 - 2018</p>
                    </li>
                    <li>
                      <h4 className="font-medium">BSc in Software Engineering</h4>
                      <p className="text-sm text-text-secondary">State University • 2012 - 2016</p>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 glass rounded-lg mr-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Achievements</h3>
                </div>
                
                <ul className="space-y-6">
                  <li className="border-l-2 border-primary-start pl-4 py-2">
                    <h4 className="font-medium">Best Frontend Project</h4>
                    <p className="text-sm text-text-secondary">WebTech Awards • 2022</p>
                  </li>
                  <li className="border-l-2 border-primary-end pl-4 py-2">
                    <h4 className="font-medium">JavaScript Certification</h4>
                    <p className="text-sm text-text-secondary">Advanced JS • 2021</p>
                  </li>
                  <li className="border-l-2 border-secondary-start pl-4 py-2">
                    <h4 className="font-medium">UI/UX Excellence Award</h4>
                    <p className="text-sm text-text-secondary">Design Summit • 2020</p>
                  </li>
                  <li className="border-l-2 border-secondary-end pl-4 py-2">
                    <h4 className="font-medium">React Conference Speaker</h4>
                    <p className="text-sm text-text-secondary">ReactCon • 2019</p>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Personal Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cycling", "Photography", "Reading", "Traveling", "Chess"].map((interest, index) => (
                      <span key={index} className="px-3 py-1 text-sm glass rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;