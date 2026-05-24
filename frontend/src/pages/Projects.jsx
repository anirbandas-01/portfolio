import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaCode, FaChevronDown, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter(project => project.isFeatured);
  const regularProjects = projects.filter(project => !project.isFeatured);

  const filterProjects = (projectList) => {
    if (activeCategory === 'All Projects') return projectList;
    return projectList.filter(project => project.category === activeCategory);
  };

  const filteredFeatured = filterProjects(featuredProjects);
  const filteredRegular = filterProjects(regularProjects);

  const visibleProjects = showAll ? filteredRegular : filteredRegular.slice(0, 4);
  const hasMoreProjects = filteredRegular.length > 4;

  const getStatusStyle = (status) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700';
      case 'development':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700';
      case 'completed':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-700';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live':
        return '🟢 Live';
      case 'development':
        return '🟡 In Development';
      case 'completed':
        return '🔵 Completed';
      default:
        return status;
    }
  };

  const ProjectCard = ({ project, isFeatured = false }) => (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
        isFeatured ? 'border-2 border-indigo-200 dark:border-indigo-700' : ''
      }`}
      whileHover={{ y: -5 }}
      layout
    >
      {isFeatured && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
          <FaStar className="text-xs" /> Featured
        </div>
      )}

      <div className="relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <FaCode className="text-white text-5xl opacity-30" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-1.5 shadow-lg text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-xs" /> Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-lg text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-xs" /> Code
            </a>
          </div>
        </div>

        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusStyle(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{project.duration}</p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-md text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
          <ul className="space-y-1.5">
            {project.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5">✓</span>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 md:hidden">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-600 dark:bg-indigo-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-center flex items-center justify-center gap-1.5 text-sm"
          >
            <FaExternalLinkAlt className="text-xs" /> Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 dark:bg-gray-700 text-white px-3 py-2 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-center flex items-center justify-center gap-1.5 text-sm"
          >
            <FaGithub className="text-xs" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">My Projects</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my full-stack development work, from healthcare platforms to SaaS applications
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {projectCategories.map((category) => {
            const categoryProjects = category === 'All Projects' 
              ? projects 
              : projects.filter(p => p.category === category);
            
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md'
                }`}
              >
                {category}
                <span className="ml-1.5 text-xs opacity-75">({categoryProjects.length})</span>
              </button>
            );
          })}
        </motion.div>

        {filteredFeatured.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <FaStar className="text-2xl sm:text-3xl text-yellow-500" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <AnimatePresence mode="wait">
                  {filteredFeatured.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} isFeatured={true} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </section>
        )}

        {filteredRegular.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                {filteredFeatured.length > 0 ? 'More Projects' : 'All Projects'}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <AnimatePresence mode="wait">
                  {visibleProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {hasMoreProjects && (
                <motion.div
                  className="text-center mt-10 sm:mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base"
                  >
                    {showAll ? (
                      <>
                        Show Less
                        <FaChevronDown className="transform rotate-180 transition-transform group-hover:translate-y-1" />
                      </>
                    ) : (
                      <>
                        See More Projects ({filteredRegular.length - 4} more)
                        <FaChevronDown className="transition-transform group-hover:translate-y-1" />
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </section>
        )}

        {filteredFeatured.length === 0 && filteredRegular.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 sm:p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Want to see more?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 max-w-2xl mx-auto">
            Visit my GitHub profile to explore more projects, contributions, and open-source work.
          </p>
          <a
            href="https://github.com/anirbandas-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gray-900 dark:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaGithub size={20} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;