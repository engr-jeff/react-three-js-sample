import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Custom from "./Custom";

extend({ OrbitControls: OrbitControls });
const Scene = () => {
  const { gl, camera } = useThree();

  // should have consistent UI for different frame rates
  // can be solve using deltaTime or clock class
  useFrame((state, dT) => {});

  return (
    <>
      {/* <axesHelper args={[3]} />
      <gridHelper args={[20, 20, 0xff0000, "cyan"]} /> */}

      <Custom />
      <orbitControls args={[camera, gl.domElement]} />
      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh> */}
    </>
  );
};

export default Scene;

//* Docs for creating custom geometry
// 1.) Create a Float32Array
// 2.) Put the values in the array
// 3.) Create a BufferAttribute using the Float32Array
// 4.) Add the BufferAttribute to the attributes of the BufferGeometry
