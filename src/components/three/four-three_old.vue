<template>
      <!-- <canvas class="m-auto relative border" ref="rendererContainer"></canvas> -->
      <div class="m-auto relative border" ref="rendererContainer">
        <canvas></canvas>
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

    this.camera.position.z = 17;



    // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // this.cube = new THREE.Mesh(geometry);
    // this.scene.add(this.cube);

      // Создание текста
      // const canvas = document.querySelector("canvas");
      // console.log('canvas = ', canvas ) ;
      // var ctx = canvas.getContext("2d");
      // // ctx.fillStyle = "#FF0000";
      // // ctx.fillRect(0, 0, 150, 75);
      // console.log('ctx = ', ctx ) ;
      // ctx.font = "48px serif";
      // ctx.textAlign = "left";
      // // ctx.strokeText("Hello world", 0, 100);
      // ctx.fillText("HTML5 Rocks!", 0, canvas.height/2);

      // Создаем икосаэдр
    const icosahedron = new THREE.IcosahedronGeometry(5, 0);
    console.log('icosahedron = ',icosahedron)

    const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors  });

    const colors = [];
    for (let i = 0; i < 10; i++) {
      const color = new THREE.Color(Math.random() * 0xffffff);
      // console.log('color = ',color)
      colors.push(color);
      // icosahedron.faces[i].color = color;
    }
   
    console.log('colors = ',colors)

    icosahedron.colorsNeedUpdate = true;// Обязательно добавьте эту строку, чтобы обновить цвета граней

  // Присваиваем цвета каждой грани
  // icosahedron.faces.forEach((face, index) => {
  //   face.color = colors[index];
  // });

    // const material = [
    //     new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false}),
    //     new THREE.MeshBasicMaterial({ color: 0x47cf73, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0x118337, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0xbc213e, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0x2f5782, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0xfbd8a4, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0x118337, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0xa4c8fb, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0xfba4c4, wireframe: false }),
    //     new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false }),
    // ];

    const icosahedronMesh = new THREE.Mesh(icosahedron, material);
    this.scene.add(icosahedronMesh);

    // const gridHelper = new THREE.GridHelper(10);
    // this.scene.add(gridHelper);

    const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
    const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000FF,
    wireframe: false});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(sphere);
    sphere.position.set(-10, 10, 0);
    sphere.castShadow = true;



    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      // BoxGeometry 
      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },


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
  #css {
      width: 100px;
      height: 100px;

      position: absolute;
      top: 0; left: 0;
 
    --c1: #122538;
    --c2: #112233;
    background: repeating-linear-gradient(
        -45deg,
        var(--c1),
        var(--c1) 20px,
        var(--c2) 20px,
        var(--c2) 40px
    );
}
</style>