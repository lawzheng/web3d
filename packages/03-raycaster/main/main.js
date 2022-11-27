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

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
  wireframe: true
});
const redMaterial = new THREE.MeshBasicMaterial({
  color: '#ff0000'
})

let cubeArr = [];
for (let i = -5; i < 5; i++) {
  for (let j = -5; j < 5; j++) {
    for (let k = -5; k < 5; k++) {
      const cube = new THREE.Mesh(cubeGeometry, material)
      cube.position.set(i,j,k)
      cubeArr.push(cube)
      scene.add(cube)
    }
  }
}

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