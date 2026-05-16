import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaCode, FaChevronDown, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [showAll, setShowAll] = useState(false);

  // Separate featured and regular projects
  const featuredProjects = projects.filter(project => project.isFeatured);
  const regularProjects = projects.filter(project => !project.isFeatured);

  // Filter projects by category
  const filterProjects = (projectList) => {
    if (activeCategory === 'All Projects') return projectList;
    return projectList.filter(project => project.category === activeCategory);
  };

  // Get filtered projects
  const filteredFeatured = filterProjects(featuredProjects);
  const filteredRegular = filterProjects(regularProjects);

  // Show 4 projects initially, or all if "See More" is clicked
  const visibleProjects = showAll ? filteredRegular : filteredRegular.slice(0, 4);
  const hasMoreProjects = filteredRegular.length > 4;

  // Status badge colors
  const getStatusStyle = (status) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'development':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'completed':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
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

  // Project Card Component
  const ProjectCard = ({ project, isFeatured = false }) => (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        isFeatured ? 'border-2 border-indigo-200' : ''
      }`}
      whileHover={{ y: -8 }}
      layout
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
          <FaStar /> Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
        {/* Placeholder if no image - shows gradient with icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FaCode className="text-white text-6xl opacity-30" />
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> View Live
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusStyle(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Duration */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.duration}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-700 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <span className="text-indigo-600 mr-2 mt-0.5">✓</span>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons - Mobile */}
        <div className="flex gap-3 md:hidden">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt className="text-sm" /> Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center flex items-center justify-center gap-2"
          >
            <FaGithub className="text-sm" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my full-stack development work, from healthcare platforms to SaaS applications
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                  setShowAll(false); // Reset to initial view when changing category
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">({categoryProjects.length})</span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Projects Section */}
        {filteredFeatured.length > 0 && (
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FaStar className="text-3xl text-yellow-500" />
                <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

        {/* All Projects Section */}
        {filteredRegular.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {filteredFeatured.length > 0 ? 'More Projects' : 'All Projects'}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

              {/* See More / Show Less Button */}
              {hasMoreProjects && (
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
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

        {/* No Projects Message */}
        {filteredFeatured.length === 0 && filteredRegular.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to see more?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Visit my GitHub profile to explore more projects, contributions, and open-source work.
          </p>
          <a
            href="https://github.com/anirbandas-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaGithub size={24} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;