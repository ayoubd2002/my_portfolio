// Portfolio data - Easy to modify all content here
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Dellouche Ayoub",
    role: "Flutter & Backend Developer",
    description: "Building cross-platform mobile apps with Flutter and scalable APIs with FastAPI & Node.js",
    bio: "I'm a passionate mobile and backend developer specializing in Flutter for cross-platform mobile applications and FastAPI/Node.js for building robust, scalable backend services. I love creating seamless user experiences on mobile and designing efficient RESTful APIs. With expertise in both frontend mobile development and backend architecture, I deliver end-to-end solutions.",
    email: "dellouchayoub@example.com",
    phone: "+1 (555) 123-4567",
    location: "mila, algeria",
    profileImage: "/assets/pr.jpg",
  },

  // Social Links
  social: {
    github: "https://github.com/ayoubd2002",
    linkedin: "https://www.linkedin.com/in/ayoub-dellouch-8596592ab/",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },

  // Skills
  skills: {
    mobile: [
      { name: "Flutter", level: 95, icon: "📱" },
      { name: "Dart", level: 90, icon: "🎯" },
      { name: "Firebase", level: 85, icon: "🔥" },
      { name: "State Management", level: 90, icon: "🔄" },
      { name: "RESTful APIs", level: 95, icon: "🌐" },
    ],
    backend: [
      { name: "FastAPI", level: 90, icon: "⚡" },
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "Python", level: 90, icon: "🐍" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MongoDB", level: 75, icon: "🍃" },
    ],
    tools: [
      { name: "Git", level: 90, icon: "🔀" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Postman", level: 85, icon: "📬" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A full-featured Flutter mobile app with shopping cart, payment integration, and user authentication. Connected to FastAPI backend for seamless data management.",
      image: "/assets/project1.jpg",
      techStack: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce-app",
    },
    {
      id: 2,
      title: "Task Management API",
      description: "RESTful API built with FastAPI featuring task management, user authentication, real-time notifications, and comprehensive documentation with Swagger/OpenAPI.",
      image: "/assets/project2.jpg",
      techStack: ["FastAPI", "Python", "PostgreSQL", "JWT", "WebSockets"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/task-api",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Cross-platform social media application built with Flutter, featuring posts, comments, likes, and real-time chat. Backend powered by Node.js and MongoDB.",
      image: "/assets/project3.jpg",
      techStack: ["Flutter", "Node.js", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/social-app",
    },
    {
      id: 4,
      title: "Analytics Dashboard API",
      description: "High-performance analytics API built with FastAPI for processing and aggregating large datasets. Features caching, rate limiting, and async operations.",
      image: "/assets/project4.jpg",
      techStack: ["FastAPI", "Python", "Redis", "PostgreSQL", "Celery"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/analytics-api",
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "Flutter mobile app for food delivery with real-time order tracking, push notifications, and payment integration. Backend API built with Node.js.",
      image: "/assets/project5.jpg",
      techStack: ["Flutter", "Node.js", "Express", "MongoDB", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/food-delivery",
    },
    {
      id: 6,
      title: "Microservices API Gateway",
      description: "Node.js-based API gateway managing multiple microservices with authentication, load balancing, request routing, and rate limiting.",
      image: "/assets/project6.jpg",
      techStack: ["Node.js", "Express", "Docker", "Redis", "Nginx"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/api-gateway",
    },
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "Tech Corp",
      position: "Senior Flutter & Backend Developer",
      period: "2022 - Present",
      location: "Your City, Country",
      description: "Leading development of cross-platform mobile applications with Flutter and scalable backend APIs using FastAPI and Node.js. Architecting microservices and mentoring junior developers.",
      tasks: [
        "Developed 5+ production Flutter apps with 100K+ downloads",
        "Built high-performance REST APIs with FastAPI handling 1M+ requests/day",
        "Designed and implemented microservices architecture using Node.js",
        "Improved API response times by 60% through optimization and caching",
        "Led mobile development team and established coding standards",
      ],
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Flutter & Backend Developer",
      period: "2020 - 2022",
      location: "Remote",
      description: "Built cross-platform mobile applications from scratch and developed robust backend services. Worked on end-to-end feature development from mobile UI to API endpoints.",
      tasks: [
        "Developed Flutter apps for iOS and Android with shared codebase",
        "Built RESTful APIs using FastAPI with async/await patterns",
        "Created Node.js services for real-time features using WebSockets",
        "Integrated third-party APIs (payment gateways, analytics, push notifications)",
        "Optimized database queries and implemented caching strategies",
      ],
    },
    {
      id: 3,
      company: "MobileDev Agency",
      position: "Flutter Developer",
      period: "2018 - 2020",
      location: "Your City, Country",
      description: "Created beautiful and functional mobile applications for various clients. Focused on UI/UX design implementation and state management best practices.",
      tasks: [
        "Developed 15+ Flutter applications for clients across industries",
        "Implemented complex state management using Provider and Bloc",
        "Integrated REST APIs and handled data persistence",
        "Ensured cross-platform compatibility (iOS & Android)",
        "Collaborated with designers to implement pixel-perfect UIs",
      ],
    },
  ],
};

