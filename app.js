import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useGLTFLoader } from '@react-three/drei'
import '@google/model-viewer'

const Model = () => {
  const gltf = useGLTFLoader('scene.gltf', true)
  
  return <primitive object={gltf.scene} scale={0.02} />
}

const ARButton = () => {
  return (
    <Html center>
      <model-viewer
        src="/models/chair/scene.gltf"
        ar
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '100%' }}
      >
        <button slot="ar-button" className="ar-button">
          View in your space
        </button>
      </model-viewer>
    </Html>
  )
}

const App = () => {
  return (
    <Canvas style={{ background: '#272730' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      <Model />
      <ARButton />
    </Canvas>
  )
}

export default App
