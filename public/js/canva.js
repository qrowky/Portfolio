import * as THREE from "../libs/three.module.js";
import { GLTFLoader } from "../libs/GLTFLoader.js";
import { PointerLockControls } from "../libs/PointerLockControls.js";

var camera, scene, renderer, controls;
var objects = [];
var raycaster;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;
var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();
var vertex = new THREE.Vector3();
var color = new THREE.Color();

init();
animate();

/*
  *
  *    INIT
  * 
  * 
  * * * * */

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x7fc8e2);
  scene.fog = new THREE.Fog(0xffffff, 10, 2000);

  setCamera();
  light();
  loader();
  setUpRenderer();

  window.addEventListener("resize", onWindowResize, false);
}


/*
  *
  *    CAMERA CONTROLS
  * 
  * 
  * * * * */

function setCamera() {

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    4000
  );
  camera.position.y = 500;
  camera.position.x = 200;
  controls = new PointerLockControls(camera, document.body);

  var blocker = document.getElementById("blocker");
  var instructions = document.getElementById("instructions");

  instructions.addEventListener(
    "click",
    function () {
      controls.lock();
    },
    false
  );

  controls.addEventListener("lock", function () {
    instructions.style.display = "none";
    blocker.style.display = "none";
  });

  controls.addEventListener("unlock", function () {
    blocker.style.display = "block";
    instructions.style.display = "";
  });

  scene.add(controls.getObject());

  var onKeyDown = function (event) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;

      case 32: // space
        if (canJump === true) velocity.y += 350;
        canJump = false;
        break;
    }
  };

  var onKeyUp = function (event) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
      case 83: // s
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown, false);
  document.addEventListener("keyup", onKeyUp, false);

  raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

			
}

/*
  *
  *    LIGHT
  * 
  * 
  * * * * */

function light() {
  var light = new THREE.AmbientLight(0x404040, 5);
  scene.add(light);
}

/*
  *
  *    GLTFLOADER
  * 
  * 
  * * * * */
function loader() {
  var loader = new GLTFLoader();
  loader.load(
    "./public/img/models/roomObj.gltf",
    function (object) {
      scene.add(object.scene);
      render();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened : " + error);
    }
  );
}

/*
  *
  *    RESIZE
  * 
  * 
  * * * * */

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/*
  *
  *    ANIMATION
  * 
  * 
  * * * * */

function animate() {
  requestAnimationFrame(animate);

  if (controls.isLocked === true) {
    raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 10;

    var intersections = raycaster.intersectObjects(objects);

    var onObject = intersections.length > 0;

    var time = performance.now();
    var delta = (time - prevTime) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

    if (onObject === true) {
      velocity.y = Math.max(0, velocity.y);
      canJump = true;
    }

    controls.moveRight(-velocity.x * delta);
    controls.moveForward(-velocity.z * delta);

    controls.getObject().position.y += velocity.y * delta; // new behavior

    if (controls.getObject().position.y < 10) {
      velocity.y = 0;
      controls.getObject().position.y = 10;

      canJump = true;
    }

    prevTime = time;

    render();
  }
}

/*
  *
  *    SET UP RENDER
  * 
  * 
  * * * * */

function setUpRenderer() {
  renderer = new THREE.WebGLRenderer();
  renderer.physicallyCorrectLights = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

/*
  *
  *    RENDER
  * 
  * 
  * * * * */

function render() {
  renderer.render(scene, camera);
}
