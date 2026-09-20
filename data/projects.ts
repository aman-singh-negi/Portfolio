export const projects = [
  {
    slug: "lunar-lander",
    title: "Lunar Landing Module using Deep Learning and Neural Networks",
    description: "Lunar Landing Module using Deep Learning and Neural Networks is a Deep Reinforcement Learning project that trains an agent to control a lunar lander in the Gymnasium LunarLander-v3 simulation. The agent uses a Deep Q-Network (DQN) to estimate Q-values for possible actions and learns an effective landing policy through trial-and-error and reward feedback. Double DQN, experience replay, target networks, epsilon-greedy exploration, reward clipping, and Huber loss are used to improve training stability and decision-making. The model was trained for 2000 episodes and achieved a peak average reward of approximately 58.",
    category: "AI · Machine Learning · Reinforcement Learning",
    date: "Nov 2025 -- Jan 2026",
    github: "https://github.com/aman-singh-negi/Lunar-Lander",
    demo: null,
    image: "/images/projects/lunarlanderimage.jpg",
    featured: true,
    technologies: ["Python", "Deep Learning", "Neural Networks", "Reinforcement Learning", "Gymnasium"]
  },
  {
    slug: "institutional-inspection",
    title: "AI-Driven Institutional Inspection System (SIH FINAL)",
    description: "AI-Driven Institutional Inspection System is a full-stack, multi-modal AI platform designed to automate and streamline institutional inspections by combining computer vision for infrastructure and equipment assessment, ML-based building age and sustainability prediction, NLP-driven document processing and report generation, anomaly detection for identifying recurring inspection issues, and rule-based AICTE/UGC compliance verification. The system integrates these outputs into a unified inspection workflow, enabling faster analysis, consistent evaluation, automated compliance checks, and structured inspection reports.",
    category: "AI · Full Stack · Product",
    date: "Aug 2025 -- Dec 2025",
    github: "https://github.com/Aksh2908/U.I.W.A",
    demo: null,
    image: "/images/projects/institutioninspectionsystem.jpg",
    featured: true,
    technologies: ["AI/ML", "Machine Learning", "Computer Vision", "Full Stack"]
  },
  {
    slug: "encrypty",
    title: "Encrypty – Secure File Encryption",
    description: "Built a client-side file encryption tool using JavaScript, supporting secure upload, encryption, and decryption. The application ensures privacy by processing files entirely in the browser without server-side storage, using FileReader and Blob APIs for file handling with symmetric encryption for optimal performance.",
    category: "Security · Web Development",
    date: "Mar 2025 -- Jul 2025",
    github: "https://github.com/aman-singh-negi/Encrypty",
    demo: null,
    image: "/images/projects/encrypty.jpg",
    featured: true,
    technologies: ["JavaScript", "File APIs", "Encryption", "Web Development"]
  },
  {
    slug: "drowsiness-detection",
    title: "Drowsiness Detection System",
    description: "Drowsiness Detection System is a real-time computer vision and deep learning application that monitors driver fatigue through webcam input. It uses OpenCV Haar Cascades for face and eye detection, a CNN trained on 24×24 grayscale eye images to classify eye states, and MediaPipe facial landmarks to detect yawning and head nodding. Temporal thresholding and adaptive calibration reduce false alerts, while Streamlit provides a real-time dashboard with configurable detection parameters and Pygame enables audio warnings.",
    category: "AI · Computer Vision · Real-time Systems",
    date: "Sep 2024 -- Jan 2025",
    github: "https://github.com/aman-singh-negi/Drowsiness_Detection",
    demo: null,
    image: "/images/projects/drowsiness.png",
    featured: true,
    technologies: ["Python", "OpenCV", "MediaPipe", "CNNs", "Computer Vision", "Real-time Systems"]
  }
];
