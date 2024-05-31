import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { Perf } from "r3f-perf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas>
    <Scene />
    <Perf />
  </Canvas>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
