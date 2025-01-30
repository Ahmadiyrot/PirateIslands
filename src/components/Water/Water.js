import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import waterVertexShader from "./shader/vert.glsl";
import waterFragmentShader from "./shader/frag.glsl";

export default function Water() {
  const meshRef = useRef();
  const clock = useRef(new THREE.Clock());

  const uniforms = {
    uTime: { value: 0 },

    uBigWavesElevation: { value: 0 },
    uBigWavesFrequency: { value: new THREE.Vector2(0, 0) },
    uBigWavesSpeed: { value: 0 },

    uDepthColor: { value: new THREE.Color("#539dc6") },
    uSurfaceColor: { value: new THREE.Color("#9bd8ff") },
    uColorOffset: { value: 0.1 },
    uColorMultiplier: { value: 5 },

    uSmallWavesElevation: { value: 0.19 },
    uSmallWavesFrequency: { value: 0.837 },
    uSmallWavesSpeed: { value: 0.643 },
    uSmallIterations: { value: 5 },
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.current.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI * 0.5} position={[-220, 0, 0]}>
      <planeGeometry args={[500, 150, 1000, 300]} />
      <shaderMaterial vertexShader={waterVertexShader} fragmentShader={waterFragmentShader} uniforms={uniforms} />
      {/* <meshBasicMaterial color="blue" wireframe /> */}
    </mesh>
  );
}
