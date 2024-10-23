"use client "

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, Environment } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei' 
import gsap from "gsap"

export default function Text() {
 return (
  <div className=" row-span-1 row-start-1 -mt-9 aspect-square">
<Canvas className=" z-0 " shadows dpr={[1,1.5]} camera={{position:[0,0,25], far:30, near:1}} gl={{antialias:false}} >
<Suspense fallback={null}>
  <ContactShadows position={[0, -3.5, 0]}
  opacity={0.64}
  scale={40}
  blur={1}
  far={9}
  />
  <Environment preset="studio" />


</Suspense>
</Canvas>
  </div>
 )
}

export function Model(props) {
  const { nodes, materials } = useGLTF('/Hello-world5_1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.496, 0.356, -0.001]} scale={1.059}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_2.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_3.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_4.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_5.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_6.geometry}
          material={materials['Material.005']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['<'].geometry}
        material={nodes['<'].material}
        position={[0.548, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.H.geometry}
        material={nodes.H.material}
        position={[-0.333, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.E.geometry}
        material={nodes.E.material}
        position={[-1.096, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L.geometry}
        material={nodes.L.material}
        position={[-1.791, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L001.geometry}
        material={nodes.L001.material}
        position={[-2.554, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.O.geometry}
        material={nodes.O.material}
        position={[-3.276, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.W.geometry}
        material={nodes.W.material}
        position={[-7.702, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.O002.geometry}
        material={nodes.O002.material}
        position={[-8.658, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R.geometry}
        material={nodes.R.material}
        position={[-9.487, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L003.geometry}
        material={nodes.L003.material}
        position={[-10.248, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.D.geometry}
        material={nodes.D.material}
        position={[-10.839, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['-'].geometry}
        material={nodes['-'].material}
        position={[-7.123, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.L002.geometry}
        material={nodes.L002.material}
        position={[-11.743, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.D001.geometry}
        material={nodes.D001.material}
        position={[-12.291, 0.037, 0.037]}
        rotation={[Math.PI / 2, 0, -3.112]}
      />
    </group>
  )
}

useGLTF.preload('/Hello-world5_1.glb')
