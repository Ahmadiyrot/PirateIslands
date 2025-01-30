import { useGLTF } from "@react-three/drei";
import gsap from "gsap";


export default function Ship(curve) {
  const ship = useGLTF("./Models/Ship.glb");
  const points = [0, 13, 23, 36];



  return <primitive object={ship.scene} position={[0, 0, 0]} />;
}
