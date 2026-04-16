import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CoreObject = () => {
  const groupRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
    }

    if (shellRef.current) {
      shellRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  const lineMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#7aa9ff',
        wireframe: true,
        transparent: true,
        opacity: 0.42,
      }),
    [],
  );

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshPhysicalMaterial
            color="#1d4dff"
            roughness={0.08}
            transmission={0.95}
            thickness={1.2}
            metalness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.18}
          />
        </mesh>
        <mesh ref={shellRef} material={lineMaterial} scale={1.35}>
          <icosahedronGeometry args={[1.25, 1]} />
        </mesh>
        <mesh position={[0, 0, -0.2]} scale={0.38}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#5af0de" emissive="#5af0de" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </Float>
  );
};

const HeroObject3D = () => {
  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4.8], fov: 42 }}>
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#050913', 5, 8]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 4, 3]} intensity={1.1} color="#8db7ff" />
        <pointLight position={[-3, -2, 2]} intensity={1.3} color="#ff8c8c" />
        <CoreObject />
      </Canvas>
    </div>
  );
};

export default HeroObject3D;
