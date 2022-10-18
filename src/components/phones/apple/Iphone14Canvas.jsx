import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lights from '../../Lights';
import { Iphone14 } from '../../../models/apple/Iphone14';

const Iphone14Canvas = () => {
  return (
    <div className='w-[300px] h-[500px]  '>
      <Canvas shadows>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Lights />
        <Suspense fallback={null}>
          <Iphone14 />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Iphone14Canvas;
