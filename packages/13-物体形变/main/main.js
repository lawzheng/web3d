import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import { RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'

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

const rgbeLoader = new RGBELoader();
rgbeLoader.loadAsync('/textures/hdr/004.hdr').then((texture) => {
  // 按圆柱渲染
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
})

const params = {
  value: 0
}

const gltfLoader = new GLTFLoader();
gltfLoader.load('/textures/flower2.glb', (gltf) => {
  scene.add(gltf.scene)

  let flower2 = gltf.scene.children[0].children[0].children[0];
  gltfLoader.load('/textures/flower1.glb', (gltf2) => {
    flower2.geometry.morphAttributes.position = [];
    flower2.geometry.morphAttributes.position.push(gltf2.scene.children[0].children[0].children[0].geometry.attributes.position)
    flower2.updateMorphTargets();
    gsap.to(params, {
      value: 1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      onUpdate: () => {
        flower2.morphTargetInfluences[0] = params.value;
      }
    })
  })
})












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