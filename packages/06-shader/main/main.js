import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'

import deepVertexShader from '../shader/deep/vertex.glsl'
import deepFragmentShader from '../shader/deep/fragment.glsl'

import ca from '../assets/imgs/ca.jpg'

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

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(ca);

// const material = new THREE.MeshBasicMaterial({ color: '#00ff00' })
// 创建着色器
const rawShaderMaterial= new THREE.RawShaderMaterial({
  vertexShader: deepVertexShader,
  fragmentShader: deepFragmentShader,
  // wireframe: true,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: {
      value: 0
    },
    uTexture: {
      value: texture
    }
  },
  transparent: true
})
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(1,1,64,64),
  rawShaderMaterial
)
scene.add(floor)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);
// renderer.setClearColor('#383539', 1);

const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;

// 坐标轴
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

controls.update();

const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();

  rawShaderMaterial.uniforms.uTime.value = elapsedTime;
  
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