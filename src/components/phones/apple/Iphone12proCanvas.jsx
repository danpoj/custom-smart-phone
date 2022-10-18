import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Iphone12pro } from '../../../models/apple/Iphone12pro';
import Lights from '../../Lights';

const Iphone12proCanvas = () => {
  return (
    <div className='w-[300px] h-[500px] '>
      <Canvas shadows>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Lights />
        <Suspense fallback={null}>
          <Iphone12pro />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Iphone12proCanvas;
