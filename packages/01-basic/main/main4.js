import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 10)
scene.add(camera)

const rgbeLoader = new RGBELoader()
rgbeLoader.loadAsync('textures/hdr/002.hdr').then(texture => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture
  scene.environment = texture
})

// const cubeTextureLoader = new THREE.CubeTextureLoader()
// const envMapTexture = cubeTextureLoader.load([
//   'textures/environmentMaps/1/px.jpg',
//   'textures/environmentMaps/1/nx.jpg',
//   'textures/environmentMaps/1/py.jpg',
//   'textures/environmentMaps/1/ny.jpg',
//   'textures/environmentMaps/1/pz.jpg',
//   'textures/environmentMaps/1/nz.jpg',
// ])

const sphereGeometry = new THREE.SphereGeometry(1,20,20)
const material = new THREE.MeshStandardMaterial({
  metalness: 0.7,
  roughness: 0.1,
  // envMap: envMapTexture
})
const sphere = new THREE.Mesh(
  sphereGeometry,
  material
)
scene.add(sphere)
// 给场景添加背景
// scene.background = envMapTexture
// 给场景所有的物体添加默认的环境贴图
// scene.environment = envMapTexture


// 环境灯光
const light = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
scene.add( light );
// 平行光
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(10,10,10)
scene.add( directionalLight );

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// renderer.render(scene, camera)

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