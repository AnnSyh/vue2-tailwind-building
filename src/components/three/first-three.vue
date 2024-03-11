<template>
  <div>
    <div class="m-auto" ref="rendererContainer"></div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(45, 400 / 400, 0.1, 1000),
      renderer: new THREE.WebGLRenderer({ antialias: true }),
      light: new THREE.AmbientLight(0xffffff),
      cube: null,
      loader: new THREE.TextureLoader(),
      raycaster: new THREE.Raycaster(),
      mouse: new THREE.Vector2(),
      pos: new THREE.Vector3(2, 0.5, 0),
      intersects: {},
      geometry: new THREE.PlaneGeometry(5, 2),
    };
  },
  mounted() {
    this.renderer.setSize(400, 400);
    this.$refs.rendererContainer.appendChild(this.renderer.domElement);

    this.renderer.domElement.addEventListener('click', this.onMouseClick);

    this.camera.position.z = 3;

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
 
    const material = [
        new THREE.MeshBasicMaterial({ map: this.loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg')}),
        new THREE.MeshBasicMaterial({ map: this.loader.load('https://png.pngtree.com/background/20230621/original/pngtree-pink-striped-waves-on-rippled-cloth-a-3d-rendering-picture-image_3910514.jpg')}),
        new THREE.MeshBasicMaterial({ map: this.loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pq61N2G8UyEWAj_T7Grn5WmIY2R6LwJxC7i8dPeAjNh-gRKBeJ9KAz_mQaeTpu_NwNk&usqp=CAU')}),
        new THREE.MeshBasicMaterial({ map: this.loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwdSEn-lXHNGTi8vG7TY4n5Hike8DVv_kiMDEpvcF48P-ZbXNXwLKUjUOxr8yJw5eVwQ&usqp=CAU')}),
        new THREE.MeshBasicMaterial({ map: this.loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcmHlLzOCJ0HCJka4zk6pf5n7FTzdL9iiyzoEVwbFlF1KNi9ZsGU_IwbcK3Gm9qTAUwg&usqp=CAU')}),
        new THREE.MeshBasicMaterial({ map: this.loader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUiQlKAX89Py2SBHMsWPHwwk92omTO5UwKw&usqp=CAU')}),
    ];


    // Создание текста
    // const canvas = document.querySelector("canvas");
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, vertexColors: false});
    const plane = new THREE.Mesh(geometry, planeMaterial);
    // var ctx = plane.getContext("2d");
    // ctx.fillText("HTML5 Rocks!", 0, plane.height/2);
    this.scene.add(plane);



    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.scene.background = new THREE.Color(0xffffff);

    this.animate();
  },
  
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
    onMouseClick(event) {
       console.log('click');
        event.preventDefault();
        // Calculate mouse position
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // console.log('mouse.x = ',this.mouse.x);
        // console.log('mouse.y = ',this.mouse.y);

        // Update the picking ray with the camera and mouse position
        this.raycaster.setFromCamera(this.mouse, this.camera);

        // Calculate objects intersecting the picking ray
        this.intersects = this.raycaster.intersectObjects(this.cube);

        if (this.intersects.length > 0) {
            this.intersects[0].object.material.color.set(0xff0000); // Change color of clicked face to red
        }
    }

  }
};
	
</script>
<style scoped>
.label {
  text-align: center;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 5px;
  color: #4f8;
  font-family: sans-serif;
  background: rgba( 0, 0, 0, .6 );
}

* {
    outline: none;
}


</style>