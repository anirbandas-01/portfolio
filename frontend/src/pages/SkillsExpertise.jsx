import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGithub, FaStar, FaCodeBranch, 
  FaLaptopCode, FaRocket, FaBrain, FaUsers, FaCheckCircle, FaCalendar,
  FaEnvelope, FaDownload, FaSpinner
} from 'react-icons/fa';

const SkillsExpertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);

  // Extract GitHub username from personalInfo.github URL
  const getGithubUsername = () => {
    const url = personalInfo.github;
    // Extract username from URL like "https://github.com/username"
    const match = url.match(/github\.com\/([^\/]+)/);
    return match ? match[1] : null;
  };

  // Fetch GitHub Stats
  useEffect(() => {
    const fetchGitHubStats = async () => {
      const username = getGithubUsername();
      
      if (!username) {
        setError('GitHub username not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Calculate total forks
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

        // Calculate language statistics
        const languageStats = {};
        let totalBytes = 0;

        // Fetch language data for each repo (limited to avoid rate limiting)
        const languagePromises = reposData.slice(0, 20).map(async (repo) => {
          try {
            const langResponse = await fetch(repo.languages_url);
            if (langResponse.ok) {
              const langData = await langResponse.json();
              Object.entries(langData).forEach(([lang, bytes]) => {
                languageStats[lang] = (languageStats[lang] || 0) + bytes;
                totalBytes += bytes;
              });
            }
          } catch (err) {
            console.error('Error fetching language data:', err);
          }
        });

        await Promise.all(languagePromises);

        // Convert to percentages and sort
        const languages = Object.entries(languageStats)
          .map(([name, bytes]) => ({
            name,
            percentage: Math.round((bytes / totalBytes) * 100),
            bytes
          }))
          .sort((a, b) => b.bytes - a.bytes)
          .slice(0, 5); // Top 5 languages

        // Assign colors to languages
        const languageColors = {
          'JavaScript': 'bg-yellow-500',
          'TypeScript': 'bg-blue-600',
          'Python': 'bg-blue-500',
          'Java': 'bg-red-600',
          'HTML': 'bg-orange-500',
          'CSS': 'bg-blue-400',
          'PHP': 'bg-purple-500',
          'C++': 'bg-pink-600',
          'C': 'bg-gray-700',
          'Go': 'bg-cyan-500',
          'Rust': 'bg-orange-600',
          'Ruby': 'bg-red-500',
          'Swift': 'bg-orange-400',
          'Kotlin': 'bg-purple-600',
        };

        const languagesWithColors = languages.map(lang => ({
          ...lang,
          color: languageColors[lang.name] || 'bg-gray-500'
        }));

        // Get current year for commits calculation
        const currentYear = new Date().getFullYear();

        setGithubStats({
          totalRepos: userData.public_repos,
          totalStars: totalStars,
          totalForks: totalForks,
          followers: userData.followers,
          following: userData.following,
          totalCommits: '500+', // GitHub API doesn't provide total commits easily, keep estimated
          contributions: userData.public_repos * 15, // Rough estimate
          languages: languagesWithColors,
          profileUrl: userData.html_url,
          avatarUrl: userData.avatar_url,
          bio: userData.bio,
          createdAt: new Date(userData.created_at).getFullYear(),
          currentYear: currentYear
        });

        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError('Failed to load GitHub stats');
        setLoading(false);
        
        // Fallback to mock data
        setGithubStats({
          totalRepos: 15,
          totalStars: 47,
          totalForks: 23,
          followers: 50,
          totalCommits: '500+',
          contributions: 245,
          languages: [
            { name: 'JavaScript', percentage: 75, color: 'bg-yellow-500' },
            { name: 'HTML', percentage: 15, color: 'bg-orange-500' },
            { name: 'PHP', percentage: 10, color: 'bg-purple-500' },
          ],
          profileUrl: personalInfo.github
        });
      }
    };

    fetchGitHubStats();
  }, []);

  // Trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Skills data organized by category
  const skillsData = {
    frontend: [
      { name: 'React.js', level: 88, color: 'from-blue-500 to-cyan-500' },
      { name: 'HTML5/CSS3', level: 92, color: 'from-orange-500 to-red-500' },
      { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-cyan-500' },
      { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
    ],
    backend: [
      { name: 'Node.js', level: 90, color: 'from-green-500 to-green-600' },
      { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-700' },
      { name: 'REST APIs', level: 92, color: 'from-indigo-500 to-purple-500' },
      { name: 'JWT Authentication', level: 85, color: 'from-red-500 to-pink-500' },
    ],
    databases: [
      { name: 'MongoDB', level: 87, color: 'from-green-600 to-green-700' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-blue-700' },
      { name: 'MySQL', level: 80, color: 'from-blue-500 to-indigo-600' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, color: 'from-gray-700 to-gray-800' },
      { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
      { name: 'Vercel & Render', level: 85, color: 'from-purple-500 to-purple-600' },
      { name: 'OpenAI API', level: 80, color: 'from-teal-500 to-green-500' },
    ],
  };

  // Development Approach
  const approaches = [
    {
      icon: FaBrain,
      title: 'Problem-First Thinking',
      description: 'I start by deeply understanding the problem before writing any code. This ensures solutions are well-architected and maintainable.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FaRocket,
      title: 'Performance & Scalability',
      description: 'Building applications that are not just functional, but fast, efficient, and ready to scale as user demands grow.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaCheckCircle,
      title: 'Clean Code Philosophy',
      description: 'Writing code that is readable, maintainable, and follows best practices. Code should be easy for teams to understand and extend.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FaUsers,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly. I stay updated with the latest frameworks, tools, and industry best practices through continuous learning.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  // Why hire me points
  const whyHireMe = [
    'Fast turnaround on projects',
    'Quality-focused development',
    'Great communication skills',
    'End-to-end expertise',
    'Problem-solving mindset',
    'Modern tech stack knowledge'
  ];

  const openTo = [
    'Full-time software developer roles',
    'Contract/Freelance projects',
    'Backend & Full-stack positions',
    'Open source collaborations'
  ];

  // Skill Progress Bar Component
  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-800">{skill.name}</span>
        <span className="font-bold text-indigo-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My approach to development, technical skills, and what drives my work
          </p>
        </motion.div>

        {/* Approach to Development */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              My Approach to Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${approach.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {approach.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Skills Progress Bars */}
        <section className="mb-20" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Technical Proficiency
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <FaReact className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Frontend Development</h3>
                </div>
                {skillsData.frontend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              {/* Backend Skills */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <FaNodeJs className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend Development</h3>
                </div>
                {skillsData.backend.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              {/* Database Skills */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <FaDatabase className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Databases</h3>
                </div>
                {skillsData.databases.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              {/* Tools & Technologies */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <FaLaptopCode className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tools & Technologies</h3>
                </div>
                {skillsData.tools.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* GitHub Stats */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <FaGithub className="text-4xl text-gray-900 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">GitHub Activity</h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <FaSpinner className="text-4xl text-indigo-600 animate-spin" />
                <span className="ml-4 text-gray-600 text-lg">Loading GitHub stats...</span>
              </div>
            ) : githubStats ? (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-lg text-white"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCodeBranch className="text-3xl mb-3 opacity-80" />
                    <div className="text-3xl font-bold mb-1">{githubStats.totalRepos}</div>
                    <div className="text-sm opacity-90">Repositories</div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaStar className="text-3xl mb-3 opacity-80" />
                    <div className="text-3xl font-bold mb-1">{githubStats.totalStars}</div>
                    <div className="text-sm opacity-90">Total Stars</div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-2xl shadow-lg text-white"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaUsers className="text-3xl mb-3 opacity-80" />
                    <div className="text-3xl font-bold mb-1">{githubStats.followers}</div>
                    <div className="text-sm opacity-90">Followers</div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl shadow-lg text-white"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCodeBranch className="text-3xl mb-3 opacity-80" />
                    <div className="text-3xl font-bold mb-1">{githubStats.totalForks}</div>
                    <div className="text-sm opacity-90">Total Forks</div>
                  </motion.div>
                </div>

                {/* Most Used Languages */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Most Used Languages</h3>
                  {githubStats.languages && githubStats.languages.length > 0 ? (
                    <div className="space-y-4">
                      {githubStats.languages.map((lang, index) => (
                        <div key={lang.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-800">{lang.name}</span>
                            <span className="font-bold text-gray-600">{lang.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className={`h-full ${lang.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${lang.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No language data available</p>
                  )}
                  
                  <a
                    href={githubStats.profileUrl || personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                  >
                    <FaGithub /> View Full GitHub Profile →
                  </a>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      Note: Using fallback data. {error}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">Unable to load GitHub stats</p>
              </div>
            )}
          </motion.div>
        </section>

        {/* Hire Me Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Open to Opportunities */}
              <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Open to Opportunities</h2>
                <ul className="space-y-4">
                  {openTo.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaCheckCircle className="text-green-300 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Why Work With Me */}
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
                <ul className="space-y-4 mb-8">
                  {whyHireMe.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-yellow-300 mr-3">✓</span>
                      <span className="text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex-1 bg-white text-indigo-600 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2"
                  >
                    <FaEnvelope /> Get In Touch
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-800 transition-all duration-300 border-2 border-white/20 text-center flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default SkillsExpertise;