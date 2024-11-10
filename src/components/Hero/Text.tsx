"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Float, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import dynamic from "next/dynamic";

const DreiLoader = dynamic(() => import("@react-three/drei").then((mod) => mod.Loader), {
  ssr: false,
});

// Extend the Three.js namespace to allow custom objects
extend({ THREE });

interface GeometryProps {
  position: [number, number, number];
  rotation: [number, number, number];
  geometry: THREE.BufferGeometry;
}

// Single letter mesh component with interaction
const Geometry: React.FC<GeometryProps> = ({ position, geometry, rotation }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [currentColor, setCurrentColor] = useState<string>(() =>
    gsap.utils.random([
      "#e74c3c",
      "#3498db",
      "#2ecc71",
      "#8e44ad",
      "orange",
      "white",
      "#f1c40f",
      "#2980b9",
      "#e67e22",
    ]) as string
  );

  const lettersoundEffects = [
    new Audio("/sounds/footstep_wood_004.ogg"),
    new Audio("/sounds/impactPunch_medium_001.ogg"),
    new Audio("/sounds/impactSoft_heavy_004.ogg"),
    new Audio("/sounds/impactWood_medium_004.ogg"),
  ];

  const handleClick = () => {
    // Play a random sound effect on click
    gsap.utils.random(lettersoundEffects)?.play();

    // Change color randomly
    setCurrentColor(
      gsap.utils.random([
        "#e74c3c",
        "#3498db",
        "#2ecc71",
        "#8e44ad",
        "orange",
        "white",
        "#f1c40f",
        "#2980b9",
        "#e67e22",
      ]) as string
    );

    // Apply a rotation animation to the mesh
    gsap.fromTo(
      meshRef.current!.rotation,
      { y: 0 },
      {
        y: `+=${gsap.utils.random(-0.4, 0.4)}`,
        duration: 1.3,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
      }
    );
  };

  useEffect(() => {
    // Initial scale animation
    gsap.from(meshRef.current!.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.1,
      ease: "elastic.out(1, 0.3)",
      delay: 0.5,
    });
  }, []);

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      geometry={geometry}
      material={new THREE.MeshStandardMaterial({ color: currentColor })}
      position={position}
      rotation={rotation}
      onClick={handleClick}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    />
  );
};

// Play a sound and rotate the object (for the planet effect)
const planetRotation = (mesh: THREE.Object3D) => {
  const planetsoundEffect = new Audio("/sounds/lowFrequency_explosion_001.ogg");
  planetsoundEffect.play();
  gsap.to(mesh.rotation, {
    x: "+=6.28",
    y: "+=6.28",
    duration: 2,
    ease: "power1.inOut",
  });
};

// Main model component
const Model: React.FC = (props) => {
  const { nodes } = useGLTF("/Hello-world5_1.glb") as any;

  return (
    <group {...props} dispose={null} position={[-42.5, -1.5, 9.8]} rotation={[0, -Math.PI, 0]} scale={7}>
      {/* Floating planet effect */}
      <group
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
        onClick={(e) => planetRotation(e.object)}
        position={[-5.496, 0.356, -0.001]}
        scale={1.2}
      >
        <Float floatIntensity={0.1}>
          {[...Array(7)].map((_, i) => (
            <mesh
              key={i}
              castShadow
              receiveShadow
              geometry={nodes[`Icosphere004_${i}`].geometry}
              material={nodes[`Icosphere004_${i}`].material}
            />
          ))}
        </Float>
      </group>

      {/* Letter meshes with initial colors and click effects */}
      {[
        { name: "<", position: [0.548, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "H", position: [-0.333, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "E", position: [-1.096, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "L", position: [-1.791, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "L001", position: [-2.554, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "O", position: [-3.276, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "W", position: [-7.702, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "O002", position: [-8.658, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "R", position: [-9.487, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "L003", position: [-10.248, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "D", position: [-10.839, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
      ].map(({ name, position, rotation }) => (
        <Geometry key={name} geometry={nodes[name].geometry} position={position as [number, number, number]} rotation={rotation as [number, number, number]} />
      ))}
    </group>
  );
};

export default function Text() {
  return (
    <div className="w-[96.8vw] sticky top-0 z-50 h-[70vh] -mt-9 max-md:h-[30vh] row-span-1 row-start-1">
      <Canvas
        className="relative left-1/2 transform -translate-x-1/2"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 30], far: 40, near: 1 }}
        gl={{ antialias: false }}
      >
        <Suspense fallback={<DreiLoader />}>
          <Model />
          <Environment  preset="city" />
        </Suspense>
      </Canvas>
      <DreiLoader />
    </div>
  );
}

// Preload the GLTF model for optimization
useGLTF.preload("/Hello-world5_1.glb");
