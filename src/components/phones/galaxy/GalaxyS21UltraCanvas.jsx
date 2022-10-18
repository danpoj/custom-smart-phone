import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { GalaxyS21Ultra } from '../../../models/galaxy/GalaxyS21Ultra';
import Lights from '../../Lights';

const GalaxyS21UltraCanvas = () => {
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
          <GalaxyS21Ultra />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyS21UltraCanvas;
