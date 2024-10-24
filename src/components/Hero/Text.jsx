"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Text() {
  return (
    <div className="row-span-1 row-start-1 min-h-[300px] h-[300px] w-full -mt-9">
      <Canvas
        
        style={{
      position:"relative",
      top:0,
      left:"47%",
      transform:"translate(-50%)",
      overflow:"hidden",
      zIndex:30,
      
      
    }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 30], far: 40, near: 1 }}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <Model />
          <Environment environmentIntensity={3} preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function Model(props) {
  const { nodes } = useGLTF("/Hello-world5_1.glb");

  function Geometry({ position, geometry, rotation }) {
    const meshRef = useRef();
    
    // Set initial color randomly on first render
    const [currentColor, setCurrentColor] = useState(() =>
      gsap.utils.random(["red", "blue", "green", "yellow", "purple", "orange", "white"])
    );

    // Function to handle rotation and color change on click
    function handleClick(e) {
      const mesh = e.object;

      // Randomly pick a new color for the clicked mesh
      const newColor = gsap.utils.random([
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "white"
      ]);
      setCurrentColor(newColor);

      // Rotate the mesh
      gsap.fromTo(
        mesh.rotation,
        { y: 0 },
        {
          y: `+=${gsap.utils.random(-0.5, 0.5)}`,
          duration: 1.3,
          ease: "elastic.out(1, 0.3)",
          yoyo: true,
        }
      );
    }

    const handlePointerOver = () => {
      document.body.style.cursor = "pointer";
    };
    const handlePointerOut = () => {
      document.body.style.cursor = "default";
    };

    return (
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={geometry}
        material={new THREE.MeshStandardMaterial({ color: currentColor })} // Set initial random color
        position={position}
        rotation={rotation}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
    );
  }

  // Function to handle planet rotation for 2 seconds
  function planetRotation(mesh) {
    gsap.to(mesh.rotation, {
      x: "+=6.28", 
      y: "+=6.28",
      duration: 2, 
      ease: "power1.inOut", 
    });
  }

  return (
    <group {...props} dispose={null} position={[-40, -1.5, 12]} rotation={[0, -Math.PI, 0]} scale={7.2}>
      {/* Top mesh (e.g., planet) with rotation on click */}
      <group position={[-5.496, 0.356, -0.001]} scale={1.039}>
        <Float floatIntensity={0.1}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004.geometry}
            material={nodes.Icosphere004.material} // Retain the original material
            onClick={(e) => planetRotation(e.object)} // Rotate the planet on click
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_1.geometry}
            material={nodes.Icosphere004_1.material}
            onClick={(e) => planetRotation(e.object)} // Apply rotation
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_2.geometry}
            material={nodes.Icosphere004_2.material}
            onClick={(e) => planetRotation(e.object)} // Apply rotation
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_3.geometry}
            material={nodes.Icosphere004_3.material}
            onClick={(e) => planetRotation(e.object)} // Apply rotation
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_4.geometry}
            material={nodes.Icosphere004_4.material}
            onClick={(e) => planetRotation(e.object)} // Apply rotation
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_5.geometry}
            material={nodes.Icosphere004_5.material}
            onClick={(e) => planetRotation(e.object)} // Apply rotation
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004_6.geometry}
            material={nodes.Icosphere004_6.material}
            onClick={(e) => planetRotation(e.object)} // Apply rotation
          />
        </Float>
      </group>

      {/* Letter meshes start with random colors and change color on click */}
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
        { name: "-", position: [-7.123, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "L002", position: [-11.743, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
        { name: "D001", position: [-12.291, 0.037, 0.037], rotation: [Math.PI / 2, 0, -3.112] },
      ].map(({ name, position, rotation }) => (
        <Geometry
          key={name}
          geometry={nodes[name].geometry}
          position={position}
          rotation={rotation}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/Hello-world5_1.glb");
