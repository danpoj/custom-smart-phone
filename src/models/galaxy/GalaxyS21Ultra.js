import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function GalaxyS21Ultra(props) {
  const { nodes, materials } = useGLTF('/galaxy/galaxy_s21_ultra.glb');
  const ref = useRef(null);
  useFrame(() => (ref.current.rotation.y += 0.01));
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={0.05}
      position={[0, 0.12, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[-12.87, 12.87, 12.87]}>
            <group position={[-1.01, -0.44, 0]} scale={[-1, 1, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CamModuleFrame_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group position={[-1.01, -0.44, 0.04]} scale={[-1, 1, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.CamModule_CameraModule_0.geometry}
                material={materials.CameraModule}
              />
            </group>
            <group position={[0.98, 2.04, 0.51]} scale={[-0.26, 0.26, 0.26]}>
              <group position={[0, 2.78, 0]}>
                <group position={[0, 0, -0.27]} scale={[0.5, 0.5, 0.21]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lens2_Lens_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera2_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[2.61, -0.07, 0]} scale={0.68}>
                <group position={[0, 0.01, -0.28]} scale={[0.42, 0.42, 0.23]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lens4_Camera2_0.geometry}
                    material={materials.Camera2}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lens4_Lens_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera4_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera4_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera4_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera4_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[2.61, 2.84, 0]} scale={0.68}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sensor_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sensor_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sensor_Red_0.geometry}
                  material={materials.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sensor_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <group position={[2.61, 1.42, 0]} scale={0.35}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Flashh_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Flashh_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Flashh_Flash_0.geometry}
                  material={materials.Flash}
                />
              </group>
              <group position={[0, -2.86, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Glass_0.geometry}
                  material={materials.Glass}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Camera3_Lens001_0.geometry}
                  material={materials['Lens.001']}
                />
              </group>
              <group position={[0, 0, -0.27]} scale={[0.32, 0.32, 0.22]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lens1_Camera2_0.geometry}
                  material={materials.Camera2}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lens1_Lens_0.geometry}
                  material={materials.Lens}
                />
              </group>
              <group
                position={[3.99, 4.51, -1.76]}
                rotation={[0, 0, Math.PI]}
                scale={[-0.73, 0.73, 0.73]}
              >
                <group
                  position={[0, 0, 0.12]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[-0.16, 0.16, 0.09]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LensFC_Lens_0.geometry}
                    material={materials.Lens}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera_BodyFrame_0.geometry}
                  material={materials.BodyFrame}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera_Camera3_0.geometry}
                  material={materials.Camera3}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.FrontCamera_Glass_0.geometry}
                  material={materials.Glass}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Camera1_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Camera1_Camera2_0.geometry}
                material={materials.Camera2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Camera1_Camera3_0.geometry}
                material={materials.Camera3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Camera1_Glass_0.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Back_Back_0.geometry}
              material={materials.Back}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen_Screen_0.geometry}
              material={materials.Screen}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ScreenBezel_ScreenBezel_0.geometry}
              material={materials.ScreenBezel}
            />
            <group
              position={[1.74, 1.32, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.VolumeButton__BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group
              position={[1.74, 0.43, 0.2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-0.04, 0.03, 0.03]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PowerButton_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <group
              position={[-0.11, -3.08, 0.44]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[-0.49, 0.49, 0.49]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Logo_BodyFrame_0.geometry}
                material={materials.BodyFrame}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S21ULTRA_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S21ULTRA_Chrome_0.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S21ULTRA_Antennas_0.geometry}
              material={materials.Antennas}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.S21ULTRA_Speaker_0.geometry}
              material={materials.Speaker}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/galaxy/galaxy_s21_ultra.glb');
