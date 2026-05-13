import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, skills } from '../data/portfolioData';

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
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-indigo-600">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-500 mb-8">
                {personalInfo.subtitle}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {personalInfo.summary}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-200 font-medium"
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
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </motion.div>

            {/* Profile Image Placeholder */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold">Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

{/* Skills Overview */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      className="text-3xl font-bold text-center mb-12 text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Tech Stack
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Languages */}
      <motion.div
        className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">💻</span>
          </div>
          <h3 className="text-xl font-bold text-white">Languages</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/95 text-blue-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className="w-4 h-4" />
            JavaScript
          </span>
          <span className="bg-white/95 text-blue-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" className="w-4 h-4" />
            Java
          </span>
          <span className="bg-white/95 text-blue-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" className="w-4 h-4" />
            SQL
          </span>
        </div>
      </motion.div>

      {/* Frontend */}
      <motion.div
        className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-bold text-white">Frontend</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/95 text-purple-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="w-4 h-4" />
            React.js
          </span>
          <span className="bg-white/95 text-purple-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" className="w-4 h-4" />
            HTML5
          </span>
          <span className="bg-white/95 text-purple-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" className="w-4 h-4" />
            CSS3
          </span>
          <span className="bg-white/95 text-purple-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="" className="w-4 h-4" />
            Tailwind CSS
          </span>
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div
        className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">⚙️</span>
          </div>
          <h3 className="text-xl font-bold text-white">Backend</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/95 text-green-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" className="w-4 h-4" />
            Node.js
          </span>
          <span className="bg-white/95 text-green-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" className="w-4 h-4" />
            Express.js
          </span>
          <span className="bg-white/95 text-green-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="" className="w-4 h-4" />
            PHP
          </span>
          <span className="bg-white/95 text-green-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><text x="2" y="18" fontSize="16" fontWeight="bold" fill="currentColor">API</text></svg>
            REST APIs
          </span>
          <span className="bg-white/95 text-green-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><text x="0" y="18" fontSize="18" fontWeight="bold" fill="currentColor">🔐</text></svg>
            JWT Auth
          </span>
        </div>
      </motion.div>

      {/* Databases */}
      <motion.div
        className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">🗄️</span>
          </div>
          <h3 className="text-xl font-bold text-white">Databases</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/95 text-orange-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" className="w-4 h-4" />
            MongoDB
          </span>
          <span className="bg-white/95 text-orange-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="" className="w-4 h-4" />
            PostgreSQL
          </span>
          <span className="bg-white/95 text-orange-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" className="w-4 h-4" />
            MySQL
          </span>
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">🛠️</span>
          </div>
          <h3 className="text-xl font-bold text-white">Tools</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/95 text-pink-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" className="w-4 h-4" />
            Git
          </span>
          <span className="bg-white/95 text-pink-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="" className="w-4 h-4" />
            Docker
          </span>
          <span className="bg-white/95 text-pink-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="" className="w-4 h-4" />
            socket.io
          </span>
          <span className="bg-white/95 text-pink-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><text x="3" y="18" fontSize="16" fontWeight="bold" fill="currentColor">V</text></svg>
            Vercel
          </span>
          <span className="bg-white/95 text-pink-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><text x="3" y="18" fontSize="16" fontWeight="bold" fill="currentColor">R</text></svg>
            Render
          </span>
          <span className="bg-white/95 text-pink-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-3.97 5.53l-1.06-1.06a7.94 7.94 0 000-8.94l1.06-1.06c3.12 3.12 3.12 8.19 0 11.31z"/></svg>
            OpenAI API
          </span>
        </div>
      </motion.div>

      {/* Core CS */}
      <motion.div
        className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-xl font-bold text-white">Core CS</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/95 text-indigo-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <span className="text-base">🌲</span>
            Data Structures
          </span>
          <span className="bg-white/95 text-indigo-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <span className="text-base">🔷</span>
            OOPS
          </span>
          <span className="bg-white/95 text-indigo-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <span className="text-base">💾</span>
            Operating System
          </span>
          <span className="bg-white/95 text-indigo-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
            <span className="text-base">🌐</span>
            Networking
          </span>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;