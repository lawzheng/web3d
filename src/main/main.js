import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 10)
scene.add(camera)

const manager = new THREE.LoadingManager(
  function ( ) {

    console.log( 'Loading complete!');
  
  },
  function ( url, itemsLoaded, itemsTotal ) {

    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  
  },
  function ( url ) {

    console.log( 'There was an error loading ' + url );
  
  }
);

const textureLoader = new THREE.TextureLoader(manager);
const doorTextureLoader = textureLoader.load('./textures/door/color.jpg')
// 透明材质
const doorAplhaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAOTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorHeightexture = textureLoader.load('./textures/door/height.jpg')
const doorRoughnesstexture = textureLoader.load('./textures/door/roughness.jpg')
const doorMetalnesstexture = textureLoader.load('./textures/door/metalness.jpg')
const doorNormalMaptexture = textureLoader.load('./textures/door/normal.jpg')



// doorTextureLoader.offset.x = 0.5;
// doorTextureLoader.offset.y = 0.5;
// 设置旋转中心
// doorTextureLoader.center.set(0.5,0.5)
// doorTextureLoader.rotation = Math.PI / 4;
// doorTextureLoader.repeat.set(2,3);
// // x轴重复 镜像重复
// doorTextureLoader.wrapS = THREE.MirroredRepeatWrapping;
// // y轴重复
// doorTextureLoader.wrapT = THREE.RepeatWrapping;

// 纹理设置
// doorTextureLoader.minFilter = THREE.NearestFilter;
// doorTextureLoader.magFilter = THREE.NearestFilter;

// 几何体
const cubeGeometry = new THREE.BoxGeometry(1,1,1, 200, 200);
// 基础材质
// const cubeMaterial = new THREE.MeshBasicMaterial({
//   color: '#ffff00',
//   map: doorTextureLoader,
//   alphaMap: doorAplhaTexture,
//   aoMap: doorAOTexture,
//   // 环境遮挡效果的强度
//   aoMapIntensity: 0.5,
//   // 开启透明
//   transparent: true,
//   // opacity: 0.5,
//   // side: THREE.DoubleSide,
// })
// 标准材质
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 'gray',
  map: doorTextureLoader,
  alphaMap: doorAplhaTexture,
  aoMap: doorAOTexture,
  // 环境遮挡效果的强度
  aoMapIntensity: 0.5,
  // 开启透明
  transparent: true,
  // opacity: 0.5,
  // side: THREE.DoubleSide,
  displacementMap: doorHeightexture,
  displacementScale: 0.05,
  roughness: 1,
  roughnessMap: doorRoughnesstexture,
  metalness: 1,
  metalnessMap: doorMetalnesstexture,
  normalMap: doorNormalMaptexture
})

// 生成完整的
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

scene.add(cube)
cubeGeometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(cubeGeometry.attributes.uv.array, 2)
)

const planeGeometry = new THREE.PlaneGeometry(1,1, 200, 200)
const plane = new THREE.Mesh(
  planeGeometry,
  cubeMaterial
)
plane.position.set(1,0,0)
scene.add(plane)
planeGeometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(planeGeometry.attributes.uv.array, 2)
)

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

const clock = new THREE.Clock();

// const animate1 = gsap.to(cube.position, {
//   x: 5,
//   duration: 5,
//   // 重复次数，-1无限次
//   repeat: -1,
//   // 往返
//   yoyo: true,
//   delay: 2,
// });

// gsap.to(cube.rotation, {
//   x: 2 * Math.PI,
//   duration: 5,
//   ease: "power1.inout",
//   onComplete: () => {
//     console.log(1);
//   }
// })

window.addEventListener('dblclick', () => {
  if (animate1.isActive()) {
    animate1.pause()
  } else {
    animate1.resume()
  }
})

function animate() {
  const time = clock.getElapsedTime();
  const deltaTime = clock.getDelta();
  // 移动
  // cube.position.x = time / 1000 % 5 * 1;
  // if (cube.position.x > 5) {
  //   cube.position.x = 0
  // }
  // cube.rotation.x += 0.01;
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