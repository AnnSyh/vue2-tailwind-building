<template>
  <div>
    <div class="m-auto" ref="rendererContainer"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
// import { MeshStandardNodeMaterial, texture, parallaxUV, uv } from 'three/nodes';

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      loader: null,
    };
  },
  mounted() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initRoot();
    this.initLoader();

    this.renderer.setSize(600, 600);
    this.$refs.rendererContainer.appendChild(this.renderer.domElement);

    this.camera.position.z = 20;


    const octahedron = new THREE.OctahedronGeometry(5, 2);
    const octahedronMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    const octahedronMesh = new THREE.Mesh(octahedron, octahedronMaterial);
    this.scene.add(octahedronMesh);

    

    this.animate();
  },
  
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, 400 / 400, 0.1, 1000);
    },
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
    },
    initRoot() {
      this.root = new THREE.Object3D()
    },
    initLoader() {
      this.loader = new THREE.TextureLoader()
    },
    animateOctahedron() {
      this.octahedronMesh.rotation.x += 0.01;
      this.octahedronMesh.rotation.y += 0.01;
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      // this.animateOctahedron();
    }

  }
};
	
</script>
<style scoped>

</style>