import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import bmw from './BMW.glb'
function Model(props){
  const { scene } = useGLTF(bmw);
  return <primitive object={scene} {...props} />
}
export default function index(){
    return(
        <Canvas dpr={[1,2]} shadows camera={{fov: 45}}  style={{"position": "absolute",paddingLeft: '20px',width: '600px',height: '500px',zIndex: '9',display: 'flex',flexDirection: 'column',}}>
                <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1,Math.PI / 4]}>
                  <Stage environment={null}>
                      <Model scale={0.02} />
                  </Stage>
                </PresentationControls>
        </Canvas>
    )
}

