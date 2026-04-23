import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, Lightformer, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const TouchableCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animate the rotation and scale based on interaction
  useFrame((state, delta) => {
    if (meshRef.current && outerRef.current) {
      // Rotate
      const speedMultiplier = hovered ? 3 : 1;
      const clickMultiplier = clicked ? 5 : 1;
      
      meshRef.current.rotation.x += delta * 0.2 * speedMultiplier * clickMultiplier;
      meshRef.current.rotation.y += delta * 0.3 * speedMultiplier * clickMultiplier;
      
      outerRef.current.rotation.x -= delta * 0.1 * speedMultiplier;
      outerRef.current.rotation.y -= delta * 0.15 * speedMultiplier;
      outerRef.current.rotation.z += delta * 0.05 * speedMultiplier;

      // Scale transition
      const targetScale = clicked ? 1.4 : hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      const outerScale = clicked ? 1.6 : hovered ? 1.25 : 1.1;
      outerRef.current.scale.lerp(new THREE.Vector3(outerScale, outerScale, outerScale), 0.1);

      // Float effect manually based on time
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      outerRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      {/* Inner Core */}
      <mesh 
        ref={meshRef}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'none'; // custom cursor active
        }}
        onPointerOut={() => {
          setHovered(false);
          setClicked(false);
        }}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
      >
        <icosahedronGeometry args={[1.4, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={2}
          chromaticAberration={0.8}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1.5}
          clearcoat={1}
          attenuationDistance={hovered ? 0.2 : 0.6}
          attenuationColor={clicked ? '#8b5cf6' : '#22d3ee'}
          color={hovered ? '#08101a' : '#030305'}
        />
      </mesh>
      
      {/* Outer Shell */}
      <mesh ref={outerRef} raycast={() => null}>
        <dodecahedronGeometry args={[2.0, 1]} />
        <meshStandardMaterial 
          color={clicked ? '#22d3ee' : '#8b5cf6'} 
          wireframe 
          transparent 
          opacity={hovered ? 0.6 : 0.2}
          emissive={clicked ? '#22d3ee' : '#8b5cf6'}
          emissiveIntensity={hovered ? 2 : 0.5}
        />
      </mesh>
    </group>
  );
};

const LightingSetup = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-10, -10, -5]} intensity={3} color="#8b5cf6" />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#22d3ee" />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} color="#8b5cf6" />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} color="#3b82f6" />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} color="#22d3ee" />
        </group>
      </Environment>
    </>
  );
};

export default function HeroObject3D() {
  return (
    <div className="h-full w-full absolute inset-0 z-0 pointer-events-auto interactive">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <LightingSetup />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <TouchableCore />
        </Float>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#22d3ee" />
      </Canvas>
    </div>
  );
}
