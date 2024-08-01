import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SMALL_SCALE_WIDTH = 570;
const LARGE_OBJ_SCALE = 1.1;
const SMALL_OBJ_SCALE = 1.1;

const SphereWithPoints = () => {
  const el = useRef(null);
  const mounted = useRef(false);
  THREE.IcosahedronGeometry = function (radius, detail) {
    var t = (1 + Math.sqrt(5)) / 2;
    var vertices = [
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1,
    ];
    var indices = [
      0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
      10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4,
      9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
    ];
    THREE.PolyhedronGeometry.call(this, vertices, indices, radius, detail);
    this.type = "IcosahedronGeometry";
    this.parameters = {
      radius,
      detail,
    };
  };

  THREE.IcosahedronGeometry.prototype = Object.create(
    THREE.PolyhedronGeometry.prototype
  );
  THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;

  useEffect(() => {
    if (el.current && mounted.current === false) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      // Scene
      var scene = new THREE.Scene();
      // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.4, 1000);
      // var camera = new THREE.OrthographicCamera(20, -20, 10, -10, 1, 1000);
      var camera = new THREE.OrthographicCamera(
        (width - 20) / -50,
        (width - 20) / 50,
        height / 50,
        height / -50,
        1,
        1000
      );

      var renderer = new THREE.WebGLRenderer({
        antialias: 1,
        alpha: true,
      });
      // let minDimention = Math.min(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width - 20, height);

      el.current.appendChild(renderer.domElement);

      var mesh = new THREE.IcosahedronGeometry(
        window.innerWidth > SMALL_SCALE_WIDTH ? 10 : 5,
        1
      ); // radius, detail
      var vertices = mesh.vertices;
      var positions = new Float32Array(vertices.length * 3);
      for (var i = 0, l = vertices.length; i < l; i++) {
        vertices[i].toArray(positions, i * 3);
      }

      const sprite = new THREE.TextureLoader().load("/assets/ellipse.png");

      var geometry = new THREE.BufferGeometry();

      geometry.addAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      var material = new THREE.PointsMaterial({
        sizeAttenuation: true,
        map: sprite,
        size: 0.4,
        transparent: true,
        opacity: 1,
        // vertexColors: THREE.VertexColors,
        // color: 0x00ffff,
      });

      var points = new THREE.Points(geometry, material);

      var object = new THREE.Object3D();

      object.add(points);

      object.add(
        new THREE.Mesh(
          mesh,
          new THREE.MeshPhongMaterial({
            color: 0x00ffff,
            emissive: 0x00ffff,
            transparent: true,
            opacity: 1,
            wireframe: true,
            fog: false,
          })
        )
      );

      if (width > SMALL_SCALE_WIDTH) {
        object.scale.set(LARGE_OBJ_SCALE, LARGE_OBJ_SCALE, LARGE_OBJ_SCALE);
      } else {
        object.scale.set(SMALL_OBJ_SCALE, SMALL_OBJ_SCALE, SMALL_OBJ_SCALE);
      }

      scene.add(object);

      camera.position.z = 20;

      window.addEventListener("resize", () => {
        let width = window.innerWidth - 20;
        let height = window.innerHeight;
        // camera.aspect = width / height;

        camera.left = (width - 20) / -50;
        camera.right = (width - 20) / 50;
        camera.top = height / 50;
        camera.bottom = height / -50;

        if (width > SMALL_SCALE_WIDTH) {
          object.scale.set(LARGE_OBJ_SCALE, LARGE_OBJ_SCALE, LARGE_OBJ_SCALE);
        } else {
          object.scale.set(SMALL_OBJ_SCALE, SMALL_OBJ_SCALE, SMALL_OBJ_SCALE);
        }

        camera.updateProjectionMatrix();
        renderer.setSize(width - 20, height);
        renderer.setClearColor(0x000000, 0);
      });

      const render = function () {
        requestAnimationFrame(render);

        object.rotation.x += 0.01;
        object.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      render();
      mounted.current = true;
    }
    return () => {};
  }, [el]);

  return <div id="sphere-canvas-div" ref={el}></div>;
};

export default SphereWithPoints;
