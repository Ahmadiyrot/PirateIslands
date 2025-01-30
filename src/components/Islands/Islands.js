import { useGLTF } from "@react-three/drei";

export default function Islands() {
  const islands = useGLTF("./Models/Islands.glb");

  return <primitive object={islands.scene} position={[0, 0, 0]} />;
}
