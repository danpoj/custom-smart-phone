import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lights from '../../Lights';
import { GalaxyTabS8Ultra } from '../../../models/galaxy/GalaxyTabS8Ultra';

const GalaxyS8UltraCanvas = () => {
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
          <GalaxyTabS8Ultra />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyS8UltraCanvas;
