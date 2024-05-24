import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas>
      <TorusKnotGeometry />
      <meshNormalMaterial />
    </Canvas>
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
