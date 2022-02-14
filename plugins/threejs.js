import * as THREE from 'three'

const scene3d = document.getElementById("scene3d");
const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

// SCENE

this.scene = new THREE.Scene();

// CAMERA 

this.camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
this.camera.position.x = 17;
this.camera.position.y = 12;
this.camera.position.z = 13;
this.camera.lookAt(this.scene.position);

// RENDERER

this.renderer = new THREE.WebGLRenderer();
this.renderer.setClearColor(0x000, 1.0);
this.renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

// GEOMETRY & MATERIALS

const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff55ff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
this.scene.add(cube);
cube.position.z = 4;

const ballGeometry = new THREE.SphereGeometry(3, 16, 16);
const ballMaterial = new THREE.MeshPhongMaterial({ color: 0x33aaff });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
this.scene.add(ball);
ball.position.z = -5;

const floorGeometry = new THREE.BoxGeometry(30, 1, 30);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x656587 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
this.scene.add(floor);
floor.position.y = -3;
floor.receiveShadow = true;

// LIGHT

const spot1 = new THREE.SpotLight(0xffffff);
spot1.position.set(10, 100, -50);
this.scene.add(spot1);

// FINISH SCENE SETUP

// document.body.appendChild(scene3d.domElement);
scene3d.appendChild(this.renderer.domElement);
this.renderer.render(this.scene, this.camera);
