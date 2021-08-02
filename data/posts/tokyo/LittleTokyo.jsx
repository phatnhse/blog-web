import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import Model from "./Model";

export default function LittleTokyo() {

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center> <div className="text-medium"> loading {progress} % </div></Html>;
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
            <OrbitControls enableZoom={false} autoRotate={true} />
            <Model scale={0.008}/>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}