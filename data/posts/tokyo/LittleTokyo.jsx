import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import Model from "./Model";
import { useState } from 'react';

export default function LittleTokyo() {

  const [enableZoom, setEnableZoom] = useState(false)

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center> <div className="text-medium"> loading {progress} % </div></Html>;
  }

  const onClick = () => {
    setEnableZoom(!enableZoom)
  }

  return (
    <>
      <div className="w-full" style={{
        height: '500px',
        background: '#bfe3dd',
        maxHeight: '600px'
      }}>
        <Canvas >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} />
            <directionalLight intensity={1} />
            <OrbitControls enableZoom={enableZoom} autoRotate={true} />
            <Model scale={0.008} />
          </Suspense>
        </Canvas>
      </div>

      <a className="flex mt-2 justify-center text-base text-gray-600 !font-normal !no-underline" onClick={onClick}>
        click here to {enableZoom ? 'disable' : 'enable'} zoom
      </a>
    </>
  )
}