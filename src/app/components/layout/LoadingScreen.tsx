"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useTheme } from "../shared/ThemeContext";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    let renderer: THREE.WebGLRenderer,
      scene: THREE.Scene,
      camera: THREE.PerspectiveCamera;

    const conf = {
      color: theme === "dark" ? 0x9333ea : 0x9333ea,
      objectWidth: 12,
      objectThickness: 3,
      ambientColor: theme === "dark" ? 0x404040 : 0x808080,
      perspective: 75,
      cameraZ: 75,
    };

    // Initialize scene
    const init = () => {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera = new THREE.PerspectiveCamera(
        conf.perspective,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = conf.cameraZ;

      scene = new THREE.Scene();

      // Add lights
      scene.add(new THREE.AmbientLight(conf.ambientColor));
      const light = new THREE.PointLight(0x9333ea);
      light.position.z = 100;
      scene.add(light);

      // Create objects
      const geometry = new THREE.BoxGeometry(
        conf.objectWidth,
        conf.objectWidth,
        conf.objectThickness
      );

      const getSize = () => {
        const vFOV = (conf.perspective * Math.PI) / 180;
        const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
        const width = height * (window.innerWidth / window.innerHeight);
        return [width, height];
      };

      const [wWidth, wHeight] = getSize();
      const nx = Math.round(wWidth / conf.objectWidth) + 1;
      const ny = Math.round(wHeight / conf.objectWidth) + 1;

      // Create grid of boxes
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const material = new THREE.MeshPhongMaterial({
            color: conf.color,
            transparent: true,
            opacity: 1,
            shininess: 100,
            specular: new THREE.Color(0x9333ea),
          });
          const mesh = new THREE.Mesh(geometry, material);
          const x = -wWidth / 2 + i * conf.objectWidth;
          const y = -wHeight / 2 + j * conf.objectWidth;
          mesh.position.set(x, y, 0);

          // Animate each box
          const delay = THREE.MathUtils.randFloat(1, 2);
          const rx = THREE.MathUtils.randFloatSpread(2 * Math.PI);
          const ry = THREE.MathUtils.randFloatSpread(2 * Math.PI);
          const rz = THREE.MathUtils.randFloatSpread(2 * Math.PI);

          gsap.to(mesh.rotation, {
            x: rx,
            y: ry,
            z: rz,
            duration: 2,
            delay: delay,
          });

          gsap.to(mesh.position, {
            z: 80,
            duration: 2,
            delay: delay + 0.5,
            ease: "power1.out",
          });

          gsap.to(material, {
            opacity: 0,
            duration: 2,
            delay: delay + 0.5,
            onComplete: () => {
              if (i === nx - 1 && j === ny - 1) {
                setTimeout(onLoadingComplete, 500);
              }
            },
          });

          scene.add(mesh);
        }
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, [theme, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: "black",
          boxShadow: "inset 0 0 50px rgba(147, 51, 234, 0.5)",
        }}
      />
    </div>
  );
};

export default LoadingScreen;
