import * as THREE from 'three';

export default (await import('vue')).defineComponent({
data() {
return {
scene: new THREE.Scene(),
camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
renderer: new THREE.WebGLRenderer(),
light: new THREE.AmbientLight(16777215),
cube: null
};
},
mounted() {
this.renderer.setSize(window.innerWidth, window.innerHeight);
// this.renderer.setSize(500, 500);
// this.renderer.setClearColor('#ffffff'); цвет фона
this.$refs.rendererContainer.appendChild(this.renderer.domElement);

this.camera.position.z = 5;

// const geometry = new THREE.SphereGeometry(200,12,12);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 16777215, wireframe: true });
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, vertexColors: THREE.FaceColors});
// for(var i=0; i < geometry.faces.length; i++){
//   geometry.faces[i].color.sectionRGB(Math.random(),Math.random(),Math.random())
// }
this.cube = new THREE.Mesh(geometry, material);
this.scene.add(this.cube);

this.animate();
},
methods: {
animate() {
requestAnimationFrame(this.animate);

this.cube.rotation.x += 0.01;
this.cube.rotation.y += 0.01;

this.renderer.render(this.scene, this.camera);
}
}
});
