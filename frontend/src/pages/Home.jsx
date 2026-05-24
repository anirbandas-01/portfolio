import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                {personalInfo.title}
              </p>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
                {personalInfo.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {personalInfo.summary}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-indigo-600 dark:bg-indigo-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </motion.div>

            {/* Profile Image Placeholder */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-purple-700 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl lg:text-8xl mb-4">👨‍💻</div>
                  <p className="text-lg lg:text-xl font-semibold">Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Overview - COMPACT VERSION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Languages - COMPACT */}
            <motion.div
              className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-lg font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-white/95 text-blue-900 px-2.5 py-1 rounded-md text-xs font-semibold">JavaScript</span>
                <span className="bg-white/95 text-blue-900 px-2.5 py-1 rounded-md text-xs font-semibold">Java</span>
                <span className="bg-white/95 text-blue-900 px-2.5 py-1 rounded-md text-xs font-semibold">SQL</span>
              </div>
            </motion.div>

            {/* Frontend - COMPACT */}
            <motion.div
              className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-xl">🎨</span>
                </div>
                <h3 className="text-lg font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-white/95 text-purple-900 px-2.5 py-1 rounded-md text-xs font-semibold">React.js</span>
                <span className="bg-white/95 text-purple-900 px-2.5 py-1 rounded-md text-xs font-semibold">HTML5</span>
                <span className="bg-white/95 text-purple-900 px-2.5 py-1 rounded-md text-xs font-semibold">CSS3</span>
                <span className="bg-white/95 text-purple-900 px-2.5 py-1 rounded-md text-xs font-semibold">Tailwind</span>
              </div>
            </motion.div>

            {/* Backend - COMPACT */}
            <motion.div
              className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-white/95 text-green-900 px-2.5 py-1 rounded-md text-xs font-semibold">Node.js</span>
                <span className="bg-white/95 text-green-900 px-2.5 py-1 rounded-md text-xs font-semibold">Express.js</span>
                <span className="bg-white/95 text-green-900 px-2.5 py-1 rounded-md text-xs font-semibold">REST APIs</span>
                <span className="bg-white/95 text-green-900 px-2.5 py-1 rounded-md text-xs font-semibold">JWT</span>
              </div>
            </motion.div>

            {/* Databases - COMPACT */}
            <motion.div
              className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-xl">🗄️</span>
                </div>
                <h3 className="text-lg font-bold text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-white/95 text-orange-900 px-2.5 py-1 rounded-md text-xs font-semibold">MongoDB</span>
                <span className="bg-white/95 text-orange-900 px-2.5 py-1 rounded-md text-xs font-semibold">PostgreSQL</span>
                <span className="bg-white/95 text-orange-900 px-2.5 py-1 rounded-md text-xs font-semibold">MySQL</span>
              </div>
            </motion.div>

            {/* Tools - COMPACT */}
            <motion.div
              className="bg-gradient-to-br from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-xl">🛠️</span>
                </div>
                <h3 className="text-lg font-bold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-white/95 text-pink-900 px-2.5 py-1 rounded-md text-xs font-semibold">Git</span>
                <span className="bg-white/95 text-pink-900 px-2.5 py-1 rounded-md text-xs font-semibold">Docker</span>
                <span className="bg-white/95 text-pink-900 px-2.5 py-1 rounded-md text-xs font-semibold">Vercel</span>
                <span className="bg-white/95 text-pink-900 px-2.5 py-1 rounded-md text-xs font-semibold">OpenAI API</span>
              </div>
            </motion.div>

            {/* Core CS - COMPACT */}
            <motion.div
              className="bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 p-4 sm:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-bold text-white">Core CS</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-white/95 text-indigo-900 px-2.5 py-1 rounded-md text-xs font-semibold">DSA</span>
                <span className="bg-white/95 text-indigo-900 px-2.5 py-1 rounded-md text-xs font-semibold">OOPS</span>
                <span className="bg-white/95 text-indigo-900 px-2.5 py-1 rounded-md text-xs font-semibold">OS</span>
                <span className="bg-white/95 text-indigo-900 px-2.5 py-1 rounded-md text-xs font-semibold">Networks</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;