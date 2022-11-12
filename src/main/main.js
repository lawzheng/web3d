import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 10)
scene.add(camera)

// 几何体
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// 材质
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffff00})
// 生成完整的
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

cube.position.set(5,0,0)

scene.add(cube)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement)

// 坐标轴
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

controls.update();

function animate() {
  // 移动
  cube.position.x += 0.01;
  if (cube.position.x > 5) {
    cube.position.x = 0
  }
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate()