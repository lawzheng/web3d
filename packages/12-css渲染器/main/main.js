import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import moonMap from '../assets/imgs/moon.jpg';
import earthMap from '../assets/imgs/earth.jpg';

import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const gui = new GUI();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 5, -20)
scene.add(camera)

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);



// 坐标轴
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

const textureLoader = new THREE.TextureLoader();


const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
  shininess: 5,
  map: textureLoader.load(earthMap)
})
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
scene.add(earth)


const moonGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const moonMaterial = new THREE.MeshPhongMaterial({
  shininess: 5,
  map: textureLoader.load(moonMap)
})
const moon = new THREE.Mesh(moonGeometry, moonMaterial)
scene.add(moon)


const earthDiv = document.createElement('div')
earthDiv.className = 'label'
earthDiv.innerHTML = '地球'
earthDiv.style.color = '#ffffff';
const earthLabel = new CSS2DObject(earthDiv)
earthLabel.position.set(0,3.3,0)
earth.add(earthLabel)
// earth.rotation.y = Math.PI;


const chinaDiv = document.createElement('div')
chinaDiv.className = 'label'
chinaDiv.innerHTML = '中国'
chinaDiv.style.color = '#ffffff';
const chinaLabel = new CSS2DObject(chinaDiv)
chinaLabel.position.set(-1, 1.4, -3)
earth.add(chinaLabel)

const moonDiv = document.createElement('div')
moonDiv.className = 'label'
moonDiv.innerHTML = '月球'
moonDiv.style.color = '#ffffff';
const moonLabel = new CSS2DObject(moonDiv)
moonLabel.position.set(0,0.5,0)
moon.add(moonLabel)

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(labelRenderer.domElement)
labelRenderer.domElement.style.position = 'fixed'
labelRenderer.domElement.style.top = 0;
labelRenderer.domElement.style.left = 0;
labelRenderer.domElement.style.zIndex = 10;

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, labelRenderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;

const raycaster = new THREE.Raycaster();



const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);

  moon.position.set(Math.sin(time) * 5, 0, Math.cos(time) * 5)

  const chinaPosition = chinaLabel.position.clone();
  const labelDistance = chinaPosition.distanceTo(camera.position);
  chinaPosition.project(camera);
  raycaster.setFromCamera(chinaPosition, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length) {
    if (intersects[0].distance < labelDistance) {
      chinaLabel.element.style.display = 'none';
    } else {
      chinaLabel.element.style.display = 'block';
    }
  } else {
    chinaLabel.element.style.display = 'block';
  }

  requestAnimationFrame(animate);

}
animate()

window.addEventListener('resize', () => {
  // 更新宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 更新像素比
  renderer.setPixelRatio = window.devicePixelRatio;
  // 更新渲染器
  labelRenderer.setSize(window.innerWidth, window.innerHeight)
  // 更新像素比
  labelRenderer.setPixelRatio = window.devicePixelRatio;
})