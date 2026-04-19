import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- Particle Background ---
const ParticleField = () => {
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  const mouse = useRef(new THREE.Vector2());
  const { viewport } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    
    // Smooth mouse follow
    const x = (state.mouse.x * viewport.width) / 2;
    const y = (state.mouse.y * viewport.height) / 2;
    mouse.current.lerp(new THREE.Vector2(x, y), 0.05);

    // Subtle global rotation
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;

    // Repulse effect based on mouse
    const positionsAttr = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const curX = positions[idx];
      const curY = positions[idx + 1];
      
      const dx = curX - mouse.current.x * 2;
      const dy = curY - mouse.current.y * 2;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 3) {
        const force = (3 - dist) / 3;
        positionsAttr.setX(i, curX + (dx / dist) * force * 0.1);
        positionsAttr.setY(i, curY + (dy / dist) * force * 0.1);
      } else {
        // Return to original
        const origX = positions[idx];
        const origY = positions[idx + 1];
        positionsAttr.setX(i, THREE.MathUtils.lerp(positionsAttr.getX(i), origX, 0.05));
        positionsAttr.setY(i, THREE.MathUtils.lerp(positionsAttr.getY(i), origY, 0.05));
      }
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00F0FF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

// --- The Antigravity Core ---
const InteractiveCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Core rotation
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Mouse hover reaction (speed up distortion and slight pull)
    const targetX = (state.mouse.x * viewport.width) / 10;
    const targetY = (state.mouse.y * viewport.height) / 10;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 128, 128]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#050505"
        attach="material"
        distort={0.4} // Base distortion
        speed={2} // Fluid speed
        roughness={0.2}
        metalness={0.8}
        emissive="#7000FF"
        emissiveIntensity={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
};

export const AIBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        {/* Lighting Strategy: Void & Neon */}
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#00F0FF" />
        <directionalLight position={[-10, -10, -10]} intensity={3} color="#7000FF" />
        
        <ParticleField />
        <InteractiveCore />
      </Canvas>
    </div>
  );
};

export default AIBackground;
