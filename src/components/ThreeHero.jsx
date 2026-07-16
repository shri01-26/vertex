import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

gsap.registerPlugin(ScrollTrigger);

function ThreeHero() {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("three-active");
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#050816");
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    scene.add(new THREE.AmbientLight("#ffffff", 2));

    const blueLight = new THREE.PointLight("#19aefc", 5, 70);
    blueLight.position.set(-5, 4, 8);
    scene.add(blueLight);

    const greenLight = new THREE.PointLight("#5dffb2", 5, 70);
    greenLight.position.set(5, -3, 8);
    scene.add(greenLight);

    const topLight = new THREE.DirectionalLight("#ffffff", 2);
    topLight.position.set(0, 5, 5);
    scene.add(topLight);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 38;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: "#19aefc",
      size: 0.028,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const loader = new GLTFLoader();

    loader.load(
      "/models/vertex.glb",
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.needsUpdate = true;
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();

        box.getSize(size);
        box.getCenter(center);

        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        const maxAxis = Math.max(size.x, size.y, size.z);
        const baseScale = 2.4 / maxAxis;

        model.scale.setScalar(baseScale);

        modelGroup.position.set(0, 1.8, 0);
        // modelGroup.position.set(0, 1.2, 0);
        modelGroup.scale.set(1, 1, 1);
        modelGroup.add(model);

        camera.lookAt(0, 0, 0);

        const tl = gsap.timeline({
          scrollTrigger: {
            onLeave: () => {
              document.body.classList.remove("three-active");
            },

            onEnterBack: () => {
              document.body.classList.add("three-active");
            },
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.8,
            invalidateOnRefresh: true,
          },
        });

        // tl.to(
        //   modelGroup.position,
        //   {
        //     x: 0,
        //     y: 0.2,
        //     z: 0,
        //     duration: 4,
        //   },
        //   0
        // );
        tl.to(
          modelGroup.position,
          {
            x: 0,
            y: -1.2,
            z: 0,
            duration: 2.8,
          },
          2,
        );
        tl.to(
          modelGroup.rotation,
          {
            x: Math.PI * 0.35,
            y: Math.PI * 2.5,
            z: Math.PI * 0.15,
            duration: 4,
          },
          0,
        );

        tl.to(
          modelGroup.scale,
          {
            x: 1.25,
            y: 1.25,
            z: 1.25,
            duration: 4,
          },
          0,
        );

        tl.to(
          camera.position,
          {
            z: 6.5,
            y: 0,
            duration: 4,
          },
          0,
        );

        tl.to(
          particles.rotation,
          {
            x: 0.6,
            y: 1.5,
            duration: 4,
          },
          0,
        );

        tl.to(
          modelGroup.position,
          {
            x: 0,
            y: -1.65,
            z: 0,
            duration: 4,
          },
          4,
        );

        tl.to(
          modelGroup.rotation,
          {
            x: Math.PI * 0.75,
            y: Math.PI * 5.2,
            z: Math.PI * 0.35,
            duration: 4,
          },
          4,
        );

        tl.to(
          modelGroup.scale,
          {
            x: 1.55,
            y: 1.55,
            z: 1.55,
            duration: 4,
          },
          4,
        );

        tl.to(
          camera.position,
          {
            z: 5.2,
            y: 0,
            duration: 4,
          },
          4,
        );

        tl.to(
          particles.rotation,
          {
            x: 1.2,
            y: 3.2,
            duration: 4,
          },
          4,
        );

        ScrollTrigger.refresh();
      },
      undefined,
      (error) => {
        console.error("GLB model not loaded:", error);
      },
    );

    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      particles.rotation.y += 0.0003;
      modelGroup.rotation.y += 0.00045;

      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="three-hero-wrapper" ref={wrapperRef}>
      <div className="three-sticky">
        <canvas ref={canvasRef} className="three-canvas" />

        <div className="three-scroll-label">
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
}

export default ThreeHero;
