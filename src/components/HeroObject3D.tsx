import { useRef, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, Sparkles, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { ThemeContext } from '../context/ThemeContext';

const AntigravityCore = () => {
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const { theme } = useContext(ThemeContext);
  const { pointer, viewport } = useThree();

  useFrame((_state, delta) => {
    if (innerMeshRef.current && outerMeshRef.current) {
      // Base rotation - counter-rotating rings
      innerMeshRef.current.rotation.x += delta * 0.2;
      innerMeshRef.current.rotation.y += delta * 0.3;
      
      outerMeshRef.current.rotation.x -= delta * 0.1;
      outerMeshRef.current.rotation.y -= delta * 0.15;
      outerMeshRef.current.rotation.z += delta * 0.05;

      // Mouse tracking interpolation
      const targetX = (pointer.x * viewport.width) / 10;
      const targetY = (pointer.y * viewport.height) / 10;
      
      // Floating Core
      const lerpSpeed = 0.04;
      innerMeshRef.current.position.x = THREE.MathUtils.lerp(innerMeshRef.current.position.x, targetX, lerpSpeed);
      innerMeshRef.current.position.y = THREE.MathUtils.lerp(innerMeshRef.current.position.y, targetY, lerpSpeed);
      outerMeshRef.current.position.x = THREE.MathUtils.lerp(outerMeshRef.current.position.x, targetX * 1.2, lerpSpeed);
      outerMeshRef.current.position.y = THREE.MathUtils.lerp(outerMeshRef.current.position.y, targetY * 1.2, lerpSpeed);
      
      // Scale pop
      const targetScale = 1 + (Math.abs(pointer.x) + Math.abs(pointer.y)) * 0.15;
      innerMeshRef.current.scale.setScalar(THREE.MathUtils.lerp(innerMeshRef.current.scale.x, targetScale, 0.05));
      outerMeshRef.current.scale.setScalar(THREE.MathUtils.lerp(outerMeshRef.current.scale.x, targetScale + 0.2, 0.05));
    }
  });

  const isDark = theme === 'dark';

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <group>
        {/* Inner Solid Core */}
        <mesh ref={innerMeshRef}>
          <icosahedronGeometry args={[1.2, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={1.0}
            anisotropy={0.4}
            distortion={0.3}
            distortionScale={0.4}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1}
            clearcoat={1}
            attenuationDistance={isDark ? 0.3 : 0.8}
            attenuationColor={isDark ? '#67e8f9' : '#0f766e'}
            color={isDark ? '#08101a' : '#fafafa'}
            transmission={1}
            opacity={1}
          />
        </mesh>
        
        {/* Outer Wireframe Shell */}
        <mesh ref={outerMeshRef}>
          <dodecahedronGeometry args={[1.8, 1]} />
          <meshStandardMaterial 
            color={isDark ? '#8b5cf6' : '#ff6b35'} 
            wireframe 
            transparent 
            opacity={isDark ? 0.4 : 0.6}
            emissive={isDark ? '#8b5cf6' : '#ff6b35'}
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>
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
        <AntigravityCore />
        <Sparkles 
          count={250} 
          scale={14} 
          size={3} 
          speed={0.6} 
          opacity={0.4} 
          color="#8b5cf6" 
        />
      </Canvas>
    </div>
  );
};

export default HeroObject3D;
