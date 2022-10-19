import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lights from '../../Lights';
import { Iphone14 } from '../../../models/apple/Iphone14';

const Iphone14Canvas = ({
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
          <Iphone14 color={color} rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Iphone14Canvas;
