import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);

camera.position.set(0, 0, 18)
scene.add(camera)

const cubeGeometry = new THREE.BoxGeometry(2,2,2)
const material = new THREE.MeshBasicMaterial({
  wireframe: true
});
const redMaterial = new THREE.MeshBasicMaterial({
  color: '#ff0000'
})

let cubeArr = [];
let cubeGroup = new THREE.Group();
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 5; k++) {
      const cube = new THREE.Mesh(cubeGeometry, material)
      cube.position.set(i*2 - 4,j*2 - 4,k*2 - 4)
      cubeArr.push(cube)
      cubeGroup.add(cube)
    }
  }
}
scene.add(cubeGroup)

// 投射光线
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener('click', (e) => {
  pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

  // 通过摄像机和鼠标位置更新射线
	raycaster.setFromCamera( pointer, camera );
  // 计算物体和射线的焦点
	const intersects = raycaster.intersectObjects( cubeArr );

	for ( let i = 0; i < intersects.length; i ++ ) {
    intersects[i].object.material = redMaterial;
	}
})

// 三角形
let triangleGroup = new THREE.Group();
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
    transparent: true,
    side: THREE.DoubleSide
  })
  const mesh = new THREE.Mesh(geometry, cubeMaterial)
  triangleGroup.add(mesh);
}
triangleGroup.position.y = -30;
scene.add(triangleGroup)


// 小球
const sphereGroup = new THREE.Group();
const sphereGeometry = new THREE.SphereGeometry(1,20,20)
const sphereMaterial = new THREE.MeshStandardMaterial({
  side: THREE.DoubleSide
})
const sphere = new THREE.Mesh(
  sphereGeometry,
  sphereMaterial
)
// 物体开启阴影
sphere.castShadow = true
sphereGroup.add(sphere)

const planeGeometry = new THREE.PlaneGeometry(20,20)
const plane = new THREE.Mesh(planeGeometry, sphereMaterial)
plane.position.set(0,-1,0)
plane.rotation.x = -Math.PI / 2;
// 平面接收阴影
plane.receiveShadow = true
sphereGroup.add(plane)



// 环境灯光
// const light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
// sphereGroup.add( light );
// 平行光
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// 聚光灯
const directionalLight = new THREE.PointLight('#ff0000', 2);
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

sphereGroup.add( directionalLight );


const smallBall = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 20, 20),
  new THREE.MeshBasicMaterial({color: 0xff0000})
)
smallBall.position.set(2,2,2)
smallBall.add(directionalLight)
sphereGroup.add( smallBall );


sphereGroup.position.y = -60;
scene.add(sphereGroup)
let arrGroup = [cubeGroup, triangleGroup, sphereGroup]


const renderer = new THREE.WebGLRenderer({
  alpha: true
})
renderer.shadowMap.enabled = true;
renderer.physicallyCorrectLights = true
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)
// // 开启阻尼 更真实
// controls.enableDamping = true;

// 坐标轴
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

const clock= new THREE.Clock();

gsap.to(cubeGroup.rotation, {
  x: '+=' + Math.PI,
  y: '+=' + Math.PI,
  duration: 5,
  repeat: -1,
  ease: "power2.inOut"
})
gsap.to(triangleGroup.rotation, {
  x: '+=' + Math.PI,
  z: '+=' + Math.PI,
  duration: 6,
  repeat: -1,
  ease: "power2.inOut"
})
gsap.to(smallBall.position, {
  x: -3,
  duration: 6,
  repeat: -1,
  ease: "power2.inOut",
  yoyo: true
})
gsap.to(smallBall.position, {
  y: 0,
  duration: 0.5,
  repeat: -1,
  ease: "power2.inOut",
  yoyo: true
})

const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (e) => {
  mouse.x = ( e.clientX / window.innerWidth ) - 0.5;
	mouse.y = - ( e.clientY / window.innerHeight ) - 0.5;
})

function animate() {
  // const time = clock.getElapsedTime()
  const time = clock.getDelta();

  // cubeGroup.rotation.x = time * 0.5
  // cubeGroup.rotation.y = time * 0.5

  // triangleGroup.rotation.x = time * 0.4;
  // triangleGroup.rotation.z = time * 0.3;


  
  // smallBall.position.x = Math.sin(time) * 3;
  // smallBall.position.z = Math.cos(time) * 3;
  // smallBall.position.y = 2 + Math.sin(time * 10) / 2;
  // sphereGroup.rotation.z = Math.sin(time) * 0.05;
  // sphereGroup.rotation.x = Math.sin(time) * 0.05;

  camera.position.y = -(window.scrollY / window.innerHeight) * 30;
  camera.position.x += (mouse.x * 10 - camera.position.x) * time * 5;


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

let currentPage = 0;
window.addEventListener('scroll', () => {
  const newPage = Math.round(window.scrollY / window.innerHeight);
  if (newPage !== currentPage) {
    currentPage = newPage;
    
    gsap.to(arrGroup[currentPage].rotation, {
      z: "+=" + Math.PI,
      x: "+=" + Math.PI,
      duration: 2,
    })

    gsap.fromTo(`.page${currentPage + 1} h1`, {
      x: -300
    }, {
      x: 0,
      rotation: '+=360',
      duration: 1,
    })
  }
})
