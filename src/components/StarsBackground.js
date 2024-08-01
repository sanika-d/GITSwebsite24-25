import React, { useEffect, useRef } from "react";
import * as THREE from "three-new";

const getRandomParticelPos = (particleCount) => {
  const arr = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    arr[i] = (Math.random() - 0.5) * 10;
  }
  return arr;
};
// const resizeRendererToDisplaySize = (renderer) => {
//   const canvas = renderer.domElement;
//   const width = canvas.clientWidth;
//   const height = canvas.clientHeight;
//   const needResize = canvas.width !== width || canvas.height !== height;
//   // resize only when necessary
//   if (needResize) {
//     //3rd parameter `false` to change the internal canvas size
//     renderer.setSize(width, height, false);
//   }
//   return needResize;
// };

const StarsBackground = () => {
  const el = useRef(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (el.current && mounted.current === false) {
      // mouse
      let mouseX = 0;
      let mouseY = 0;

      let scrollY = 0;
      let lastScroll = 0;
      let scrollDirection = 0;
      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      // document.addEventListener("scroll", (e) => {
      //   lastScroll = scrollY;
      //   scrollY = window.scrollY;
      //   scrollDirection = scrollY - lastScroll;
      //   console.log(scrollDirection);
      // });
      // document.addEventListener("scroll")

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth - 20, window.innerHeight);
      el.current.appendChild(renderer.domElement);
      renderer.setClearColor(0x000000, 1);

      const scene = new THREE.Scene();

      // light source
      const color = 0xffffff,
        intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);

      // camera
      const fov = 75,
        aspect = 2,
        near = 1.5,
        far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      // Geometry
      const geometrys = [
        new THREE.BufferGeometry(),
        new THREE.BufferGeometry(),
      ];

      geometrys[0].setAttribute(
        "position",
        new THREE.BufferAttribute(getRandomParticelPos(3000), 3)
      );
      geometrys[1].setAttribute(
        "position",
        new THREE.BufferAttribute(getRandomParticelPos(7000), 3)
      );

      const loader = new THREE.TextureLoader();

      // material
      const materials = [
        new THREE.PointsMaterial({
          size: 0.05,
          map: loader.load("/assets/sp1.png"),
          transparent: true,
          // color: "#ff0000"
        }),
        new THREE.PointsMaterial({
          size: 0.075,
          map: loader.load("/assets/sp2.png"),
          transparent: true,
          // color: "#0000ff"
        }),
      ];

      const starsT1 = new THREE.Points(geometrys[0], materials[0]);
      const starsT2 = new THREE.Points(geometrys[1], materials[1]);
      scene.add(starsT1);
      scene.add(starsT2);

      window.addEventListener("resize", () => {
        let width = window.innerWidth - 20;
        let height = window.innerHeight;
        camera.aspect = width / height;

        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 1);
        // renderer.setSize(window.innerWidth - 20, window.innerHeight);
      });
      let scrollMultiplier = 0.0001;
      const render = (time) => {
        // time *= 0.001; //in seconds

        // if (resizeRendererToDisplaySize(renderer)) {
        //   const canvas = renderer.domElement;
        //   // changing the camera aspect to remove the strechy problem
        //   camera.aspect = canvas.clientWidth / canvas.clientHeight;
        //   camera.updateProjectionMatrix();
        // }
        lastScroll = scrollY;
        scrollY = window.scrollY;
        scrollDirection = scrollY - lastScroll;

        // console.log(scrollDirection);
        if (scrollDirection === 0) {
          scrollMultiplier *= 0.9;
        } else if (scrollDirection < 0) {
          scrollMultiplier = 4;
        } else {
          scrollMultiplier = -4;
        }

        starsT1.rotation.y += scrollMultiplier * 0.01;
        starsT2.rotation.y += scrollMultiplier * 0.01;

        starsT1.position.x = mouseX * 0.0001;
        starsT1.position.y = mouseY * -0.0001;

        starsT2.position.x = mouseX * 0.0001;
        starsT2.position.y = mouseY * -0.0001;

        // Re-render the scene
        renderer.render(scene, camera);
        // loop
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }
    return () => {};
  }, [el]);

  return <div id="background-canvas-div" ref={el}></div>;
};

export default StarsBackground;
