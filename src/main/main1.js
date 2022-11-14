import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 10)
scene.add(camera)


// 几何体
// const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// const cubeGeometry = new THREE.BufferGeometry();
// const vertices = new Float32Array([
//   -1,-1,1,
//   1,-1,1,
//   1,1,1,
//   1,1,1,
//   -1,1,1,
//   -1,-1,1
// ])
// cubeGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

// // 材质

for (let i = 0; i < 50; i++) {
  const geometry = new THREE.BufferGeometry();
  const positionArray = new Float32Array(9);

  for (let j = 0; j < 9; j++) {
    positionArray[j] = Math.random() * 10 - 5
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
  
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(Math.random(),Math.random(),Math.random()),
    opacity: Math.random(),
    transparent: true
  })
  const mesh = new THREE.Mesh(geometry, cubeMaterial)
  scene.add(mesh)
}

// const mesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
// // 生成完整的
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

// scene.add(mesh)

// cube.position.set(5,0,0)
// 缩放
// cube.scale.set(3,2,1)
// 旋转
// cube.rotation.set(Math.PI / 4,0,0)

// scene.add(cube)

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