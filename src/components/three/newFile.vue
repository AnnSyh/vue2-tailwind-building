<template>
    <div class="m-auto relative border">

        <div id="css"></div>
    </div>
</template>

<script>

import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

export default {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            controls: null,
            mouseX: 0, 
            mouseY: 0,
			windowHalfX: window.innerWidth / 2,
			windowHalfY: window.innerHeight / 2,
        };
    },
    mounted() {
        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initRoot();
        this.initControls();

        this.init();

        this.animate();

    },

    methods: {
        initScene() {
            this.scene = new THREE.Scene();
        },
        initCamera() {
            this.camera = new THREE.PerspectiveCamera(50, 600 / 600, 1, 5000);
            this.camera.position.set(500, 350, 750);
        },
        initRenderer() {
            this.renderer = new CSS3DRenderer();
            this.renderer.setSize(600, 600);
        },
        initRoot() {
            this.root = new THREE.Object3D();
        },

        initControls() {
            this.controls = new TrackballControls(this.camera, this.renderer.domElement);
            this.controls.rotateSpeed = 4;
        },
        onDocumentMouseMove( event ) {
            // console.log('onDocumentMouseMove event = ',event)
            // console.log('onDocumentMouseMove this.windowHalfX = ',this.windowHalfX)
            this.mouseX = ( event.clientX - this.windowHalfX );
            this.mouseY = ( event.clientY - this.windowHalfY );
        },

        init() {
            this.root.position.z = 10;
            this.root.position.y = 10;
            // this.root.rotation.y = Math.PI * 2;
            this.scene.add(this.root);

            var background = document.createElement('div');
            background.style = "width:400px; height:400px";
            background.id = "background";
            var css3dObject = new CSS3DObject(background);
            // css3dObject.rotation.y = Math.PI *2;
            css3dObject.element.textContent =
                "I am a <div> element intersecting a WebGL sphere.\n\nThis text is editable!";
            // css3dObject.element.setAttribute("contenteditable", "");
            css3dObject.position.z = 20;
            css3dObject.element.style.opacity = "1";
            css3dObject.element.style.padding = "40px";
            const color1 = "#7bb38d";
            const color2 = "#71a381";
            css3dObject.element.style.background = `repeating-linear-gradient(
            45deg,
            ${color1},
            ${color1} 10px,
            ${color2} 10px,
            ${color2} 20px
        )`;
            this.root.add(css3dObject);
            var button = document.createElement('div');
            // button.style.width = "175px";
            // button.style.height = "20px";
            button.style.zIndex = "20";
            var css3dObjectButton = new CSS3DObject(button);
            css3dObjectButton.position.set(0, 0, 0);
            css3dObjectButton.element.style.border = '2px solid #fa5a85';
            css3dObjectButton.element.textContent = "Click me!";
            css3dObjectButton.element.addEventListener('click', () => alert('You clicked a <button> element in the DOM!'));
            css3dObjectButton.position.x = -20;
            css3dObjectButton.position.y = -50;
            css3dObjectButton.position.z = 10;
            css3dObjectButton.element.style.background = '#e64e77';
            this.root.add(css3dObjectButton);

            this.renderer2 = new CSS3DRenderer();
            // this.renderer2.domElement.style = 'position:absolute; top:20px; border:1px solid red;overflow:hidden;'
            document.querySelector('#css').appendChild(this.renderer2.domElement);

            this.scene.add(css3dObject);

            
            // document.addEventListener( 'mousemove', this.onDocumentMouseMove );
            document.querySelector('#css').addEventListener( 'mousemove', this.onDocumentMouseMove );
            // document.querySelector('#background').addEventListener( 'mousemove', this.onDocumentMouseMove );

            window.addEventListener('resize', this.resize);
            this.resize();
        },


        resize() {
            this.windowHalfX = window.innerWidth / 2;
			this.windowHalfY = window.innerHeight / 2;

            this.camera.fov = 35;
            this.camera.aspect = 600 / 600;
            // this.camera.near = 1
            // this.camera.far = 2000
            this.camera.updateProjectionMatrix();
            this.renderer2.setSize(600, 600);
        },
        animate() {
            this.camera.position.x += ( this.mouseX - this.camera.position.x ) * 0.05;
			this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * 0.05;

            requestAnimationFrame(this.animate);
            this.controls.update();
            this.renderer2.render(this.scene, this.camera);
        },
    }
};
</script>
<style scoped>

</style>