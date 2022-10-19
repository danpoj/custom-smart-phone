import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { GalaxyS21Ultra } from '../../../models/galaxy/GalaxyS21Ultra';
import Lights from '../../Lights';

const GalaxyS21UltraCanvas = ({
  width = 'w-[300px]',
  height = 'h-[500px]',
  rotation = true,
  color,
  minAngle = Math.PI / 2,
  maxAngle = Math.PI / 2,
}) => {
  return (
    <div className={`${width} ${height}`}>
      <Canvas shadows>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={minAngle}
          maxPolarAngle={maxAngle}
        />
        <Lights />
        <Suspense fallback={null}>
          <GalaxyS21Ultra color={color} rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyS21UltraCanvas;
