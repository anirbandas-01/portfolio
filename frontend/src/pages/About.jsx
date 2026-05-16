import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { education, certifications, experience, personalInfo } from '../data/portfolioData';
import { FaGraduationCap, FaCertificate, FaBriefcase, FaDownload, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaCalendar, FaAward } from 'react-icons/fa';

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey, experience, and professional credentials
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
                <motion.div
                  key={exp.id}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-indigo-600 font-medium text-lg">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm mt-2 sm:mt-0 sm:text-right">
                      <p className="font-semibold">{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Timeline Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Education Journey</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-6 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>

                    <div className="md:ml-20 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                          <p className="text-indigo-600 font-medium text-lg mb-2">{edu.institution}</p>
                          <p className="text-gray-700 mb-3">{edu.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                              {edu.grade}
                            </span>
                            <span className="text-gray-500 flex items-center">
                              <FaCalendar className="mr-2" />
                              {edu.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Relevant Coursework */}
                      {edu.coursework && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <FaCertificate className="text-3xl text-indigo-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Professional Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openCertificateModal(cert)}
                >
                  {/* Certificate Image Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaAward className="text-white text-6xl opacity-20" />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white text-sm font-semibold">Click to view details</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-indigo-600 font-semibold text-sm mb-3">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cert.description}</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 2).map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          +{cert.skills.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{cert.issueDate}</span>
                      {cert.verificationUrl && (
                        <FaExternalLinkAlt className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Download Resume Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to know more?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Download my complete resume to see detailed information about my projects, skills, and experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaDownload className="text-xl" />
                Download Resume
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-indigo-700 text-white px-8 py-4 rounded-xl hover:bg-indigo-800 transition-all duration-300 font-semibold text-lg border-2 border-white/20"
              >
                <FaExternalLinkAlt />
                View Online
              </a>
            </div>
            <p className="text-indigo-100 text-sm mt-6">
              Last updated: January 2025
            </p>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificateModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.title}</h3>
                  <p className="text-indigo-600 font-semibold">{selectedCertificate.issuer}</p>
                </div>
                <button
                  onClick={closeCertificateModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-2xl text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Certificate Image Placeholder */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl h-96 mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaAward className="text-8xl mb-4 mx-auto opacity-50" />
                    <p className="text-xl font-semibold">Certificate Image</p>
                    <p className="text-sm opacity-75 mt-2">Add your certificate image to public/certificates/</p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedCertificate.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Issue Date</p>
                      <p className="font-semibold text-gray-900">{selectedCertificate.issueDate}</p>
                    </div>
                    {selectedCertificate.credentialId && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Credential ID</p>
                        <p className="font-semibold text-gray-900 break-all">{selectedCertificate.credentialId}</p>
                      </div>
                    )}
                  </div>

                  {selectedCertificate.verificationUrl && (
                    <div className="flex gap-4">
                      <a
                        href={selectedCertificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-center flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt />
                        Verify Credential
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;