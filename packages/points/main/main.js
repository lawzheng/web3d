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

const textureLoader = new THREE.TextureLoader();
const particlesTexture = textureLoader.load(`/textures/particles/1.png`);

const params = {
  count: 10000,
  size: 0.1,
  radius: 5,
  branch: 10,
  color: '#ff6030',
  // 左右偏移量
  rotateScale: 0.3,
  endColor: '#1b3984',
}

let geometry = null;
let material = null;
let points = null;
const centerColor = new THREE.Color(params.color)
const endColor = new THREE.Color(params.endColor)

const generateGalaxy = () => {
  // 生成顶点
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(params.count * 3);
  const colors = new Float32Array(params.count * 3);

  for (let i = 0; i < params.count; i++) {
    // 平分一个圆的角度
    const branchAngel = (i % params.branch) * ((2 * Math.PI) / params.branch);

    const distance = Math.random() * params.radius * Math.pow(Math.random(), 3)

    const current = i * 3;

    // 3次方用于在近端数量更密集
    const randomX = (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) / 5;
    const randomY = (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) / 5;
    const randomZ = (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) / 5;

    positions[current] = 
      Math.cos(branchAngel + distance * params.rotateScale) * distance + randomX;
    positions[current + 1] = randomY;
    positions[current + 2] = 
      Math.sin(branchAngel + distance * params.rotateScale) * distance + randomZ;

    // 颜色渐变
    const mixColor = centerColor.clone();
    // 越远越像endColor
    mixColor.lerp(endColor, distance / params.radius);

    colors[current] = mixColor.r;
    colors[current + 1] = mixColor.g;
    colors[current + 2] = mixColor.b;
  }

  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  )
  geometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colors, 3)
  )

  material = new THREE.PointsMaterial({
    // color: new THREE.Color(params.color),
    size: params.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    map: particlesTexture,
    alphaMap: particlesTexture,
    transparent: true,
    vertexColors: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);
}
generateGalaxy();


const clock = new THREE.Clock()

function animate() {
  controls.update();
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
  const time = clock.getElapsedTime()
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