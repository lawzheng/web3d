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


const sphereGeometry = new THREE.SphereGeometry(1,20,20)
const material = new THREE.MeshStandardMaterial({
})
const sphere = new THREE.Mesh(
  sphereGeometry,
  material
)
// 物体开启阴影
sphere.castShadow = true
scene.add(sphere)

const planeGeometry = new THREE.PlaneGeometry(50,50)
const plane = new THREE.Mesh(planeGeometry, material)
plane.position.set(0,-1,0)
plane.rotation.x = -Math.PI / 2;
// 平面接收阴影
plane.receiveShadow = true
scene.add(plane)



// 环境灯光
const light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
scene.add( light );
// 平行光
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// 聚光灯
const directionalLight = new THREE.PointLight('#ff0000', 1);
// directionalLight.position.set(5, 5, 5);
// 光开启动态阴影
directionalLight.castShadow = true
// directionalLight.intensity = 2
directionalLight.decay = 0

// 阴影模糊度
directionalLight.shadow.radius = 20
// 阴影分辨率
directionalLight.shadow.mapSize.set(4096,4096)
// 聚光灯对象 可以跟随移动
directionalLight.target = sphere;

// directionalLight.shadow.camera.near = 0.5
// directionalLight.shadow.camera.far = 500
// directionalLight.shadow.camera.top = 5
// directionalLight.shadow.camera.bottom = -5
// directionalLight.shadow.camera.left = -5
// directionalLight.shadow.camera.right = 5

scene.add( directionalLight );


const smallBall = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 20, 20),
  new THREE.MeshBasicMaterial({color: 0xff0000})
)
smallBall.position.set(2,2,2)
smallBall.add(directionalLight)
scene.add( smallBall );

// gui
//   .add(directionalLight.shadow.camera, "near")
//   .min(0)
//   .max(10)
//   .step(0.1)
//   .onChange(() => {
//     directionalLight.shadow.camera.updateProjectionMatrix();
//   });
gui
  .add(sphere.position, "x")
  .min(-5)
  .max(5)
  .step(0.1)

gui
  .add(directionalLight, "distance")
  .min(0)
  .max(100)
  .step(0.1)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// 渲染器开启阴影
renderer.shadowMap.enabled = true;
renderer.physicallyCorrectLights = true

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

function animate() {
  let time = clock.getElapsedTime();
  smallBall.position.x = Math.sin(time) * 3;
  smallBall.position.z = Math.cos(time) * 3;
  smallBall.position.y = 2 + Math.sin(time * 10) / 2;
  controls.update();
	renderer.render( scene, camera );
	requestAnimationFrame( animate );

}
animate()

window.addEventListener('resize', () => {
  smallBall.position.x
  // 更新宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 更新像素比
  renderer.setPixelRatio = window.devicePixelRatio;
})