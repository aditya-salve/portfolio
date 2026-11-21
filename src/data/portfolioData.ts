import {
  PersonalInfo,
  SkillItem,
  ExploringItem,
  EducationItem,
  ProjectItem,
  CertificationItem,
  AchievementItem,
  LearningGoalItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  fullName: "Aditya Rajendra Salve",
  shortName: "Aditya Salve",
  initials: "AS",
  title: "Computer Engineering Student | Aspiring Software Engineer",
  roleBadge: "Aspiring Software Engineer",
  location: "Talegaon Dabhade, Pune, Maharashtra, India",
  email: "adityasalve0806@gmail.com",
  college: "Dr. D. Y. Patil College of Engineering and Innovation",
  degree: "Computer Engineering",
  currentYear: "Second Year (First Semester)",
  expectedGraduation: "2029",
  previousEducation: "Higher Secondary Education (12th)",
  linkedin: "https://www.linkedin.com/in/aditya-salve-8abb8a42a/",
  github: "https://github.com/aditya-salve",
  heroIntro: "HELLO, WORLD! I'M",
  heroTagline: "Hi, I'm Aditya Salve.",
  heroDescription: "Passionate about technology, curious about how things work, and always exploring new possibilities through code.",
  learningQuote: "Learning today. Building tomorrow.",
  statusText: "Currently Learning & Building"
};

export const aboutHighlights = [
  {
    title: "Curious Learner",
    description: "Always interested in discovering how new technologies work under the hood and why specific architectural choices are made.",
    icon: "Compass",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30"
  },
  {
    title: "Problem Solver",
    description: "Enjoys approaching programming challenges through logical thinking, structured decomposition, and disciplined debugging.",
    icon: "Cpu",
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/30"
  },
  {
    title: "Growth Mindset",
    description: "Firm believer in continuous improvement and actively building practical, hands-on engineering skills beyond the college syllabus.",
    icon: "TrendingUp",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30"
  }
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: "C Programming",
    level: "Intermediate",
    percentage: 65,
    icon: "FileCode",
    category: "Programming Languages",
    notes: "Core syntax, pointer manipulation, memory management, and structured procedural programming."
  },
  {
    name: "C++",
    level: "Intermediate",
    percentage: 65,
    icon: "Binary",
    category: "Programming Languages",
    notes: "Object-oriented programming concepts (OOP), classes, inheritance, and standard template basics."
  },
  {
    name: "Python",
    level: "Beginner",
    percentage: 40,
    icon: "Terminal",
    category: "Programming Languages",
    notes: "Foundational scripting, data analysis basics, verified via NPTEL Python for Data Science course."
  },
  {
    name: "Java",
    level: "Beginner",
    percentage: 35,
    icon: "Code",
    category: "Programming Languages",
    notes: "Basic syntax, JVM execution principles, and foundational object-oriented programming patterns."
  },

  // Web Development
  {
    name: "HTML",
    level: "Beginner",
    percentage: 45,
    icon: "Layout",
    category: "Web Development",
    notes: "Semantic markup, page structure, modern HTML5 elements, and accessibility best practices."
  },
  {
    name: "CSS",
    level: "Beginner",
    percentage: 40,
    icon: "Palette",
    category: "Web Development",
    notes: "Styling principles, box model, responsive layouts, Flexbox, and modern CSS utilities."
  },

  // Core Computer Science
  {
    name: "Data Structures",
    level: "Beginner",
    percentage: 45,
    icon: "Network",
    category: "Core Computer Science",
    notes: "Foundational understanding of arrays, linked lists, stacks, queues, and time complexity."
  }
];

export const currentlyExploring: ExploringItem[] = [
  {
    title: "Game Development",
    category: "Interactive Simulation",
    description: "Investigating game mechanics, physics engines, real-time 2D/3D rendering, and interactive gameplay architecture.",
    icon: "Gamepad2",
    status: "Active Interest"
  },
  {
    title: "Software Engineering",
    category: "System Design & Architecture",
    description: "Studying clean code practices, modular design principles, version control workflows, and maintainable software patterns.",
    icon: "Layers",
    status: "Continuous Study"
  },
  {
    title: "Emerging Technologies",
    category: "Future Horizons",
    description: "Keeping pace with modern tech trends, developer tooling ecosystems, AI-augmented engineering, and next-gen frameworks.",
    icon: "Sparkles",
    status: "Exploration"
  }
];

export const educationData: EducationItem[] = [
  {
    id: "engg-degree",
    institution: "Dr. D. Y. Patil College of Engineering and Innovation",
    degree: "Bachelor of Engineering — Computer Engineering",
    period: "2024 – 2029 (Expected)",
    academicYear: "Second Year (First Semester)",
    location: "Talegaon / Pune, Maharashtra, India",
    description: "Pursuing in-depth academic study in Computer Engineering with focus on procedural & object-oriented programming, digital electronics, data structures, and algorithmic logic.",
    highlights: [
      "Current Status: Second Year (First Semester)",
      "Focus: C, C++, Data Structures, Computer Organization",
      "Participating in collaborative tech events and hackathons",
      "Expected Graduation: 2029"
    ],
    isCurrent: true,
    isPlaceholder: false
  },
  {
    id: "higher-secondary",
    institution: "Higher Secondary Education (12th Grade)",
    degree: "Higher Secondary Certificate (HSC) — Science Stream",
    period: "Completed",
    academicYear: "Secondary Education",
    location: "Pune, Maharashtra, India",
    description: "Completed higher secondary curriculum with a strong foundational focus in Mathematics, Physics, and foundational sciences.",
    highlights: [
      "Stream: Science & Mathematics",
      "Built rigorous analytical and quantitative problem-solving foundation",
      "Prepared for competitive engineering admissions"
    ],
    isCurrent: false,
    isPlaceholder: true
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "C++ / Programming",
    shortDescription: "A console-based management application to record, query, update, and manage student academic records with file persistence.",
    fullDescription: "Demonstrates practical C++ implementation including object-oriented programming structures, classes, file I/O operations, input validation, and menu-driven command navigation.",
    tags: ["C++", "OOP", "File I/O", "Data Structures", "Console App"],
    isDemo: true,
    statusBadge: "DEMO PLACEHOLDER — REPLACE WITH YOUR WORK",
    githubUrl: "https://github.com/aditya-salve",
    liveUrl: "#",
    placeholderNotice: "This project card is an editable demo template. You can easily plug in your real repository link, screenshots, and live demo in src/data/portfolioData.ts.",
    keyFeatures: [
      "Structured student record storage with OOP design",
      "Search, add, modify, and delete student data",
      "Persistent record storage via file handling",
      "Menu-driven interactive terminal interface"
    ],
    colorGradient: "from-blue-600/30 via-indigo-600/20 to-transparent"
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "HTML / CSS / JavaScript",
    shortDescription: "A modern, responsive, developer portfolio crafted to showcase technical skills, learning journey, and projects with high aesthetic polish.",
    fullDescription: "Built with a clean dark-themed interface, smooth micro-interactions, responsive grid layout, accessible keyboard navigation, and centralized data structure for effortless maintainability.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive"],
    isDemo: false, // The actual site itself!
    statusBadge: "ACTIVE PROJECT — PORTFOLIO V1.0",
    githubUrl: "https://github.com/aditya-salve",
    liveUrl: "#home",
    placeholderNotice: "Currently live and serving as Aditya's personal developer identity hub.",
    keyFeatures: [
      "Dynamic responsive UI with dark/light themes",
      "Interactive technical skill progress indicators",
      "Credential modal viewer for verified certifications",
      "Interactive developer terminal emulator"
    ],
    colorGradient: "from-violet-600/30 via-blue-600/20 to-transparent"
  },
  {
    id: "game-development-project",
    title: "Game Development Project",
    category: "Game Development",
    shortDescription: "Conceptual gameplay prototype exploring 2D mechanics, collision detection, sprite animations, and interactive player controls.",
    fullDescription: "An exploratory prototype demonstrating foundational game loop architecture, input polling, velocity calculations, and state management for interactive gameplay.",
    tags: ["Game Dev", "C++ / Engine", "Physics Basics", "Interactive"],
    isDemo: true,
    statusBadge: "DEMO PLACEHOLDER — REPLACE WITH YOUR WORK",
    githubUrl: "https://github.com/aditya-salve",
    liveUrl: "#",
    placeholderNotice: "Planned milestone project. As you build your 2D/3D game prototype, update this card with your gameplay video, itch.io link, and GitHub repository.",
    keyFeatures: [
      "Game loop implementation with delta timing",
      "AABB 2D collision detection and bounding boxes",
      "Keyboard input handling and sprite movement",
      "Score tracking and game state transitions"
    ],
    colorGradient: "from-cyan-600/30 via-teal-600/20 to-transparent"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-nptel-python",
    title: "Python for Data Science",
    issuer: "NPTEL — Indian Institute of Technology Madras (Funded by MoE, Govt. of India)",
    issuedOn: "Jan-Feb 2026 (4-Week Course)",
    gradeOrScore: "Consolidated Score: 50% (Assignments: 20.17/25, Proctored Exam: 30/75)",
    rollNumber: "NPTEL26CS80S466201283",
    credentialId: "NPTEL26CS80S466201283",
    verificationUrl: "https://nptel.ac.in/noc/",
    image: "./assets/cert-nptel-python.png",
    isDemo: false,
    statusBadge: "VERIFIED CREDENTIAL",
    description: "Comprehensive foundational certification in Python applied to Data Science. Evaluated through rigorous weekly online assignments and a proctored national exam conducted by IIT Madras.",
    highlights: [
      "IIT Madras & Swayam national level certification",
      "Total candidates certified nationwide: 16,401",
      "Recommended 2 academic credits",
      "Covered Python syntax, data structures, and mathematical computation fundamentals"
    ]
  },
  {
    id: "cert-imarticus-c-cpp",
    title: "C & C++ Programming",
    issuer: "Imarticus Learning & Skill India (National Skill Development Corporation / Dr. D. Y. Patil)",
    issuedOn: "08 May 2026",
    gradeOrScore: "Final Grade: A",
    credentialId: "VLCVTSYQ373U",
    verificationUrl: "https://imarticus.org/",
    image: "./assets/cert-imarticus-c-cpp.png",
    isDemo: false,
    statusBadge: "VERIFIED PROFICIENCY",
    description: "Awarded Certificate of Proficiency with Grade 'A' for demonstrating consistent excellence, diligence, and mastery across C & C++ programming fundamentals and problem solving.",
    highlights: [
      "Awarded highest Grade: A",
      "Recognized by Skill India & National Skill Development Corporation (NSDC)",
      "Certificate ID: VLCVTSYQ373U",
      "Core topics: Pointers, memory allocation, OOP paradigm, algorithms"
    ]
  },
  {
    id: "cert-bajaj-bms-es",
    title: "Bajaj Manufacturing Systems - Employability Skills (BMS-ES)",
    issuer: "Bajaj Auto Ltd. (A CSR Initiative)",
    issuedOn: "28 September 2026",
    credentialId: "548687-37-2026-09-28",
    verificationUrl: "https://www.bajajauto.com/",
    image: "./assets/cert-bajaj-bms.png",
    isDemo: false,
    statusBadge: "VERIFIED APPRECIATION",
    description: "Certificate of Appreciation for successfully completing the Bajaj Manufacturing Systems Employability Skills program, focusing on professional communication, teamwork, and industry readiness.",
    highlights: [
      "CSR Initiative of Bajaj Auto Ltd.",
      "Executive signature: Pradeep Shrivastava (Executive Director)",
      "Certificate No: 548687-37-2026-09-28",
      "Focus: Workplace communication, professional ethics, collaborative problem solving"
    ]
  },
  {
    id: "cert-placeholder-dsa",
    title: "Data Structures & Algorithms Specialization",
    issuer: "Platform / Academy (e.g. Coursera / LeetCode / GeeksforGeeks)",
    issuedOn: "Upcoming / Target 2026–2027",
    gradeOrScore: "In Progress",
    credentialId: "PENDING VERIFICATION",
    image: "./assets/cert-nptel-python.png", // fallback placeholder
    isDemo: true,
    statusBadge: "DEMO PLACEHOLDER — FUTURE GOAL",
    description: "Placeholder for future algorithmic problem-solving credentials covering advanced trees, graphs, dynamic programming, and competitive coding milestones.",
    highlights: [
      "Targeting in-depth algorithmic complexity analysis",
      "Hands-on implementation in C++",
      "Milestone preparation for engineering technical interviews"
    ]
  },
  {
    id: "cert-placeholder-web",
    title: "Full-Stack Web Development Fundamentals",
    issuer: "Modern Web Platform (e.g. freeCodeCamp / Udemy / Odin Project)",
    issuedOn: "Upcoming Target",
    gradeOrScore: "Roadmap Item",
    credentialId: "PENDING COMPLETION",
    image: "./assets/cert-imarticus-c-cpp.png", // fallback placeholder
    isDemo: true,
    statusBadge: "DEMO PLACEHOLDER — FUTURE GOAL",
    description: "Placeholder for comprehensive modern web architecture training, connecting frontend interfaces with robust backend APIs and databases.",
    highlights: [
      "Targeting modern responsive UI frameworks",
      "RESTful API design and database modeling",
      "Git version control and automated CI/CD deployments"
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "achievement-sih",
    title: "Smart India Hackathon (SIH)",
    event: "Smart India Hackathon — Nationwide Innovation Initiative",
    category: "Collaborative Problem Solving",
    date: "College Academic Year 2024–2025",
    isDemo: false,
    statusBadge: "VERIFIED PARTICIPATION",
    description: "Participated in the prestigious Smart India Hackathon (SIH), a nationwide initiative challenging engineering students to solve pressing real-world problems through collaborative technology solutions.",
    keyTakeaways: [
      "Gained hands-on experience in rapid prototyping and high-pressure team collaboration",
      "Participated in brainstorming, requirement analysis, and architectural design under deadlines",
      "Strengthened passion for solving practical socio-technical problems with software"
    ],
    icon: "Trophy"
  },
  {
    id: "achievement-placeholder-coding",
    title: "Inter-College Coding Competition",
    event: "Engineering Code Fest (Placeholder)",
    category: "Algorithmic Challenges",
    date: "Future Milestone",
    isDemo: true,
    statusBadge: "DEMO PLACEHOLDER — FUTURE GOAL",
    description: "Placeholder for upcoming college & state-level competitive programming contests, speed debugging challenges, and hackathon milestones.",
    keyTakeaways: [
      "Prepared to compete in timed algorithmic logic puzzles",
      "Refining speed in C++ and Python problem solving",
      "Connect with fellow enthusiastic engineering students"
    ],
    icon: "Code2"
  },
  {
    id: "achievement-placeholder-symposium",
    title: "Technical Paper / Project Exhibition",
    event: "Annual College Tech Fest (Placeholder)",
    category: "Technical Presentation",
    date: "Future Milestone",
    isDemo: true,
    statusBadge: "DEMO PLACEHOLDER — FUTURE GOAL",
    description: "Placeholder for presenting future engineering projects, research posters, or software demonstrations during campus technical exhibitions.",
    keyTakeaways: [
      "Opportunity to showcase working software prototypes",
      "Refining technical communication and presentation abilities",
      "Receiving feedback from faculty and industry mentors"
    ],
    icon: "Presentation"
  }
];

export const learningGoalsData: LearningGoalItem[] = [
  {
    id: "goal-game-dev",
    title: "Game Development",
    category: "Graphics & Interactive Systems",
    description: "Diving into core game loop mechanics, 2D/3D collision mathematics, sprite rendering, and learning tools like Godot / Unreal / OpenGL basics.",
    status: "Actively Exploring",
    targetMilestones: [
      "Master 2D game loops, delta timing, and input handling",
      "Build a playable retro arcade game from scratch",
      "Explore shader basics and audio synchronization"
    ],
    icon: "Gamepad2"
  },
  {
    id: "goal-advanced-cpp",
    title: "Advanced C++ & Modern Standards",
    category: "Systems & Performance",
    description: "Advancing beyond fundamental C++ syntax into modern standards (C++17/20), smart pointers, RAII, memory optimization, and the Standard Template Library (STL).",
    status: "Continuous Focus",
    targetMilestones: [
      "Deep dive into STL containers, iterators, and custom allocators",
      "Master move semantics, rvalue references, and concurrency basics",
      "Write clean, idiomatic, high-performance C++ code"
    ],
    icon: "Cpu"
  },
  {
    id: "goal-dsa",
    title: "Data Structures & Algorithms",
    category: "Computer Science Core",
    description: "Systematic progression from linear data structures (arrays, linked lists, stacks) into non-linear structures (trees, heaps, graphs) and algorithmic design patterns.",
    status: "Continuous Focus",
    targetMilestones: [
      "Implement fundamental tree traversals (BST, AVL concepts)",
      "Master sorting algorithms and asymptotic notation (Big-O)",
      "Solve 150+ algorithmic practice problems on LeetCode/HackerRank"
    ],
    icon: "Network"
  },
  {
    id: "goal-python",
    title: "Python for Automation & Systems",
    category: "Scripting & Tooling",
    description: "Building upon NPTEL certification foundation to build automated CLI utilities, data wrangling scripts, and software testing tools.",
    status: "Actively Exploring",
    targetMilestones: [
      "Develop useful developer automation scripts",
      "Deepen familiarity with NumPy, Pandas, and data processing",
      "Build small backend REST APIs using FastAPI or Flask"
    ],
    icon: "Terminal"
  },
  {
    id: "goal-web-dev",
    title: "Modern Web Development",
    category: "Full-Stack Foundations",
    description: "Transitioning from beginner HTML/CSS towards modern component-driven architectures, responsive interfaces, TypeScript, and state management.",
    status: "Upcoming Roadmap",
    targetMilestones: [
      "Master modern responsive CSS layouts and CSS variables",
      "Learn asynchronous JavaScript (Promises, async/await, Fetch API)",
      "Build interactive single-page web applications"
    ],
    icon: "Globe"
  },
  {
    id: "goal-software-eng",
    title: "Software Engineering & Architecture",
    category: "Professional Engineering",
    description: "Cultivating industry-standard habits: Git version control, collaborative branch hygiene, automated testing, documentation, and clean architecture.",
    status: "Upcoming Roadmap",
    targetMilestones: [
      "Establish consistent Git commit and branch workflows",
      "Write structured documentation and comprehensive READMEs",
      "Practice modular software design and SOLID principles"
    ],
    icon: "Layers"
  }
];

export const quickTerminalCommands = [
  { command: "help", description: "Display all available interactive terminal commands" },
  { command: "about", description: "Print Aditya's bio, philosophy, and engineering mindset" },
  { command: "skills", description: "List verified programming proficiencies & exploring tech" },
  { command: "projects", description: "Inspect project showcase and demo placeholders" },
  { command: "certs", description: "Show authentic NPTEL, Imarticus, and Bajaj credentials" },
  { command: "education", description: "Display college & academic journey timeline" },
  { command: "sih", description: "Read about Aditya's Smart India Hackathon participation" },
  { command: "contact", description: "Get direct email, LinkedIn, and GitHub links" },
  { command: "clear", description: "Clear terminal buffer" }
];
