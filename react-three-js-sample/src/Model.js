import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";


// Dog model
const Model = () => {
  //? METHOD 1
  // const model = useLoader(GLTFLoader, "./model/dog.glb");


  
  //? METHOD 2
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  // console.log(model);
  console.log(animations);

  useEffect(() => {
    // animations.actions.Hide.play();
  }, []);

  return <primitive position-y={-0.4} object={model.scene} />;
};

useGLTF.preload();

export default Model;
