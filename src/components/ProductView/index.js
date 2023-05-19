import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars , useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Violin(){
  const { scene } = useGLTF("./violin.gltf");
  const viof = useRef();
  useFrame(() =>{
    viof.current.rotation.y += 0.01;
  });
  
  return <primitive ref ={viof}object={scene} scale={10} />;
}

function ProductView() {

  return <Canvas camera={{ fov: 9, position: [-10, 45, 20]}}
                  style={{height: window.innerHeight - 90}}> 
  <OrbitControls />
  <Stars/>
  <ambientLight intensity={0.5}/> 
  <spotLight position={[10, 15, 10]} angle={0.3}/>
  <Violin/>
  </Canvas>;
}
  
  export default ProductView;
