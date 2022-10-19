import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Iphone12pro } from '../../../models/apple/Iphone12pro';
import Lights from '../../Lights';

const Iphone12proCanvas = ({
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
          <Iphone12pro color={color} rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Iphone12proCanvas;
