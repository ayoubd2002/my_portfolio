import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Work Experience
        </motion.h2>
        <motion.p variants={fadeInUp} className="section-subtitle">
          My professional journey
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      className="card"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          <FaBriefcase className="text-primary-600 dark:text-primary-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {exp.period} • {exp.location}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

