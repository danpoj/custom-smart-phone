import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Iphone14(props) {
  const ref = useRef(null);
  useFrame(() => (ref.current.rotation.y += 0.01));

  const { nodes, materials } = useGLTF('/apple/iphone_14.glb');
  return (
    <group {...props} ref={ref} dispose={null} scale={1.2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[0.67, 0.46, -1.66]}
              rotation={[Math.PI, 0, 0]}
              scale={0.83}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.cams}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_18.geometry}
                material={materials.lens}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials.besel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials.cam_glass}
              />
            </group>
            <group
              position={[0.35, 0.46, -1.35]}
              rotation={[Math.PI, 0, 0]}
              scale={0.83}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials.cams}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_23.geometry}
                material={materials.lens}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={materials.besel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_25.geometry}
                material={materials.cam_glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.screen}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.besel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.lens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.backglass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.lidar}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.material_10}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/apple/iphone_14.glb');
