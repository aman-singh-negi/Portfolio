import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Sparkles, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Floating Cube Component with distortion effect
const FloatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  
  // Animate the cube with more dynamic effects
  useFrame((state) => {
    if (meshRef.current && wireframeRef.current) {
      // Pulse effect for the main cube
      meshRef.current.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime) * 0.3;
      
      // Rotate wireframe slightly differently for interesting effect
      wireframeRef.current.rotation.x = meshRef.current.rotation.x + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      wireframeRef.current.rotation.z = meshRef.current.rotation.z + Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2.5}>
      <mesh 
        ref={meshRef} 
        position={[0, 0, 0]}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial 
          color="#00ffe7"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.6}
          thickness={0.5}
          emissive="#00ffe7"
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Wireframe overlay with animation */}
      <mesh 
        ref={wireframeRef}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshBasicMaterial 
          color="#ff75b5"
          wireframe={true}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Add floating text elements around the cube */}
      <group position={[0, 2.5, 0]} scale={0.2}>
        <Text
          color="#ff75b5"
          fontSize={2}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          Developer
        </Text>
      </group>
    </Float>
  );
};

// Animated floating sphere component
const FloatingSphere = ({ position, color, size, speed }: { position: [number, number, number], color: string, size: number, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.003;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <MeshDistortMaterial
        color={color}
        speed={0.5}
        distort={0.3}
        radius={1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// Main 3D Scene Component
const Scene = () => {
  return (
    <>
      {/* Gradient Background */}
      <color attach="background" args={['#1a1a2e']} />
      <fog attach="fog" args={['#1a1a2e', 8, 25]} />
      
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00ffe7" />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#ff75b5" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      
      {/* Enhanced Background Particles */}
      <Sparkles count={200} scale={20} size={2} speed={0.3} opacity={0.4} color="#00ffe7" />
      <Sparkles count={100} scale={15} size={1.5} speed={0.2} opacity={0.3} color="#ff75b5" />
      
      {/* Decorative floating spheres */}
      <FloatingSphere position={[-4, 2, -5]} color="#ff75b5" size={0.3} speed={1.5} />
      <FloatingSphere position={[4, -2, -6]} color="#00ffe7" size={0.2} speed={1.2} />
      <FloatingSphere position={[3, 3, -4]} color="#ffffff" size={0.15} speed={1.8} />
      <FloatingSphere position={[-3, -3, -5]} color="#ff75b5" size={0.25} speed={1.3} />
      
      {/* Floating Cube */}
      <FloatingCube />
      
      {/* Interactive Controls */}
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.7} 
        enablePan={false} 
        minPolarAngle={Math.PI/3} 
        maxPolarAngle={Math.PI/1.8}
        minAzimuthAngle={-Math.PI/4}
        maxAzimuthAngle={Math.PI/4}
      />
    </>
  );
};

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Animated text component with letter animation
const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.h2 
      ref={ref}
      className={className || "text-3xl sm:text-4xl font-bold mb-4"}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.1 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={textVariants}
          custom={index}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-16 sm:py-20 relative snap-start bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent1 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent2 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent3 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedText text="About Me" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Get to know me better and what drives my passion for technology and development.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 overflow-hidden">
          {/* Left Content - Text */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative line element */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent1 via-accent2 to-accent3 rounded-full hidden lg:block"></div>
            
            <div className="lg:pl-6">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold mb-4 text-accent1 dark:text-accent1 inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Who I Am
                <motion.div 
                  className="h-1 w-0 bg-accent2" 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm a passionate developer with a strong foundation in competitive programming and full-stack development. 
                My journey in technology began with solving complex algorithmic problems, which taught me how to approach 
                challenges with analytical thinking and creativity.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                With expertise in both frontend and backend technologies, I enjoy creating seamless, user-friendly applications 
                that solve real-world problems. I'm constantly learning and exploring new technologies to stay at the forefront 
                of the rapidly evolving tech landscape.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {["Problem Solver", "Creative Thinker", "Continuous Learner", "Team Player"].map((skill, index) => (
                  <motion.div 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-accent1/10 to-accent2/10 dark:from-accent1/20 dark:to-accent2/20 backdrop-blur-sm border border-accent1/20 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content - Image and 3D Object */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-accent1/10 animate-ping-slow opacity-70"></div>
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-accent2/10 animate-ping-slow animation-delay-1000 opacity-70"></div>
            
            {/* Enhanced Profile Image with Floating Animation */}
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-gray-800/80 backdrop-blur-sm"
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 3, 0, -3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.3 } }}
            >
              {/* Glow effect behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent1 to-accent2 opacity-30 blur-lg"></div>
              
              <img 
                src="/profile-image.jpg" 
                alt="Aman Singh Negi" 
                className="w-64 sm:w-72 md:w-80 h-auto object-cover relative z-10"
              />
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-accent1 opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-accent2 opacity-80"></div>
            </motion.div>
            
            {/* Enhanced 3D Scene Container */}
            <div className="absolute inset-0 w-full h-full -z-10">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <Canvas className="touch-none">
                  <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                  <Scene />
                </Canvas>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;