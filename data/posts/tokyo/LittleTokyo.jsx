import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function LittleTokyo() {
  return (
    <>
      <div className="w-full" style={{
        height: '600px',
        background: '#bfe3dd'
      }}>
        <Canvas camera={{ position: [1, 0, 750] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <OrbitControls autoRotate={true} />
          <Suspense fallback={'loading'}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}