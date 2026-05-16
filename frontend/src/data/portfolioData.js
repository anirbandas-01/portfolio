export const personalInfo = {
  name: "Anirban Das",
  title: "Full Stack Developer",
  subtitle: "React • Node.js • REST APIs",
  email: "anirban140963@gmail.com",
  phone: "+91 8101733466",
  location: "Santipur, West Bengal, IN",
  linkedin: "https://linkedin.com/in/anirban-das-b192a9260",
  github: "https://github.com/anirbandas-01",
  summary: "Full Stack Developer with experience building and deploying 5+ web applications using React.js, Node.js, and REST APIs. Skilled in developing scalable backend systems, authentication services, and database architectures using MongoDB and MySQL. Seeking an entry-level Software Developer role in backend or full-stack development.",
  resumeUrl: "https://drive.google.com/file/d/1zaE-CTmn9GL40JSfCSEe1SKsxMqfAhWv/view?usp=drive_link"
};

export const skills = {
  languages: ["JavaScript", "Java", "SQL"],
  frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Authentication"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "socket.io", "Vercel", "Render", "OpenAI API"],
  coreCS: ["Data Structures", "OOPS", "Operating System", "Networking"]
};

export const projects = [
  {
    id: 1,
    title: "Healthcare Risk Management Platform",
    description: "Built a full-stack healthcare web application using React.js, Node.js, and MongoDB for managing and analyzing patient data with real-time risk assessment.",
    longDescription: "A comprehensive healthcare platform that streamlines patient data management and provides intelligent risk evaluation. Features include secure authentication, real-time data processing, and integration with external prediction APIs for advanced analytics.",
    image: "/projects/healthcare-platform.png", // Add your screenshot to public/projects/
    category: "Full Stack",
    status: "live", // live | development | completed
    technologies: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    features: [
      "Designed and developed RESTful APIs for data handling, authentication, and risk evaluation workflows",
      "Integrated external prediction services via APIs for intelligent risk assessment",
      "Optimized backend performance with efficient database queries and indexing"
    ],
    liveLink: "#", // Replace with actual link
    githubLink: "#", // Replace with actual link
    duration: "Dec 2024 – Jan 2025",
    isFeatured: true // Featured project - shows at top
  },
  {
    id: 2,
    title: "Content Automation SaaS Platform",
    description: "Developed a full-stack SaaS application using React.js, Node.js, Firebase and PostgreSQL for automated content generation and user workflows.",
    longDescription: "An enterprise-grade SaaS platform that automates content generation workflows using AI services. Built with scalability in mind, featuring user authentication, subscription management, and high-volume request handling.",
    image: "/projects/content-saas.png",
    category: "Full Stack",
    status: "live",
    technologies: ["React.js", "Node.js", "Firebase", "PostgreSQL", "OpenAI API"],
    features: [
      "Built scalable REST APIs with authentication, request handling, and structured data management",
      "Integrated external AI services via APIs for automated content generation",
      "Optimized backend performance to handle high-volume requests efficiently with caching strategies"
    ],
    liveLink: "#",
    githubLink: "#",
    duration: "Oct 2024 – Nov 2024",
    isFeatured: true
  },
  {
    id: 3,
    title: "Community Resource Platform",
    description: "Developed a full-stack community web platform using PHP (Laravel) and MySQL for managing and sharing local resources with role-based access control.",
    longDescription: "A community-driven platform that enables users to share and discover local resources. Features robust user authentication, resource categorization, and an intuitive admin dashboard for content moderation.",
    image: "/projects/community-platform.png",
    category: "Full Stack",
    status: "completed",
    technologies: ["PHP (Laravel)", "MySQL", "REST APIs", "Bootstrap"],
    features: [
      "Designed RESTful APIs and backend logic for user authentication and resource posting",
      "Structured relational database schemas with optimized relationships and constraints",
      "Optimized queries for efficient data retrieval and system performance"
    ],
    liveLink: "#",
    githubLink: "#",
    duration: "Feb 2024 – March 2024",
    isFeatured: false
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "Built a real-time messaging application using React, Node.js, and Socket.io with features like group chats, file sharing, and online status indicators.",
    longDescription: "A modern chat application featuring real-time messaging, typing indicators, read receipts, and group chat functionality. Uses WebSocket technology for instant message delivery.",
    image: "/projects/chat-app.png",
    category: "Full Stack",
    status: "completed",
    technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
    features: [
      "Implemented real-time bidirectional communication using Socket.io",
      "Built secure authentication with JWT and session management",
      "Designed scalable message storage system with MongoDB"
    ],
    liveLink: "#",
    githubLink: "#",
    duration: "Aug 2024 – Sep 2024",
    isFeatured: false
  },
  {
    id: 5,
    title: "E-commerce REST API",
    description: "Developed a comprehensive e-commerce backend API with Node.js, Express, and PostgreSQL featuring product management, cart functionality, and payment integration.",
    longDescription: "A robust REST API for e-commerce platforms with complete CRUD operations, authentication, authorization, and payment processing integration. Includes admin dashboard endpoints for inventory management.",
    image: "/projects/ecommerce-api.png",
    category: "Backend",
    status: "completed",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Stripe API"],
    features: [
      "Built RESTful APIs with proper HTTP methods and status codes",
      "Implemented role-based access control for admin and user operations",
      "Integrated Stripe payment gateway for secure transactions"
    ],
    liveLink: "#",
    githubLink: "#",
    duration: "June 2024 – July 2024",
    isFeatured: false
  },
  {
    id: 6,
    title: "Task Management Dashboard",
    description: "Created a responsive task management application with React and Firebase, featuring drag-and-drop functionality, real-time updates, and team collaboration.",
    longDescription: "A Kanban-style project management tool with real-time synchronization across team members. Features include task assignments, priority levels, due date tracking, and activity logs.",
    image: "/projects/task-dashboard.png",
    category: "Frontend",
    status: "live",
    technologies: ["React.js", "Firebase", "Tailwind CSS", "React DnD"],
    features: [
      "Implemented drag-and-drop interface for intuitive task management",
      "Real-time database synchronization with Firebase Firestore",
      "Responsive design with mobile-first approach using Tailwind CSS"
    ],
    liveLink: "#",
    githubLink: "#",
    duration: "April 2024 – May 2024",
    isFeatured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "Independent Full Stack Developer",
    company: "Self-Employed",
    duration: "2023 – Present",
    location: "Remote",
    responsibilities: [
      "Developed and deployed 5+ full-stack applications using React, Node.js, and SQL/NoSQL databases",
      "Built secure REST APIs and deployed applications on Vercel and Render",
      "Implemented authentication systems and database architectures"
    ],
    highlights: [
      "100% deployment success rate",
      "Built scalable systems serving real users",
      "Expertise in end-to-end application development"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Academy of Technology, MAKAUT",
    duration: "2024 – Present",
    grade: "CGPA: 7.40",
    description: "Advanced studies in software development, system design, and modern technologies",
    coursework: ["Advanced Algorithms", "Database Management Systems", "Software Engineering", "Cloud Computing"]
  },
  {
    id: 2,
    degree: "B.Sc. Computer Science",
    institution: "Kanchrapara College, University of Kalyani",
    duration: "2021 – 2024",
    grade: "CGPA: 7.49",
    description: "Strong foundation in programming, data structures, and core computer science concepts",
    coursework: ["Data Structures", "OOPS", "Operating Systems", "Computer Networks"]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    issueDate: "January 2025",
    credentialId: "",
    verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=",
    imagePath: "/certificates/oracle-gen-ai.png",
    skills: ["Generative AI", "OCI", "Large Language Models"],
    description: "Professional certification in Oracle Cloud Infrastructure Generative AI technologies"
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "2024",
    credentialId: "",
    verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=",
    imagePath: "/certificates/oracle-ai-foundations.png",
    skills: ["AI Fundamentals", "Machine Learning", "OCI"],
    description: "Foundational knowledge of AI services and capabilities in Oracle Cloud Infrastructure"
  },
  {
    id: 3,
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    issueDate: "2024",
    credentialId: "",
    verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=",
    imagePath: "/certificates/oracle-vector-search.png",
    skills: ["Vector Search", "AI", "Database"],
    description: "Expert-level certification in Oracle AI Vector Search technologies"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/anirbandas-01",
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/anirban-das-b192a9260",
    icon: "FaLinkedin"
  },
  {
    name: "Email",
    url: "mailto:anirban140963@gmail.com",
    icon: "FaEnvelope"
  }
];

// Project categories for filtering
export const projectCategories = [
  "All Projects",
  "Full Stack",
  "Backend",
  "Frontend",
  "AI/ML"
];