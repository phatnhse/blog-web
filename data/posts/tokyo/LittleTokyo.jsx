import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function LittleTokyo() {
  return (
    <>
      <div className="w-full h-96">
        <Canvas camera={{ position: [0, 15, 500] }}>
          <Suspense fallback={null}>
            <Model/>
            <OrbitControls />
            <Environment preset="sunset" background={false} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}