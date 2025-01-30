import { OrbitControls } from "@react-three/drei";
import Water from "./components/Water/Water.js";
import { Perf } from "r3f-perf";
import Islands from "./components/Islands/Islands.js";
//import Ship from "./components/Ship/Ship.js";
import Path from "./components/Path/Path.js";
import { useState } from "react";

export default function Experience() {
  return (
    <>
      <OrbitControls target={[-15, 2, 5]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.8} />
      <Perf position="top-left" />
      <Islands />
      <Path />
      {/* <axesHelper args={[5]} position={[1, 1, 1]} /> */}
      {/* {curve && <Ship curve={curve.current} />} */}

      {/* <Water /> */}
    </>
  );
}
