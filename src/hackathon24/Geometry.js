import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SMALL_SCALE_WIDTH = 570;
const LARGE_OBJ_SCALE = 1.1;
const SMALL_OBJ_SCALE = 1.1;

const TorusWithPoints = () => {
  const el = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (el.current && mounted.current === false) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      // Scene
      var scene = new THREE.Scene();
      
      var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      var renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      el.current.appendChild(renderer.domElement);

      // Torus geometry
      var geometry = new THREE.TorusGeometry(5, 2, 16, 100);

      var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      var torus = new THREE.Mesh(geometry, material);
      scene.add(torus);

      camera.position.z = 10;

      var animate = function () {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
      mounted.current = true;
    }
    return () => {};
  }, [el]);

  return <div id="torus-canvas-div" ref={el}></div>;
};

export default TorusWithPoints;
