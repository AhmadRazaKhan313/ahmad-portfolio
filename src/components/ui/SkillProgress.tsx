import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  skill: string;
  level: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-text-secondary">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-start to-primary-end rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;