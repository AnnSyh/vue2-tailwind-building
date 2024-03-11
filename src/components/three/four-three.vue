<template>
      <div class="m-auto relative border" style="width:600px;" ref="rendererContainer"></div>
</template>

<script>
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { CSS3DRenderer} from 'three/addons/renderers/CSS3DRenderer.js';
// import {  CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';



export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
    };
  },
  mounted() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls();

    this.init();

    this.animate();
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(65, 600 / 600, 0.1, 1000)
      // this.camera.position.z = 17;
      this.camera.position.set( 0, 0, 17 );
    },
    initRenderer() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      // this.renderer = new CSS3DRenderer();
      this.renderer.setSize(600, 600);
      this.$refs.rendererContainer.appendChild(this.renderer.domElement);
    },
    initControls() {
      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
      this.controls.rotateSpeed = 4;
    },
    onWindowResize() {
      this.camera.aspect = 600 / 600;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( 600 , 600  );
    },
    init() {
      // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      // this.cube = new THREE.Mesh(geometry);
      // this.scene.add(this.cube);


      // const verticesOfCube = [
      //     -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
      //     -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
      // ];
      // const indicesOfFaces = [
      //     2,1,0,    0,3,2,
      //     0,4,7,    7,3,0,
      //     0,1,5,    5,4,0,
      //     1,2,6,    6,5,1,
      //     2,3,7,    7,6,2,
      //     4,5,6,    6,7,4
      // ];
      // // const radius = 7;  
      // // const detail = 2; 

      // const polyhedronGeometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces);
      // // // Создание материала
      const materialPoly = new THREE.MeshBasicMaterial({color: 0xff0000});
      // // // Создание меша
      // const polyhedronMesh = new THREE.Mesh(polyhedronGeometry, materialPoly);
      // // // Добавление меша на сцену
      // this.scene.add(polyhedronMesh);

      const radius = 7;  
      // const detail = 1; 
      // const dodecahedron = new THREE.IcosahedronGeometry(radius, detail);
      // const dodecahedron = new THREE.IcosahedronGeometry(radius);
      const dodecahedron = new THREE.OctahedronGeometry(radius);
      const dodecahedronMesh = new THREE.Mesh(dodecahedron, materialPoly);
      this.scene.add(dodecahedronMesh);



    //   // Material
      // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 , vertexColors: false});
    //   // Создаем материал с желтым цветом для ребер
      const yellowMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    //   // Создаем икосаэдр
    //   const icosahedron = new THREE.IcosahedronGeometry(5, 0);
     // Выделяем ребра геометрии
      // const edges = new THREE.EdgesGeometry(icosahedron);  
      const edges = new THREE.EdgesGeometry(dodecahedron);  
      // const edges = new THREE.EdgesGeometry(polyhedronGeometry);  
      // Создаем объект Lines и применяем к нему материал
      const edgesLines = new THREE.LineSegments(edges, yellowMaterial);
      // Добавляем объект на сцену
      this.scene.add(edgesLines);
    //   const icosahedronMesh = new THREE.Mesh(icosahedron, material);
    //   this.scene.add(icosahedronMesh);
    //   window.addEventListener( 'resize', this.onWindowResize );


      // // Создаем div с текстом 
      // const textDiv = document.createElement( 'div' );
      // textDiv.style = "width: 200px; height:200px; border: 1px solid red;background-color:#ccc;padding:20px;"
      // textDiv.textContent = "I am a <div> element intersecting a WebGL sphere.\n\nThis text is editable!";
      // const object = new CSS3DObject( textDiv );
      // object.position.set(  0, 0, 240, 0 );
      // // Добавляем текстовый объект на сцену
      // this.scene.add( object );
      // console.log(textDiv)

   
    },
    animate() {
      // console.log('this.icosahedronMesh = ',this.icosahedronMesh)
      // console.log('this.cube = ',this.cube)
      requestAnimationFrame(this.animate);
      this.controls.update();

      // BoxGeometry 
      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;
      // this.icosahedronMesh.rotation.z += 0.01;
      
      this.renderer.render(this.scene, this.camera);

      // this.dodecahedronMesh.rotation.x+=2/100;
      // this.icosahedronMesh.rotation.y+=2/100;
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