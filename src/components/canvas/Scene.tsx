'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Torus() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.cos(time / 4) * 0.2
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.2}>
        <torusGeometry args={[1, 0.35, 64, 128]} />
        <MeshDistortMaterial
          color="#ffffff"
          speed={2}
          distort={0.2}
          radius={1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Torus />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
