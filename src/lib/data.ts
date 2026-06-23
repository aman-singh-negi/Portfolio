export const siteConfig = {
  name: "Aman Singh Negi",
  title: "Aman Singh Negi — Portfolio",
  description:
    "Aspiring Software Engineer with hands-on experience in AI/ML, Deep Learning, and Front-end Development.",
  url: "https://amansinghnegi.vercel.app",
  email: "lavishnegi7249@gmail.com",
  phone: "+91 6398310012",
  education: {
    degree: "B.Tech Computer Science & Engineering",
    university: "Graphic Era Hill University, Dehradun, Uttarakhand",
    cgpa: "9.16 / 10.0",
    period: "Aug 2023 — Aug 2027",
    coursework: "Operating Systems, DBMS, Algorithms, AI/ML",
  },
  class12: {
    school: "Kendriya Vidyalaya Sangathan",
    location: "Haridwar, Uttarakhand",
    score: "92.4%",
    period: "Apr 2022 — Apr 2023",
  },
  links: {
    github: "https://github.com/aman-singh-negi",
    linkedin: "https://www.linkedin.com/in/aman-singh-negi0/",
    website: "https://amansinghnegi.vercel.app/",
    codechef: "https://www.codechef.com/users/amansinghnegi0",
  },
};

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const quickOverview = [
  { label: "Projects", value: 4, suffix: "", numeric: true },
  { label: "CodeChef Rating", value: 1610, suffix: "", numeric: true },
  { label: "CGPA", value: "9.16", suffix: "", numeric: false },
  { label: "SIH Finalist", value: 2024, suffix: "", numeric: true },
  { label: "Certificates", value: 3, suffix: "", numeric: true },
  { label: "CodeChef Stars", value: 3, suffix: "★", numeric: true },
];

export const timeline = [
  {
    year: "2022",
    title: "Class 12th — 92.4%",
    description:
      "Completed Class 12 at Kendriya Vidyalaya Sangathan, Haridwar, Uttarakhand (Apr 2022 — Apr 2023).",
  },
  {
    year: "2023",
    title: "Started B.Tech CSE",
    description:
      "Joined Graphic Era Hill University, Dehradun. Relevant coursework: Operating Systems, DBMS, Algorithms, AI/ML.",
  },
  {
    year: "2024",
    title: "Drowsiness Detection System",
    description:
      "Trained a CNN with 95.4% accuracy on 10,000+ frames. Detected drowsiness within 1 second and reduced fatigue lapses by 58%.",
  },
  {
    year: "2024",
    title: "SIH Finalist — SIH1730",
    description:
      "Finalist in Smart India Hackathon 2024 among the top 2.4% teams nationally for AI-driven institutional inspection.",
  },
  {
    year: "2025",
    title: "Encrypty",
    description:
      "Built a JavaScript file encryption tool with symmetric encryption and an upload → encrypt → download workflow.",
  },
  {
    year: "2025",
    title: "Flipkart GRID 6.0",
    description:
      "Cleared the e-Commerce and Tech Quiz where 480,000+ developers participated.",
  },
  {
    year: "2026",
    title: "Lunar Lander & Certifications",
    description:
      "Built a DQN agent for LunarLander-v3 (~58 avg reward) and earned ML, AWS, and IBM Generative AI certifications.",
  },
];

export const achievements = [
  {
    title: "CodeChef 3★",
    description:
      "3-Star Coder with a maximum rating of 1610 on CodeChef.",
    icon: "code",
    link: siteConfig.links.codechef,
  },
  {
    title: "SIH Finalist 2024",
    description:
      "Finalist in Smart India Hackathon 2024 — top 2.4% nationally for AI-driven institutional inspection (SIH1730).",
    icon: "trophy",
  },
  {
    title: "Flipkart GRID 6.0",
    description:
      "Cleared the e-Commerce and Tech Quiz of Flipkart GRID 6.0 where 480,000+ developers participated.",
    icon: "zap",
  },
];

export const certificates = [
  {
    title: "Machine Learning by Andrew Ng",
    issuer: "Stanford Online",
    date: "Jan 2026",
    category: "Coursera",
    link: "https://coursera.org/share/0ca81b7a74d705122af1a27f2d2f30f0",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
  },
  {
    title: "AWS Cloud Quest: Solutions Architect",
    issuer: "Amazon",
    date: "Jan 2025",
    category: "AWS",
    link: "https://www.amazon.jobs/en/teams/amazon-future-engineer",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
  },
  {
    title: "IBM Generative AI Engineering",
    issuer: "IBM",
    date: "Jan 2026",
    category: "IBM",
    link: "https://www.coursera.org/professional-certificates/ibm-generative-ai-engineer",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
  },
];

export const projects = [
  {
    title: "Lunar Landing Module using Deep Learning and Neural Networks",
    period: "Nov 2025 — Jan 2026",
    description:
      "Developed a Deep Q-Network (DQN) agent to solve the Gymnasium LunarLander-v3 environment. Improved stability using Double DQN, experience replay, and target networks over 2,000 training episodes. Achieved ~58 average reward with epsilon decay, reward clipping, and Huber loss.",
    tech: ["Python", "Deep Learning", "DQN", "Gymnasium", "Neural Networks"],
    status: "Completed",
    github: "https://github.com/aman-singh-negi/Lunar-Lander",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
  },
  {
    title: "AI-Driven Institutional Inspection System (SIH Final)",
    period: "Aug 2025 — Dec 2025",
    description:
      "Developed a full-stack AI inspection platform, reducing verification time by 65% and lowering costs. Utilized AI-powered image recognition to evaluate buildings and predict lifespan. Processed 100+ documents per institution via NLP pipelines, cutting inspection turnaround by 80%.",
    tech: ["AI/ML", "NLP", "Computer Vision", "Full Stack", "React.js"],
    status: "SIH Final",
    github: "https://github.com/Aksh2908/U.I.W.A",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
  },
  {
    title: "Encrypty — Secure File Encryption",
    period: "Mar 2025 — Jul 2025",
    description:
      "Built a file encryption tool using JavaScript for secure upload, encryption, and decryption. Implemented symmetric encryption and handled file processing using FileReader and Blob. Designed upload → encrypt → download workflow and analyzed client-side security limitations.",
    tech: ["JavaScript", "Cryptography", "FileReader", "Blob"],
    status: "Completed",
    github: "https://github.com/aman-singh-negi/Encrypty",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
  },
  {
    title: "Drowsiness Detection System",
    period: "Sep 2024 — Jan 2025",
    description:
      "Trained a CNN model with 95.4% accuracy using a dataset of 10,000+ labeled facial frames. Detected drowsiness within 1 second latency using webcam-based input stream. Deployed audio alert triggers that reduced simulated fatigue-related response lapses by 58%.",
    tech: ["Python", "CNN", "Computer Vision", "OpenCV", "Deep Learning"],
    status: "Completed",
    github: "https://github.com/aman-singh-negi/Drowsiness_Detection",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
  },
];

export const skills = {
  Languages: ["C", "C++", "Python", "JavaScript", "HTML", "CSS"],
  "Technology / Framework": ["React.js", "Tailwind CSS"],
  Databases: ["SQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Docker"],
  "Soft Skills": [
    "Collaboration",
    "Strategic Thinking",
    "Project Management",
    "Communication",
  ],
};

export const codingProfiles = [
  {
    platform: "CodeChef",
    rating: "1610",
    solved: "3-Star Coder",
    badge: "3★",
    link: "https://www.codechef.com/users/amansinghnegi0",
    color: "#5B4638",
  },
  {
    platform: "GitHub",
    rating: "Open Source",
    solved: "Multiple repos",
    badge: "Active",
    link: "https://github.com/aman-singh-negi",
    color: "#24292F",
  },
];

export const stats = [
  { label: "Projects", value: 4 },
  { label: "CodeChef Rating", value: 1610 },
  { label: "Certificates", value: 3 },
  { label: "CGPA", value: 9.16, decimal: true },
  { label: "Class 12 Score", value: 92.4, decimal: true, suffix: "%" },
];

export const exploring = [
  { topic: "Machine Learning", progress: 80 },
  { topic: "Deep Learning", progress: 75 },
  { topic: "Front-end Development", progress: 70 },
  { topic: "System Design", progress: 55 },
];

export const funFacts = [
  {
    title: "Night Owl",
    description: "Training neural networks after midnight hits different",
    emoji: "🌙",
  },
  {
    title: "Mountain Lover",
    description: "Dehradun roots — Himalayan views fuel the focus",
    emoji: "🏔️",
  },
  {
    title: "Competitive Programmer",
    description: "3★ on CodeChef with a max rating of 1610",
    emoji: "⚡",
  },
  {
    title: "AI Enthusiast",
    description: "From DQN agents to CNN drowsiness detectors",
    emoji: "🤖",
  },
  {
    title: "Hackathon Finalist",
    description: "SIH 2024 — top 2.4% nationally (SIH1730)",
    emoji: "🏆",
  },
];

export const testimonials = [
  {
    quote:
      "Aman's SIH project demonstrated rare ability to combine AI, full-stack engineering, and real-world impact under tight deadlines.",
    author: "Team Lead",
    role: "Smart India Hackathon 2024",
  },
  {
    quote:
      "His deep learning work on the Lunar Lander shows strong fundamentals in reinforcement learning and training stability.",
    author: "Project Mentor",
    role: "AI/ML Coursework",
  },
  {
    quote:
      "Encrypty was cleanly architected — thoughtful about client-side security trade-offs while keeping the UX simple.",
    author: "Peer Reviewer",
    role: "Security Project",
  },
];

export const githubStats = {
  commits: 400,
  repositories: 15,
  stars: 10,
  languages: [
    { name: "Python", percentage: 40 },
    { name: "JavaScript", percentage: 25 },
    { name: "C++", percentage: 20 },
    { name: "HTML/CSS", percentage: 10 },
    { name: "Other", percentage: 5 },
  ],
  contributions: [
    [0, 1, 2, 1, 0, 2, 1], [1, 2, 3, 2, 1, 2, 0], [2, 1, 3, 2, 2, 1, 1],
    [1, 0, 2, 3, 1, 2, 2], [2, 2, 1, 2, 3, 1, 0], [1, 3, 2, 1, 2, 2, 1],
    [0, 2, 1, 2, 1, 3, 2], [2, 1, 0, 2, 3, 2, 1], [1, 2, 2, 3, 1, 1, 2],
    [2, 3, 1, 2, 0, 2, 1], [1, 1, 2, 2, 3, 1, 0], [0, 2, 3, 1, 2, 2, 1],
    [2, 1, 2, 3, 1, 0, 2], [1, 3, 2, 1, 2, 2, 1], [2, 2, 1, 0, 3, 2, 1],
    [1, 0, 2, 2, 1, 3, 2], [2, 1, 3, 2, 1, 2, 0], [0, 2, 1, 3, 2, 1, 2],
    [1, 2, 2, 1, 3, 2, 1], [2, 3, 1, 2, 2, 0, 1], [1, 2, 0, 2, 3, 1, 2],
    [2, 1, 2, 1, 2, 3, 1], [1, 0, 3, 2, 1, 2, 2], [2, 2, 1, 2, 0, 3, 1],
    [1, 2, 2, 3, 1, 1, 0], [0, 1, 2, 2, 3, 2, 1], [2, 3, 1, 0, 2, 1, 2],
    [1, 2, 1, 2, 3, 2, 0], [2, 1, 2, 3, 1, 0, 2], [1, 0, 2, 1, 2, 3, 2],
    [2, 2, 3, 1, 1, 2, 0], [1, 2, 0, 2, 2, 3, 1], [0, 2, 1, 3, 2, 1, 2],
    [2, 1, 2, 2, 0, 3, 1], [1, 3, 2, 1, 2, 1, 2], [2, 0, 1, 2, 3, 2, 1],
    [1, 2, 2, 1, 0, 2, 3], [2, 1, 3, 2, 2, 1, 0], [1, 0, 2, 2, 1, 3, 2],
    [2, 2, 1, 0, 2, 3, 1], [1, 2, 3, 1, 2, 0, 2], [0, 1, 2, 2, 3, 1, 2],
    [2, 3, 1, 2, 1, 2, 0], [1, 2, 0, 3, 2, 1, 2], [2, 1, 2, 2, 3, 0, 1],
    [1, 0, 2, 1, 2, 3, 2], [2, 2, 1, 3, 0, 2, 1], [1, 3, 2, 2, 1, 0, 2],
    [0, 2, 1, 2, 2, 3, 1], [2, 1, 0, 2, 3, 1, 2], [1, 2, 2, 1, 3, 2, 0],
    [2, 3, 1, 0, 2, 2, 1], [1, 1, 2, 3, 2, 0, 2], [0, 2, 3, 1, 2, 1, 2],
  ],
};

export const commandItems = [
  { label: "Projects", href: "#projects", group: "Navigation" },
  { label: "Achievements", href: "#achievements", group: "Navigation" },
  { label: "Certificates", href: "#certificates", group: "Navigation" },
  { label: "Contact", href: "#contact", group: "Navigation" },
  { label: "GitHub", href: siteConfig.links.github, group: "Links", external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, group: "Links", external: true },
  { label: "CodeChef", href: siteConfig.links.codechef, group: "Links", external: true },
];

export const aboutContent = {
  quote:
    "I enjoy designing clean interfaces and building products that feel effortless.",
  summary:
    "Aspiring Software Engineer with hands-on experience in AI/ML, Deep Learning, and Front-end Development. Proficient in Python, C++, React.js, JavaScript, and SQL, with a strong foundation in developing scalable applications, solving complex problems, and collaborating effectively in agile environments.",
  education: [
    {
      title: siteConfig.education.degree,
      institution: siteConfig.education.university,
      detail: `CGPA: ${siteConfig.education.cgpa}`,
      period: siteConfig.education.period,
      note: `Relevant Coursework: ${siteConfig.education.coursework}`,
    },
    {
      title: "Class 12th",
      institution: siteConfig.class12.school,
      detail: `Percentage: ${siteConfig.class12.score}`,
      period: siteConfig.class12.period,
      note: siteConfig.class12.location,
    },
  ],
};
