import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import Bike from "./Bike";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh> */}

      <Suspense fallback={
        <mesh scale-y={2}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
        </mesh>
      }>
        <Model />
      </Suspense>

      {/* <Bike position={[-0.5, 0.75, 0]} /> */}
    </>
  );
};

export default Scene;
