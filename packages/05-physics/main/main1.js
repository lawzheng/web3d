import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import * as CANNON from 'cannon-es'

// const gui = new GUI();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 10)
scene.add(camera)



const sphereGeometry = new THREE.SphereGeometry(1,200,200)
const sphereMaterial = new THREE.MeshStandardMaterial()
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.castShadow = true;
scene.add(sphere)

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial()
)
floor.position.set(0, -5,0);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
dirLight.castShadow = true;
scene.add(dirLight);

// 创建物理世界
// const world = new CANNON.World({ gravity: 9.8 })
const world = new CANNON.World()
world.gravity.set(0, -9.8, 0);
// 创建物理小球
const sphereShape = new CANNON.Sphere(1);
const sphereWorldMaterial = new CANNON.Material('sphere');
// 创建物理世界的物体
const sphereBody = new CANNON.Body({
  shape: sphereShape,
  position: new CANNON.Vec3(0,0,0),
  // 质量
  mass: 1,
  // 材质
  material: sphereWorldMaterial,
})
// 物体添加到物理世界
world.addBody(sphereBody)

const hitSound = new Audio('/assets/hitSound.mp3')

function hitEvent (e) {
  // 碰撞强度
  const impactStrength = e.contact.getImpactVelocityAlongNormal();
  if (impactStrength > 2) {
    // 重新播放
    hitSound.currentTime = 0;
    hitSound.play()
  }
}


// 监听碰撞事件
sphereBody.addEventListener('collide', hitEvent)

// 物理世界地面
const floorShape = new CANNON.Plane()
const floorBody = new CANNON.Body();
const floorMaterial = new CANNON.Material('floor');
floorBody.material = floorMaterial;

const defaultContactMaterial = new CANNON.ContactMaterial(
  sphereWorldMaterial,
  floorMaterial,
  {
    // 摩擦力
    friction: 0.1,
    // 弹性
    restitution: 0.7
  }
);
world.addContactMaterial(defaultContactMaterial);

// 质量为0可以保持不动
floorBody.mass = 0;
floorBody.addShape(floorShape);
floorBody.position.set(0, -5, 0);
// 旋转
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), -Math.PI / 2)
world.addBody(floorBody)

const renderer = new THREE.WebGLRenderer({
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;

// 坐标轴
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const clock = new THREE.Clock();
function animate() {
  const deltaTime = clock.getDelta();

  // 更新物理引擎世界中的物体
  world.step(1/120, deltaTime);
  // 
  sphere.position.copy(sphereBody.position)

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