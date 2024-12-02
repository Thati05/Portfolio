"use client";


import dynamic from "next/dynamic";
import {  View, Float } from "@react-three/drei"
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {  Environment } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";






const DreiLoader = dynamic(() =>
  import('@react-three/drei').then((mod) => mod.Loader), {
    ssr: false,
  }
);

export default function Text() {
  return (
    <>
      <Canvas
        style={{
          position: 'relative',
          top: 0,
          left: '49%',
          transform: 'translate(-50%)',
          overflow: 'hidden',
          zIndex: 30,
        }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 30], far: 40, near: 1 }}
        gl={{ antialias: false }}
        >
        <Suspense fallback={null}>
          <View.Port/>
         <Model/>
          <Environment environmentIntensity={3} preset="city" />
        </Suspense>
      </Canvas>
      <DreiLoader />
   
        </>
  );
}


export function Model(props) {
  const { nodes } = useGLTF("/Hello-world5_1.glb");

  // Sound effects for letters and planet
  const lettersoundEffects = [
    new Audio('/sounds/footstep_wood_004.ogg'),
    new Audio('/sounds/impactPunch_medium_001.ogg'),
    new Audio('/sounds/impactSoft_heavy_004.ogg'),
    new Audio('/sounds/impactWood_medium_004.ogg'),
  ];
  const planetsoundEffect = [new Audio('/sounds/lowFrequency_explosion_001.ogg')];

  // Handles mesh rotation and color change
  const handleMeshClick = (e, soundEffects) => {
    const mesh = e.object;

    // Play a random sound effect
    gsap.utils.random(soundEffects).play();

    // Pick a new color
    const newColor = gsap.utils.random([
      "#e74c3c", "#3498db", "#2ecc71", "#8e44ad",
      "orange", "white", "#f1c40f", "#2980b9", "#e67e22"
    ]);
    mesh.material.color.set(newColor);

    // Rotate the mesh
    gsap.fromTo(
      mesh.rotation,
      { y: 0 },
      {
        y: `+=${gsap.utils.random(-0.4, 0.4)}`,
        duration: 1.3,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
      }
    );
  };

  const handlePlanetClick = (mesh) => {
    gsap.utils.random(planetsoundEffect).play();
    gsap.to(mesh.rotation, {
      x: "+=6.28",
      y: "+=6.28",
      duration: 2,
      ease: "power1.inOut",
    });
  };

  const LetterMesh = ({ geometry, position, rotation, soundEffects }) => {
    const meshRef = useRef();
    const [currentColor] = useState(() =>
      gsap.utils.random(["#e74c3c", "#3498db", "#2ecc71", "#8e44ad", "orange", "white", "#f1c40f", "#2980b9", "#e67e22"])
    );

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(meshRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.1,
          ease: "elastic.out(1, 0.3)",
          delay: 0.5,
        });
      });

      return () => ctx.revert();
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
        onClick={(e) => handleMeshClick(e, soundEffects)}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      />
    );
  };

  return (
    <group {...props} dispose={null} position={[-42.5, -1.5, 9.8]} rotation={[0, -Math.PI, 0]} scale={7}>
      {/* Planet mesh with rotation on click */}
     

      <group
        onClick={(e) => handlePlanetClick(e.object)}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
        position={[-5.496, 0.356, -0.001]}
        scale={1.2}
        >
           <Float floatIntensity={0.1}>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004.geometry}
          material={nodes.Icosphere004.material}
          />
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh
          key={i}
          castShadow
          receiveShadow
          geometry={nodes[`Icosphere004_${i + 1}`].geometry}
            material={nodes[`Icosphere004_${i + 1}`].material}
          />
        ))}
        </Float>
      </group>
         

      {/* Letter meshes with individual color and rotation animations on click */}
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
        <LetterMesh
          key={name}
          geometry={nodes[name].geometry}
          position={position}
          rotation={rotation}
          soundEffects={lettersoundEffects}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/Hello-world5_1.glb");
