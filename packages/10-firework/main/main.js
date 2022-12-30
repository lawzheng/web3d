import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import vertexShader from '../shader/vertex.glsl';
import fragmentShader from '../shader/fragment.glsl';

import { RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import Firework from './firework';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 20)
scene.add(camera)

const rgbeLoader = new RGBELoader();
rgbeLoader.loadAsync('/assets/imgs/4k.hdr').then((texture) => {
  // 按圆柱渲染
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
})



// const material = new THREE.MeshBasicMaterial({ color: '#00ff00' })
// 创建着色器
const shaderMaterial= new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  // wireframe: true,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: {
      value: 0
    },
  },
  // transparent: true
})


const gltfLoader = new GLTFLoader();
let lightBox = null;
gltfLoader.load('/assets/model/flyLight.glb', (gltf) => {
  lightBox = gltf.scene.children[1];
  lightBox.material = shaderMaterial;

  for (let i = 0; i < 10; i++) {
    let flyLight = gltf.scene.clone(true);
    let x = (Math.random() - 0.5) * 300;
    let z = (Math.random() - 0.5) * 300;
    let y = Math.random() * 60 + 25;
    flyLight.position.set(x,y,z);
    gsap.to(flyLight.rotation, {
      y: 2 * Math.PI,
      duration: 10 + Math.random() * 30,
      repeat: -1,
    });
    gsap.to(flyLight.position, {
      x: '+=' + Math.random() * 5,
      y: '+=' + Math.random() * 20,
      yoyo: true,
      duration: 5 + Math.random() * 10,
      repeat: -1,
    })
    scene.add(flyLight);
  }
})


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);
// 解码方式 对应图片的
renderer.outputEncoding = THREE.sRGBEncoding;
// 色调映射 一般都用这个 电影效果
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;

const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;
// 自动旋转
controls.autoRotate = true;
controls.autoRotateSpeed = 0.1;
// 视角角度
// controls.maxPolarAngle = Math.PI / 4 * 3;
// controls.minPolarAngle = Math.PI / 4 * 3;

// 坐标轴
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

controls.update();


let fireworks = [];
let createFireworks = () => {
  let color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
  let position = {
    x: (Math.random() - 0.5) * 40,
    z: (Math.random() - 0.5) * 40,
    y: 7 + Math.random() * 25,
  }
  let firework = new Firework(color, position);
  firework.addScene(scene, camera);
  fireworks.push(firework);
};

window.addEventListener('click', createFireworks)


const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();

  shaderMaterial.uniforms.uTime.value = elapsedTime;
  
  controls.update();
	renderer.render( scene, camera );

  fireworks.forEach((item, i) => {
    const res = item.update();
    if (res === 'remove') {
      fireworks.splice(i, 1)
    }
  })


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
