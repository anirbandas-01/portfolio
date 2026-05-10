import { motion } from 'framer-motion';
import { education, certifications, experience } from '../data/portfolioData';
import { FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about my education, experience, and professional certifications
          </p>
        </motion.div>

        {/* Experience Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm mt-2 sm:mt-0 sm:text-right">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-indigo-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-600 mt-2">{edu.grade}</p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 sm:mt-0">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <FaCertificate className="text-3xl text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-600 mr-3">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;