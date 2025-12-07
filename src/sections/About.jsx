import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  const { personal, skills } = portfolioData;

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          About Me
        </motion.h2>
        <motion.p variants={fadeInUp} className="section-subtitle">
          Get to know me better
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personal.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              {['Cross-Platform Development', 'API Design', 'Performance Optimization', 'Clean Architecture'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Key Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold mb-2 capitalize text-primary-600 dark:text-primary-400">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.slice(0, 4).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                      >
                        {skill.icon} {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

