import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
const gui = new GUI();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 10)
scene.add(camera)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;

// 坐标轴
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

controls.update();

function animate() {
  controls.update();
	renderer.render( scene, camera );
	requestAnimationFrame( animate );

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
})

const sphereGeometry = new THREE.SphereGeometry(3,30,30)
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff000,
//   wireframe: true
// })
// const mesh = new THREE.Mesh(sphereGeometry, material)
// scene.add(mesh)

const material = new THREE.PointsMaterial({
  color: 0xfff000,
  size: 0.05,
  // 因相机深度而衰减
  sizeAttenuation: true,
})

const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('/textures/particles/1.png')
material.map = texture;
material.alphaMap = texture;
material.transparent = true;
// 叠加时透出来
material.depthWrite = true;
// 亮度叠加
material.blending = THREE.AdditiveBlending;

const points = new THREE.Points(sphereGeometry, material)
scene.add(points)