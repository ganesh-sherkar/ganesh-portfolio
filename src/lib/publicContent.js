export const fallbackHero = {
  badge: "FULL STACK MERN & REACT NATIVE DEVELOPER",
  name: "Musku Nishitha",
  headline: "Hi, I'm",
  summary:
    "Full-stack MERN & React Native developer with 2+ years of experience building scalable web and mobile apps, optimising performance, and delivering projects on time.",
  techStack: [
    "React.js",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
  ],
  resumeUrl: "/Musku_Nishitha_2_Y.OE_Mernstack.pdf",
  profileImageUrl: "/assets/ProfileMain.jpeg",
  socials: {
    linkedin: "https://www.linkedin.com/in/musku-nishitha-7a535b36b/",
    github: "https://github.com/MuskuNishitha",
    email: "mailto:muskunishitha2003@gmail.com",
  },
};

export const fallbackPortfolio = {
  categories: [
    { id: "all", name: "All Work" },
    { id: "ecommerce", name: "Web Development" },
    // { id: "mobile", name: "Applications" },
    { id: "dashboard", name: "Dashboards" },
  ],
  projects: [
    {
      id: 1,
      title: "EWShopping",
      category: "ecommerce",
      subcategory: "Web Development",
      period: "Jun 2024 - Present",
      image: "/assets/projects/Ewshooping.png",
      description:
        "Full-scale multi-vendor e-commerce platform with customer website, admin panel, seller panel, and mobile app.",
      features: [
        "Next.js customer website with improved SEO and performance",
        "Admin & Seller dashboards with React and Tailwind CSS",
        "Cross-platform mobile app with React Native",
        "Firebase for real-time updates",
        "Production deployment with high uptime",
      ],
      tech: [
        "Next.js",
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
      ],
      liveLink: "https://ewshopping-demo.vercel.app",
      githubLink: "https://github.com/MuskuNishitha/ewshopping",
      challenges:
        "Implementing real-time inventory sync across multiple vendors and platforms.",
      solution:
        "Used realtime updates + optimised DB queries to keep inventory accurate and fast.",
    },
    {
      id: 2,
      title: "KiranaWorld",
      category: "ecommerce",
      subcategory: "Web Development",
      period: "Apr 2025 - Present",
      image: "/assets/projects/KiranaWorld.png",
      description:
        "Grocery e-commerce platform enabling online orders of fruits, vegetables, and household essentials.",
      features: [
        "Responsive customer website with React and Tailwind CSS",
        "Admin panel for inventory and order management",
        "Cross-platform mobile app with React Native",
        "Scalable backend with Node.js, Express.js, and MongoDB",
        "Smooth checkout across devices",
      ],
      tech: [
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
      liveLink: "https://kiranaworld-demo.vercel.app",
      githubLink: "https://github.com/MuskuNishitha/kiranaworld",
      challenges:
        "Managing inventory updates and preventing overselling during peak hours.",
      solution:
        "Added inventory checks with caching + safer updates during checkout.",
    },
    {
      id: 3,
      title: "POT Dashboard",
      category: "dashboard",
      subcategory: "Dashboard",
      period: "Nov 2025 - Jan 2026",
      image: "/assets/projects/POT.png",
      description:
        "Mobile dashboard for visualising construction project metrics including cost, manpower, and progress.",
      features: [
        "Charts and graphs for quick decision-making",
        "Responsive UI for mobile and tablet",
        "State management with Redux Toolkit",
        "Real-time-ish visualisation patterns",
        "Export-ready reporting",
      ],
      tech: [
        "React Native",
        "Redux Toolkit",
        "Chart.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveLink: "https://pot-dashboard-demo.vercel.app",
      githubLink: "https://github.com/MuskuNishitha/pot-dashboard",
      challenges: "Keeping chart updates smooth with large datasets on mobile.",
      solution:
        "Used aggregation and memoisation to reduce render work and payload size.",
    },
    {
      id: 4,
      title: "Primera Dental Hub",
      category: "ecommerce",
      subcategory: "Web Development",
      period: "Jul 2025 - Present",
      image: "/assets/projects/Primeradental.png",
      description:
        "Specialised dental e-commerce platform for products, instruments, and equipment.",
      features: [
        "Next.js customer website with performance-first pages",
        "Admin workflow for products and orders",
        "Optimised search and listing UX",
        "Secure auth patterns and role-based access",
      ],
      tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://primeradental-demo.vercel.app",
      githubLink: "https://github.com/MuskuNishitha/primeradental",
      challenges: "Handling catalogue scale and fast search.",
      solution: "Improved indexing and query patterns for quick results.",
    },
  ],
};

export const fallbackResume = {
  experiences: [
    {
      role: "MERN Stack & React Native Developer",
      company: "Dexterous Technology",
      duration: "Jun 2024 - Present",
      points: [
        "Developed scalable web & mobile apps using MERN + React Native",
        "Improved API performance by ~30% with optimized queries",
        "Built authentication, dashboards, and real-time features",
        "Handled production deployment & bug fixing",
      ],
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Redux"],
    },
    {
      role: "Intern Developer",
      company: "Dexterous Technology",
      duration: "Apr 2024 - May 2024",
      points: [
        "Built responsive UI components using React",
        "Integrated REST APIs and improved data flow",
        "Fixed bugs and improved application stability",
      ],
      tech: ["React", "Node.js", "Express"],
    },
    {
      role: "Full Stack Trainee",
      company: "JSpiders, Punjagutta",
      duration: "Jun 2023 - Apr 2024",
      points: [
        "Learned full-stack development (JS, React, Node, MongoDB)",
        "Built CRUD & API-based mini projects",
        "Practiced DSA and problem-solving daily",
        "Worked with Git and real-world project structure",
      ],
      tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
  ],
  education: [
    {
      time: "Aug 2020 - Jun 2023",
      title: "Bachelor of Business Administration (BBA)",
      place: "A.V. College of Arts, Science & Commerce, Hyderabad",
      cgpa: "CGPA: 8.42/10",
    },
    {
      time: "Aug 2018 - Jun 2020",
      title: "Intermediate (MPC)",
      place: "Sri Aryabhata Junior College, Kamareddy",
      cgpa: "CGPA: 9.2/10",
    },
  ],
  certifications: [
    {
      title: "Full Stack Java Developer",
      issuer: "JSPiders, Punjagutta",
      year: "2023",
      icon: "☕",
    },
    {
      title: "Best Performer of the Month",
      issuer: "Dexterous Technology",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Zero Critical Bugs Achievement",
      issuer: "Dexterous Technology",
      year: "2024",
      icon: "🐛",
    },
    {
      title: "95%+ Task Completion",
      issuer: "Dexterous Technology",
      year: "2024",
      icon: "✅",
    },
  ],
  resumeUrl: "/Musku_Nishitha_2_Y.OE_Mernstack.pdf",
};

export const fallbackSettings = {
  defaultTheme: "dark", // "dark" | "light"
  defaultPrimaryColor: "purple",
};

export const fallbackServices = {
  title: "My Quality Services",
  subtitle: "What I Do",
  description:
    "I transform ideas into scalable web and mobile solutions that are clean, fast, and reliable.",
  services: [
    {
      num: "01",
      name: "Full-Stack MERN Development",
      desc: "Build end-to-end web applications with React.js, Next.js, Node.js, Express.js, and MongoDB.",
    },
    {
      num: "02",
      name: "Cross-Platform Mobile Apps",
      desc: "Create React Native apps with smooth UI, API integration, and production-ready flows.",
    },
    {
      num: "03",
      name: "E-Commerce Platforms",
      desc: "Develop modern commerce experiences with customer sites, admin panels, and mobile apps.",
    },
    {
      num: "04",
      name: "Dashboards & Analytics",
      desc: "Ship admin dashboards and reporting tools that make data easy to manage and act on.",
    },
  ],
};

export const fallbackAbout = {
  profile: {
    firstName: "Musku",
    lastName: "Nishitha",
    role: [
      "Frontend Developer",
      "React.js Developer",
      "MERN Stack Developer",
      "Mobile App Developer",
    ],
    tagline: "React & React Native Developer | Building Modern Apps",
    description:
      "Passionate full-stack MERN & React Native developer with 2+ years of professional experience building production-ready web and mobile applications, integrating REST APIs, and delivering on time.",
    birthdate: "2003-08-11",
    available: true,
    address: "Sr Nagar, Hyderabad",
    experience: "2",
    nationality: "Indian",
    completedProjects: "6",
    happyCustomers: "3",
    languages: ["English", "Telugu", "Hindi"],
    email: "muskunishitha2003@gmail.com",
    phone: "7416264657",
    freelance: true,
    socialLinks: {
      github: "https://github.com/MuskuNishitha",
      linkedin: "https://www.linkedin.com/in/musku-nishitha-7a535b36b",
      instagram: "muskunishitha2003@gmail.com",
    },
  },
  skills: [
    { name: "React.js", percentage: 85, icon: "React" },
    { name: "React Native", percentage: 83, icon: "Mobile" },
    { name: "Next.js", percentage: 85, icon: "Next" },
    { name: "Node.js", percentage: 80, icon: "Node" },
    { name: "Express.js", percentage: 84, icon: "API" },
    { name: "MongoDB", percentage: 82, icon: "DB" },
    { name: "Redux Toolkit", percentage: 82, icon: "State" },
    { name: "Tailwind CSS", percentage: 86, icon: "UI" },
    { name: "JavaScript", percentage: 82, icon: "JS" },
  ],
  education: fallbackResume.education,
  experience: fallbackResume.experiences,
  stats: [
    {
      value: "2+",
      label: "Years Experience",
      icon: "Work",
      color: "from-primary to-secondary",
    },
    {
      value: "6+",
      label: "Projects Completed",
      icon: "Projects",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "3+",
      label: "Happy Clients",
      icon: "Clients",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "Open",
      label: "Availability",
      icon: "Status",
      color: "from-orange-500 to-red-500",
    },
  ],
};
