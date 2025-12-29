"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Sparkles } from "@react-three/drei";

function MorphingShape({ mousePosition }) {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const [morphProgress, setMorphProgress] = useState(0);
  const [currentShape, setCurrentShape] = useState(0);

  // Define geometries for morphing
  const geometries = useMemo(() => {
    return [
      new THREE.BoxGeometry(2, 2, 2, 2, 2, 2),
      new THREE.SphereGeometry(1.3, 32, 32),
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.DodecahedronGeometry(1.3, 0),
      new THREE.IcosahedronGeometry(1.4, 0),
      new THREE.TetrahedronGeometry(1.8, 0),
    ];
  }, []);

  useFrame((state) => {
    if (meshRef.current && wireframeRef.current) {
      const time = state.clock.elapsedTime;

      // Auto rotation
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      wireframeRef.current.rotation.x += 0.005;
      wireframeRef.current.rotation.y += 0.008;

      // Mouse interaction
      const targetRotationY = mousePosition.x * 0.3;
      const targetRotationX = mousePosition.y * 0.3;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.05,
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.05,
      );

      // Pulsing scale effect
      const pulseScale = 1 + Math.sin(time * 0.5) * 0.05;
      meshRef.current.scale.setScalar(pulseScale);
      wireframeRef.current.scale.setScalar(pulseScale * 1.02);

      // Morphing logic
      const morphSpeed = 0.3;
      const newProgress = (time * morphSpeed) % geometries.length;
      const shapeIndex = Math.floor(newProgress);
      const progress = newProgress - shapeIndex;

      if (shapeIndex !== currentShape) {
        setCurrentShape(shapeIndex);
      }
      setMorphProgress(progress);

      // Smooth morph between shapes
      const currentGeo = geometries[shapeIndex];
      const nextGeo = geometries[(shapeIndex + 1) % geometries.length];

      if (meshRef.current.geometry.attributes.position) {
        const positions = meshRef.current.geometry.attributes.position;
        const currentPositions = currentGeo.attributes.position;
        const nextPositions = nextGeo.attributes.position;

        const minLength = Math.min(
          positions.count,
          currentPositions.count,
          nextPositions.count,
        );

        for (let i = 0; i < minLength; i++) {
          const x = THREE.MathUtils.lerp(
            currentPositions.getX(i),
            nextPositions.getX(i),
            progress,
          );
          const y = THREE.MathUtils.lerp(
            currentPositions.getY(i),
            nextPositions.getY(i),
            progress,
          );
          const z = THREE.MathUtils.lerp(
            currentPositions.getZ(i),
            nextPositions.getZ(i),
            progress,
          );

          positions.setXYZ(i, x, y, z);
        }

        positions.needsUpdate = true;
        meshRef.current.geometry.computeVertexNormals();
      }

      // Animate material color
      if (meshRef.current.material) {
        const hue = (time * 0.1) % 1;
        meshRef.current.material.color.setHSL(hue, 0.7, 0.5);
        meshRef.current.material.emissive.setHSL(hue, 0.8, 0.3);
      }
    }
  });

  return (
    <group>
      {/* Main Shape */}
      <mesh ref={meshRef} geometry={geometries[0].clone()}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.7}
          roughness={0.3}
          emissive="#a855f7"
          emissiveIntensity={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Wireframe Overlay */}
      <mesh ref={wireframeRef} geometry={geometries[0].clone()}>
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh scale={0.85}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function OrbitingParticles() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles
        count={50}
        scale={5}
        size={2}
        speed={0.3}
        opacity={0.5}
        color="#a855f7"
      />
      <Sparkles
        count={30}
        scale={4}
        size={3}
        speed={0.2}
        opacity={0.4}
        color="#06b6d4"
      />
    </group>
  );
}

export default function MorphingPolyhedron3D({
  mousePosition = { x: 0, y: 0 },
}) {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
        <pointLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#3b82f6" />
        <spotLight
          position={[0, 0, 5]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#ffffff"
        />

        {/* Main Shape */}
        <MorphingShape mousePosition={mousePosition} />

        {/* Particles */}
        <OrbitingParticles />
      </Canvas>
    </div>
  );
}
