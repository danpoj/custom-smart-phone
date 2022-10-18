const Lights = () => {
  return (
    <>
      <directionalLight
        castShadow
        position={[4, 8, 0]}
        shadow-mapSize={[1024, 1024]}
        intensity={10}
      >
        <orthographicCamera
          attach='shadow-camera'
          args={[-10, 10, 10, -10, 0, 100]}
        />
      </directionalLight>
      <pointLight position={[0, 0, 4]} intensity={2} />
      <pointLight position={[0, 0, -4]} intensity={2} />
      <pointLight position={[-4, 0, 0]} intensity={4} />
      <pointLight position={[4, 0, 0]} intensity={4} />
    </>
  );
};

export default Lights;
