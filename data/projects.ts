export const projects = [
  {
    slug: "lunar-lander",
    title: "Lunar Landing Module using Deep Learning and Neural Networks",
    description: "Developed a Deep Q-Network (DQN) agent to solve the Gymnasium LunarLander-v3 environment.",
    category: "AI · Machine Learning · Reinforcement Learning",
    date: "Nov 2025 -- Jan 2026",
    github: "https://github.com/aman-singh-negi/Lunar-Lander",
    demo: null,
    image: "/images/projects/lunarlanderimage.jpg",
    featured: true,
    technologies: ["Python", "Deep Learning", "Neural Networks", "Reinforcement Learning", "Gymnasium"],
    details: {
      overview: "Developed a Deep Q-Network (DQN) agent to solve the Gymnasium LunarLander-v3 environment.",
      problem: "The LunarLander-v3 environment requires an agent to learn how to land a spacecraft safely on the moon's surface using continuous control.",
      approach: "Implemented Deep Q-Learning with experience replay, target networks, and Double DQN to improve stability.",
      architecture: "The agent uses a neural network to approximate the Q-function, with experience replay buffer and target network for stable training.",
      engineeringDecisions: [
        "Used Double DQN to reduce overestimation bias",
        "Implemented experience replay for sample efficiency",
        "Added target networks for training stability",
        "Optimized hyperparameters for reward convergence"
      ],
      challenges: [
        "Training instability in early episodes",
        "Balancing exploration vs exploitation",
        "Achieving consistent landing performance"
      ],
      result: "Achieved ~58 average reward over 2000 training episodes with improved stability using Double DQN, experience replay, and target networks.",
      technology: ["Python", "Deep Learning", "Neural Networks", "Reinforcement Learning", "Gymnasium", "TensorFlow/PyTorch"]
    }
  },
  {
    slug: "institutional-inspection",
    title: "AI-Driven Institutional Inspection System (SIH FINAL)",
    description: "Built a multi-model AI pipeline for automated institutional inspection and compliance analysis.",
    category: "AI · Full Stack · Product",
    date: "Aug 2025 -- Dec 2025",
    github: "https://github.com/Aksh2908/U.I.W.A",
    demo: null,
    image: "/images/projects/institutioninspectionsystem.jpg",
    featured: true,
    technologies: ["AI/ML", "Machine Learning", "Computer Vision", "Full Stack"],
    details: {
      overview: "Built a multi-model AI pipeline for automated institutional inspection and compliance analysis.",
      problem: "Manual institutional inspection is time-consuming and prone to human error. Institutions need automated compliance checking.",
      approach: "Developed a multi-model AI pipeline that automates infrastructure assessment and compliance checking.",
      architecture: "Multi-model AI system with separate models for infrastructure assessment, building age prediction, and compliance checking.",
      engineeringDecisions: [
        "Used ensemble of ML models for different inspection aspects",
        "Automated AICTE/UGC compliance checking",
        "Integrated building age/sustainability prediction"
      ],
      challenges: [
        "Handling diverse institutional data formats",
        "Ensuring accurate compliance detection",
        "Building scalable pipeline for multiple institutions"
      ],
      result: "Smart India Hackathon 2024 Finalist (top 2.4% teams nationally) for AI-driven institutional inspection (SIH1730).",
      technology: ["AI/ML", "Machine Learning", "Computer Vision", "Full Stack", "Python", "React"]
    }
  },
  {
    slug: "encrypty",
    title: "Encrypty – Secure File Encryption",
    description: "Built a client-side file encryption tool using JavaScript, supporting secure upload, encryption, and decryption.",
    category: "Security · Web Development",
    date: "Mar 2025 -- Jul 2025",
    github: "https://github.com/aman-singh-negi/Encrypty",
    demo: null,
    image: "/images/projects/encrypty.jpg",
    featured: true,
    technologies: ["JavaScript", "File APIs", "Encryption", "Web Development"],
    details: {
      overview: "Built a client-side file encryption tool using JavaScript, supporting secure upload, encryption, and decryption.",
      problem: "Users need a simple way to encrypt files without uploading them to servers, ensuring privacy and security.",
      approach: "Implemented client-side encryption using JavaScript FileReader and Blob APIs with symmetric encryption.",
      architecture: "Client-side encryption tool with upload → encrypt → download workflow, no server storage of files.",
      engineeringDecisions: [
        "Chose client-side encryption for privacy",
        "Used FileReader and Blob APIs for file handling",
        "Implemented symmetric encryption for performance"
      ],
      challenges: [
        "Handling large files in browser",
        "Addressing client-side security limitations",
        "Creating intuitive upload-encrypt-download workflow"
      ],
      result: "Successfully implemented secure client-side file encryption with upload, encryption, and download workflow.",
      technology: ["JavaScript", "FileReader API", "Blob API", "Encryption", "Web Development"]
    }
  },
  {
    slug: "drowsiness-detection",
    title: "Drowsiness Detection System",
    description: "Built a real-time driver monitoring system using CNN-based eye-state classification with 95.4% accuracy.",
    category: "AI · Computer Vision · Real-time Systems",
    date: "Sep 2024 -- Jan 2025",
    github: "https://github.com/aman-singh-negi/Drowsiness_Detection",
    demo: null,
    image: "/images/projects/drowsiness.png",
    featured: true,
    technologies: ["Python", "OpenCV", "MediaPipe", "CNNs", "Computer Vision", "Real-time Systems"],
    details: {
      overview: "Built a real-time driver monitoring system using CNN-based eye-state classification with 95.4% accuracy.",
      problem: "Driver fatigue is a major cause of accidents. Real-time drowsiness detection can prevent accidents by alerting drivers.",
      approach: "Developed a CNN-based eye-state classification system with temporal filtering and adaptive calibration.",
      architecture: "Real-time computer vision system using CNN for eye-state classification, with OpenCV and MediaPipe for facial feature detection.",
      engineeringDecisions: [
        "Used CNN for accurate eye-state classification",
        "Integrated OpenCV Haar Cascades for face detection",
        "Added MediaPipe for comprehensive facial analysis"
      ],
      challenges: [
        "Achieving real-time performance",
        "Handling varying lighting conditions",
        "Reducing false positives in fatigue detection"
      ],
      result: "Achieved 95.4% accuracy with real-time detection using CNN-based classification, temporal filtering, and adaptive calibration with audio alerts.",
      technology: ["Python", "OpenCV", "MediaPipe", "CNNs", "Computer Vision", "Real-time Systems", "TensorFlow"]
    }
  }
];
