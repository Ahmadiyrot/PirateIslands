import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    gl={{ toneMapping: THREE.NeutralToneMapping }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [30, 10, 8],
    }}
  >
    <Experience />
  </Canvas>
);
