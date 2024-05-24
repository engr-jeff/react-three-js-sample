import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

extend({ OrbitControls: OrbitControls });
const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { gl, camera } = useThree();
  camera.position.x = 5;

  // should have consistent UI for different frame rates
  // can be solve using deltaTime or clock class
  useFrame((state, dT) => {
    // cubeRef.current.rotation.y += dT;
    // planeRef.current.rotation.y += dT;
    state.camera.position.x = Math.sin(state.clock.elapsedTime);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color="#7A00CA" />
      </mesh>
    </>
  );
};

export default Scene;
