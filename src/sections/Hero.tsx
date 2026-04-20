import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Sparkles, Text } from '@react-three/drei';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import * as THREE from 'three';

// 3D Crystal Component
const SkillsIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation animation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
    
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Crystal/Diamond Shape */}
      <mesh 
        ref={meshRef} 
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[1.8, 0]} />
        <meshPhysicalMaterial 
          color={hovered ? "#2128bd" : "#005ffe"}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.3}
          thickness={0.5}
          emissive={hovered ? "#2128bd" : "#005ffe"}
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh 
        position={[0, 0, 0]}
      >
        <octahedronGeometry args={[1.85, 0]} />
        <meshBasicMaterial 
          color="#ffcc57"
          wireframe={true}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner glowing core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial 
          color="#ffe5e3"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

// Floating Card Component
const FloatingCard = ({ position, rotation, color, text, delay = 0 }) => {
  const meshRef = useRef();
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Delay the appearance of each card
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Orbit animation
      const time = state.clock.getElapsedTime() * 0.5;
      meshRef.current.position.x = position[0] + Math.sin(time + position[1]) * 1.5;
      meshRef.current.position.z = position[2] + Math.cos(time + position[0]) * 1.5;
      meshRef.current.rotation.x = rotation[0] + time * 0.1;
      meshRef.current.rotation.y = rotation[1] + time * 0.1;
    }
  });

  if (!visible) return null;

  return (
    <motion.mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay / 1000 }}
    >
      <planeGeometry args={[1.5, 0.8]} />
      <meshStandardMaterial 
        color={active ? '#ffffff' : color} 
        transparent 
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
        side={THREE.DoubleSide}
      />
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.12}
        color={active ? color : '#ffffff'}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </motion.mesh>
  );
};

// Main 3D Scene Component
const Scene = () => {
  // Card data with positions, rotations, colors, and text
  const cards = [
    { position: [0, 0, -2], rotation: [0, 0, 0], color: '#00ffe7', text: 'React', delay: 500 },
    { position: [2, 1, -3], rotation: [0.1, 0.2, 0], color: '#ff75b5', text: 'TypeScript', delay: 700 },
    { position: [-2, -1, -2.5], rotation: [-0.1, -0.2, 0], color: '#9945FF', text: 'Three.js', delay: 900 },
    { position: [1, -1.5, -3], rotation: [0.2, -0.1, 0], color: '#ffcc57', text: 'Node.js', delay: 1100 },
    { position: [-1.5, 1.5, -2.5], rotation: [-0.2, 0.1, 0], color: '#00ffe7', text: 'Tailwind', delay: 1300 },
    { position: [0, 2, -3], rotation: [0.3, 0, 0], color: '#ff75b5', text: 'Framer Motion', delay: 1500 },
  ];

  return (
    <>
      {/* Gradient Background */}
      <color attach="background" args={['#0f0f0f']} />
      <fog attach="fog" args={['#0f0f0f', 8, 25]} />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#2128bd" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#005ffe" />
      <spotLight position={[0, 10, 0]} intensity={0.6} color="#ffcc57" angle={0.3} />
      
      {/* Background Particles */}
      <Sparkles count={200} scale={15} size={2} speed={0.2} opacity={0.3} color="#2128bd" />
      
      {/* Floating Cards */}
      {cards.map((card, index) => (
        <FloatingCard 
          key={index}
          position={card.position}
          rotation={card.rotation}
          color={card.color}
          text={card.text}
          delay={card.delay}
        />
      ))}
      
      {/* Central Crystal Object */}
      <SkillsIcosahedron />
      
      {/* Interactive Controls */}
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        enablePan={false} 
        minPolarAngle={Math.PI/3} 
        maxPolarAngle={Math.PI/1.8}
        minAzimuthAngle={-Math.PI/4}
        maxAzimuthAngle={Math.PI/4}
      />
    </>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  // Start animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Small delay after loading screen disappears
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Split text into individual letters for animation
  const nameLetters = "Aman Singh Negi".split("");

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative snap-start bg-dark overflow-hidden"
      style={{ minHeight: '100vh' }} // Fallback inline style
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-16 z-10">
        <AnimatePresence>
          {isAnimated && (
            <>
              <motion.h2 
                className="text-lg md:text-xl font-medium text-accent1 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                data-text="Hi, I'm"
              >
                Hi, I'm
              </motion.h2>
              
              <motion.div
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-wrap"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {nameLetters.map((letter, index) => (
                  <motion.span 
                    key={index} 
                    variants={letterVariants}
                    className={letter === " " ? "mr-4" : ""}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Competitive Programmer & Full Stack Developer passionate about solving complex problems and building innovative solutions.
              </motion.p>
            </>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {isAnimated && (
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
          <a 
            href="https://github.com/amansingh331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent1 text-white rounded-lg hover:bg-accent1/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FiGithub className="text-lg" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/amansingh331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent2 text-white rounded-lg hover:bg-accent2/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FiLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a 
            href="https://leetcode.com/amansingh331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <SiLeetcode className="text-lg" />
            LeetCode
          </a>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {isAnimated && (
            <motion.div 
              className="flex flex-wrap gap-2 text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.div 
                className="px-3 py-1 bg-gray-800 rounded-full backdrop-blur-sm border border-accent1/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 231, 0.1)" }}
              >
                Python
              </motion.div>
              <motion.div 
                className="px-3 py-1 bg-gray-800 rounded-full backdrop-blur-sm border border-accent2/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 117, 181, 0.1)" }}
              >
                C++
              </motion.div>
              <motion.div 
                className="px-3 py-1 bg-gray-800 rounded-full backdrop-blur-sm border border-accent1/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 231, 0.1)" }}
              >
                React
              </motion.div>
              <motion.div 
                className="px-3 py-1 bg-gray-800 rounded-full backdrop-blur-sm border border-accent2/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 117, 181, 0.1)" }}
              >
                Node.js
              </motion.div>
              <motion.div 
                className="px-3 py-1 bg-gray-800 rounded-full backdrop-blur-sm border border-accent1/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 231, 0.1)" }}
              >
                Machine Learning
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Right Content - 3D Scene */}
      <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-screen relative bg-gradient-to-br from-[#2128bd]/10 via-[#005ffe]/5 to-[#ffcc57]/10 rounded-2xl overflow-hidden border border-[#2128bd]/20 shadow-2xl shadow-[#2128bd]/10 mx-4 sm:mx-0">
        <AnimatePresence>
          {isAnimated && (
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <Scene />
              </Canvas>
              <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-[#2128bd]/20 backdrop-blur-sm p-3 rounded-lg border border-[#2128bd]/30">
                Interactive 3D Cards - Drag to explore
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Scroll Down Indicator */}
      <AnimatePresence>
        {isAnimated && (
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            onClick={scrollToNextSection}
          >
            <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent1 transition-colors duration-300">
              <span className="text-sm font-medium">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiArrowDown className="text-xl" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;