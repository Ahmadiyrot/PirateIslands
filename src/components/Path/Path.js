import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Path() {
  const positions = [new THREE.Vector3(-83, 0, 24), new THREE.Vector3(-115.5, 0, -36)];
  const firstIsland = [new THREE.Vector3(-13, 0, -13), new THREE.Vector3(-31.5, 0, -16)];

  const ship = useGLTF("./Models/Ship.glb");
  const shipRef = useRef();

  const moveShip = (targetPos, animationDuration, shipDuration) => {
    if (!shipRef.current) return;

    // Compute the target rotation using lookAt
    const tempObject = new THREE.Object3D();
    tempObject.position.copy(shipRef.current.position);
    tempObject.lookAt(targetPos);
    const targetQuaternion = tempObject.quaternion.clone();

    // Animate position
    gsap.to(shipRef.current.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: shipDuration,
      ease: "power1.inOut",
    });

    gsap.to(
      { t: 0 },
      {
        t: 1,
        duration: animationDuration,
        ease: "power1.inOut",
        onUpdate: function () {
          shipRef.current.quaternion.slerp(targetQuaternion, this.targets()[0].t);
        },
      }
    );
  };

  useEffect(() => {
    moveShip(firstIsland[0], 5, 5);
  }, []);

  return <primitive ref={shipRef} object={ship.scene} position={[-0.5, 0, -5]} rotation={[0, -Math.PI / 2, 0]} scale={0.8} />;
}
