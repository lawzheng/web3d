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
  40
);

camera.position.set(0, 0, 30)
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


function createPoints(url, size = 0.5) {
  const particleGeometry = new THREE.BufferGeometry()
  const count = 10000
  
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100
    colors[i] = Math.random()
  }
  particleGeometry.setAttribute(
    'position', 
    new THREE.BufferAttribute(positions, 3)
  )
  // particleGeometry.setAttribute(
  //   'color', 
  //   new THREE.BufferAttribute(colors, 3)
  // )

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size,
    // 因相机深度而衰减
    sizeAttenuation: true,
  })
  
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(`/textures/particles/${url}.png`)
  material.map = texture;
  material.alphaMap = texture;
  material.transparent = true;
  // 叠加时透出来
  material.depthWrite = true;
  // 亮度叠加
  material.blending = THREE.AdditiveBlending;
  // material.vertexColors = true
  
  const points = new THREE.Points(particleGeometry, material)
  scene.add(points)

  return points;
}

const points1 = createPoints('xh');
const points2 = createPoints('xh', 1);


const clock = new THREE.Clock()

function animate() {
  controls.update();
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
  const time = clock.getElapsedTime()
  points1.rotation.x = time * 0.3
  points2.rotation.x = time * 0.5
  points2.rotation.y = time * 0.4
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