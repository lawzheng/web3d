import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import gsap from 'gsap';
const gui = new GUI();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 0.1)
scene.add(camera)


function makeCube(position, arrImg, imgPath) {
  const geometry = new THREE.BoxGeometry(500,500,500);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

  const boxMaterial = [];
  arrImg.forEach(item => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(`/textures/imgs/${imgPath}/${item}.jpg`);
    if (item === arrImg[2] || item === arrImg[3]) {
      texture.rotation = Math.PI;
      texture.center = new THREE.Vector2(0.5,0.5);
    }
    boxMaterial.push(new THREE.MeshBasicMaterial({ map: texture }));
  })
  
  const cube = new THREE.Mesh(geometry, boxMaterial);
  cube.position.set(position.x, position.y, position.z)
  cube.geometry.scale(1,1,-1)
  scene.add(cube)
  cube.name = imgPath;
  return cube;
}

const home = {
  livingRoom: makeCube(
    new THREE.Vector3(0,0,0),
    ['4_l', '4_r', '4_u', '4_d', '4_b', '4_f',],
    'living'
  ),
  kitchen: makeCube(
    new THREE.Vector3(500,0,-360),
    ['0_l', '0_r', '0_u', '0_d', '0_b', '0_f',],
    'kitchen'
  ),
}



const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const mouseDown = (e) => {
  e.preventDefault();
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    if (intersects[0].object.name.includes('_sprite')) {
      const key = intersects[0].object.name.split('_')[0];

      if (home[key]) {
        gsap.to(controls.target, {
          duration: 0.5,
          x: home[key].position.x,
          y: home[key].position.y,
          z: home[key].position.z,
          onComplete: () => {
            gsap.to(camera.position, {
              duration: 0.5,
              x: home[key].position.x - 1,
              y: home[key].position.y,
              z: home[key].position.z + 1,
            })
          }
        })
      }
    }
  }
}
window.addEventListener('mousedown', mouseDown)

const spriteMap = new THREE.TextureLoader().load('/textures/imgs/up.png');
const spriteMatrial = new THREE.SpriteMaterial({
  map: spriteMap,
  color: 0xffffff,
  transparent: true,
  blending: THREE.AdditiveBlending,
})
const sprite = new THREE.Sprite(spriteMatrial)
sprite.position.set(245,-12,-181)
sprite.scale.set(25,25,25);
sprite.name = 'kitchen_sprite';
scene.add(sprite)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;

// 坐标轴
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

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