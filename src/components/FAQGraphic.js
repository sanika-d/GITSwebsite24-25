import React, { useEffect, useRef } from "react";
import { makeNoise4D } from "open-simplex-noise";
import * as THREE from "three-new";

const FAQsGraphic = () => {
  const el = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (el.current && mounted.current === false) {
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 5);
      let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth - 20, window.innerHeight);
      el.current.appendChild(renderer.domElement);

      let radius = 2;
      // let g = new THREE.PlaneGeometry(1, 2, 10, 10);
      let g = new THREE.RingGeometry(2, 5, 400);

      let nPos = [];
      let v3 = new THREE.Vector3();
      console.log(g);
      console.log(g.attributes.position);
      let pos = g.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i).normalize();
        nPos.push(v3.clone());
      }
      g.userData.nPos = nPos;

      let m = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x888888,
      });
      // m = MeshLambertMaterial({ color: 0x0000ff });
      // let o = new THREE.Mesh(g, m);
      // let j = new THREE.Mesh(g, m);
      // scene.add(o);

      // o.scale.multiplyScalar(0.5);
      // scene.add(o);
      // j.scale.multiplyScalar(0.2);
      // scene.add(j);
      // scene.add(o);

      for (let ind = 1; ind < 15; ++ind) {
        let obj = new THREE.Mesh(g, m);

        if (ind !== 1) {
          obj.scale.multiplyScalar((ind + 0.2) * 0.065);
        } else {
          obj.scale.multiplyScalar((ind + 0.2) * 0.1);
        }
        scene.add(obj);
      }

      let noise = makeNoise4D(Date.now());
      let clock = new THREE.Clock();

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth - 20, window.innerHeight);
        renderer.setClearColor(0xfff, 0);
      });

      renderer.setAnimationLoop(() => {
        let t = clock.getElapsedTime();
        g.userData.nPos.forEach((p, idx) => {
          let ns = noise(p.x * 2.5, p.y * 2.5, p.z * 2.5, t);
          v3.copy(p)
            .multiplyScalar(radius)
            .addScaledVector(p, ns * 1.8);
          pos.setXYZ(idx, v3.x, v3.y, v3.z);
        });
        g.computeVertexNormals();
        pos.needsUpdate = true;
        renderer.render(scene, camera);
      });
      mounted.current = true;
    }
    return () => {};
  }, [el]);

  return <div id="faq-canvas-div" ref={el}></div>;
};

export default FAQsGraphic;
