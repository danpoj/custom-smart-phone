import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lights from '../../Lights';
import { GalaxyTabS8Ultra } from '../../../models/galaxy/GalaxyTabS8Ultra';

const GalaxyS8UltraCanvas = ({
  width = 'w-[500px]',
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
          <GalaxyTabS8Ultra color={color} rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyS8UltraCanvas;
