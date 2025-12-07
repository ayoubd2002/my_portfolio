import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

const Hero = () => {
  const { personal, social } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInLeft}
            className="text-center md:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 mb-6 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
            >
              👋 Welcome to my portfolio
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
            >
              {personal.role}
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              {personal.description}
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInRight}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

