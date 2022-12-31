import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
const gui = new GUI();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 5)
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

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );

directionalLight.position.z = 5;
scene.add( directionalLight );

const floorPlane = new THREE.PlaneGeometry(10,10, 64, 64);

const basicMaterial = new THREE.MeshBasicMaterial({
  color: '#ffffff',
  side: THREE.DoubleSide,
})


const floor = new THREE.Mesh(
  floorPlane,
  basicMaterial,
)
floor.position.set(0,0,-6)
scene.add(floor)

const textureLoader = new THREE.TextureLoader();


const gltfLoader = new GLTFLoader();
gltfLoader.load('/textures/man/man_base_mesh.glb', (gltf) => {
  const mesh = gltf.scene.children[0];
  console.log(mesh);
  scene.add(mesh)

  
  mesh.children[0].children[9].material.onBeforeCompile = (shader, render) => {
    console.log(shader.vertexShader)

    shader.vertexShader = shader.vertexShader.replace(
      `#include <common>`,
      `#include <common>
      mat2 rotate2d(float _angle){
        return mat2(cos(_angle), -sin(_angle),
        sin(_angle),cos(_angle));
      }
      `
    )

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `#include <begin_vertex>
      float angle = transformed.y;
      mat2 roatetMatrix = rotate2d(angle);
      transformed.xz = roatetMatrix * transformed.xz;
      `
    )
    
  }
})







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