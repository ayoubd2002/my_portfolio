import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { social } = portfolioData;

  const socialLinks = [
    { icon: FaGithub, url: social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, url: social.twitter, label: 'Twitter' },
    { icon: FaEnvelope, url: social.email, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

