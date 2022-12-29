import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import vertexShader from '../shader/vertex.glsl'
import fragmentShader from '../shader/fragment.glsl'
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

// const geometry = new THREE.BufferGeometry();
// const positions = new Float32Array([0,0,0]);

// geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// const material = new THREE.PointsMaterial({
//   color: 0xff0000,
//   size: 10,
//   sizeAttenuation: true,
// })

const textureLoad = new THREE.TextureLoader();
const texture = textureLoad.load('/textures/particles/10.png')
const texture1 = textureLoad.load('/textures/particles/9.png')
const texture2 = textureLoad.load('/textures/particles/11.png')

// const material = new THREE.ShaderMaterial({
//   uniforms: {
//     UTexture: {
//       value: texture
//     },
//   },
//   vertexShader: vertexShader,
//   fragmentShader: fragmentShader,
//   transparent: true,
// })

// const points = new THREE.Points(geometry, material)
// scene.add(points)
const params = {
  count: 10000,
  size: 0.1,
  radius: 5,
  branch: 4,
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

  const scales = new Float32Array(params.count);

  const imgIndex = new Float32Array(params.count);

  let currentColor;

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
    currentColor = mixColor;

    scales[current] = Math.random();

    imgIndex[current] = i % 3;
  }

  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  )
  geometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colors, 3)
  )
  geometry.setAttribute(
    'aScale',
    new THREE.BufferAttribute(scales, 1)
  )
  geometry.setAttribute(
    'imgIndex',
    new THREE.BufferAttribute(imgIndex, 1)
  )

  material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    // 被挡住的也画出来
    depthWrite: false,
    // 叠加会更亮
    blending: THREE.AdditiveBlending,
    transparent: true,
    vertexColors: true,
    uniforms: {
      UTexture: {
        value: texture
      },
      UTexture1: {
        value: texture1
      },
      UTexture2: {
        value: texture2
      },
      uTime: {
        value: 0
      },
      uColor: {
        value: currentColor
      }
    },
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);
}
generateGalaxy();

const clock = new THREE.Clock();

function animate() {
  controls.update();
	renderer.render( scene, camera );
	requestAnimationFrame( animate );

  material.uniforms.uTime.value = clock.getElapsedTime();

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