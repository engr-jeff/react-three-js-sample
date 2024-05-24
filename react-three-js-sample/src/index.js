import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { TorusGeometry } from "three";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        position: [2, 2, 5],
      }}
    >
      <Scene />
    </Canvas>
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
