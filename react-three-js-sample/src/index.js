import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
const creatingCanvasHandler = (state) => {
  // This will change the background color to a mix of blue and the css background color
  // state.gl.setClearColor("blue", 0.2);
};
root.render(
  <>
    <Canvas
      gl={{
        antialias: true, //default true
        alpha: true, // for background transparency
      }}
      // orthographic
      camera={{
        fov: 75,
        near: 0.1,
        far: 100,
        // zoom: 120,
        position: [2, 2, 6],
      }}
      onCreated={creatingCanvasHandler}
    >
      <Scene />
    </Canvas>
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
