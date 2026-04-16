import { useRef, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, Sparkles, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { ThemeContext } from '../context/ThemeContext';

const LiquidTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useContext(ThemeContext);
  const { pointer, viewport } = useThree();

  useFrame((_state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;

      // Mouse tracking interpolation
      const targetX = (pointer.x * viewport.width) / 8;
      const targetY = (pointer.y * viewport.height) / 8;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
      
      // Slight scale pop on interaction
      const targetScale = 1 + (Math.abs(pointer.x) + Math.abs(pointer.y)) * 0.1;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05));
    }
  });

  const isDark = theme === 'dark';

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Torus Knot Geometry for liquid complex shapes */}
        <torusKnotGeometry args={[1.5, 0.5, 256, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.5}
          chromaticAberration={1.2}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          attenuationDistance={isDark ? 0.5 : 1}
          attenuationColor={isDark ? '#8b5cf6' : '#ffffff'}
          color={isDark ? '#1a1a1a' : '#fafafa'}
          transmission={1}
          opacity={1}
        />
      </mesh>
    </Float>
  );
};

const LightingSetup = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <>
      <ambientLight intensity={isDark ? 0.2 : 0.8} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 1 : 2} color={isDark ? '#8b5cf6' : '#ffffff'} />
      <pointLight position={[-10, -10, -5]} intensity={isDark ? 2 : 0.5} color={isDark ? '#06b6d4' : '#aaaaaa'} />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={isDark ? 5 : 2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color={isDark ? '#8b5cf6' : '#ffffff'} />
          <Lightformer intensity={isDark ? 2 : 1} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} color={isDark ? '#06b6d4' : '#ffffff'} />
          <Lightformer intensity={isDark ? 2 : 1} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} color={isDark ? '#d946ef' : '#ffffff'} />
          <Lightformer intensity={isDark ? 2 : 1} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} color={isDark ? '#8b5cf6' : '#ffffff'} />
        </group>
      </Environment>
    </>
  );
};

const HeroObject3D = () => {
  return (
    <div className="h-full w-full pointer-events-none md:pointer-events-auto">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <LightingSetup />
        <LiquidTorus />
        <Sparkles 
          count={150} 
          scale={12} 
          size={2} 
          speed={0.4} 
          opacity={0.3} 
          color="#06b6d4" 
        />
      </Canvas>
    </div>
  );
};

export default HeroObject3D;
