import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, skillList }) => (
    <motion.div variants={staggerItem} className="card">
      <h3 className="text-2xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400">
        {title}
      </h3>
      <div className="space-y-4">
        {skillList.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <span className="text-2xl">{skill.icon}</span>
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Skills & Technologies
        </motion.h2>
        <motion.p variants={fadeInUp} className="section-subtitle">
          Technologies I work with
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory title="Mobile Development" skillList={skills.mobile} />
          <SkillCategory title="Backend Development" skillList={skills.backend} />
          <SkillCategory title="Tools & Technologies" skillList={skills.tools} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

