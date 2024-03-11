<template>
  <div>
    <div ref="container"></div>
    <div id="blocker"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

function Element( id, x, y, z, ry ) {

  const div = document.createElement( 'div' );
  // div.style.width = '480px';
  // div.style.height = '260px';
  div.style = "width: 480px; height:260px; border: 1px solid red;background-color:#ccc;padding:20px;"
  div.textContent = "I am a <div> element intersecting a WebGL sphere.\n\nThis text is editable!";

  // const button = document.createElement( 'div' );
  // button.style = "border:2px solid red;"
  // button.textContent = "Click me!";
  // button.addEventListener('click', () => alert('You clicked a <button> element in the DOM!'))

    // Создаем элемент <a> (ссылку)
    const link = document.createElement('a');
    link.textContent = 'Click me!'; 
    link.target = '_blank'; 
    link.href = 'https://miro.com/app/board/o9J_kuLIpTw=/'; 
    // Добавляем ссылку в div.textContent
    div.appendChild(link);
    
    console.log('link = ', link)
    link.addEventListener('click', function() {
      alert('Событие произошло!'); // Здесь вы можете добавить нужные действия
    });
  

  // const iframe = document.createElement( 'iframe' );
  // iframe.style.width = '480px';
  // iframe.style.height = '260px';
  // iframe.style.border = '0px';
  // iframe.style.color = '#000';
  // iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
  // div.appendChild( iframe );

  const object = new CSS3DObject( div );
  object.position.set( x, y, z );
  object.rotation.y = ry;

  return object;
}

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null
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
      this.camera = new THREE.PerspectiveCamera( 50, 800 / 800, 1, 5000 );
      this.camera.position.set( 500, 350, 750 );
    },
    initRenderer() {
      this.renderer = new CSS3DRenderer();
      this.renderer.setSize(800 , 800 );
      this.$refs.container.appendChild(this.renderer.domElement);
    },
    initControls() {
      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
      this.controls.rotateSpeed = 4;
    },
    onWindowResize() {
      this.camera.aspect = 800 / 800;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( 800 , 800  );
    },
    init() {
      const group = new THREE.Group();
      group.add( new Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
      group.add( new Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
      group.add( new Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
      group.add( new Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
      this.scene.add( group );

      window.addEventListener( 'resize', this.onWindowResize );

      // Block iframe events when dragging camera
      const blocker = document.getElementById( 'blocker' );
      blocker.style.display = 'none';
      this.controls.addEventListener( 'start', function () {
        blocker.style.display = '';
      } );
      this.controls.addEventListener( 'end', function () {
        blocker.style.display = 'none';
      } );

      },
      animate() {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      },

  }
};
	
</script>
<style scoped>

body {
    background-color: #ffffff;
}

#blocker {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

</style>