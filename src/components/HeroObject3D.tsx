import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import * as THREE from "three";

const FloatingObject = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  let t = 0;
  
  // Use useMemo to optimize geometry and material creation
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(() => new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), []);

  useFrame((_, delta) => {
    // Use a smaller delta multiplier for smoother animation
    t += delta * 0.8;
    if (meshRef.current) {
      // Reduce rotation speed for smoother animation
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(t) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} geometry={geometry} material={material}>
      <Edges
        scale={1.05}
        threshold={15}
        color="#00ffff" // Neon cyan
        linewidth={2} // Reduced line width for better performance
      />
    </mesh>
  );
};

const HeroObject3D: React.FC = () => {
  return (
    <div style={{ 
      width: "100%", 
      height: "100vh", 
      background: "transparent",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 10, // Ensure it's above background and visible over other sections
      pointerEvents: "none" // Allow clicking through to elements behind
    }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingObject />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default HeroObject3D;
