import * as THREE from 'three'
// 轨道控制器
import { GUI } from 'dat.gui'
import gsap from 'gsap';
import SpriteCanvas from './SpriteCanvas'

const gui = new GUI();
const scene = new THREE.Scene();

const container = document.querySelector('.container');
const tagDiv = document.querySelector('.tag');
const progressDiv = document.querySelector('#progress');

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 0.1)
scene.add(camera)


class Room {
  constructor(
    name,
    roomIndex,
    textureUrl,
    position = new THREE.Vector3(0, 0, 0),
    euler = new THREE.Euler(0, 0, 0)
  ) {
    this.name = name;
    // 添加立方体
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    geometry.scale(1, 1, -1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // 4_b,
    var arr = [
      `${roomIndex}_l`,
      `${roomIndex}_r`,
      `${roomIndex}_u`,
      `${roomIndex}_d`,
      `${roomIndex}_b`,
      `${roomIndex}_f`,
    ];
    var boxMaterials = [];

    arr.forEach((item) => {
      // 纹理加载
      let texture = new THREE.TextureLoader().load(`/textures/room2/${textureUrl}/${item}.jpg`);
      // 创建材质
      if (item === `${roomIndex}_u` || item === `${roomIndex}_d`) {
        texture.rotation = Math.PI;
        texture.center = new THREE.Vector2(0.5, 0.5);
        boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
      } else {
        boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }));
      }
    });
    const cube = new THREE.Mesh(geometry, boxMaterials);
    cube.position.copy(position);
    cube.rotation.copy(euler);
    // cube.geometry.scale(1, 1, -1);
    scene.add(cube);

    THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
      const progress = new Number((loaded / total) * 100).toFixed(2);
      progressDiv.innerHTML = `${progress}%`;

      if (progress === '100.00') {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.progress').style.display = 'none';
      }
    };
  }
}

function moveTag(name) {
  let positions = {
    客厅: [100, 110],
    厨房: [180, 190],
    阳台: [50, 50],
    主卧: [160, 40],
    走廊: [150, 90],
  };
  if (positions[name]) {
    gsap.to(tagDiv, {
      duration: 1,
      x: positions[name][0],
      y: positions[name][1],
      ease: "power3.inOut",
    });
  }
}

// 创建客厅
let livingIndex = 0;
let livingUrl = "livingroom";
let livingPosition = new THREE.Vector3(0, 0, 0);
const living = new Room("客厅", livingIndex, livingUrl, livingPosition);

// 创建厨房
let kitPosition = new THREE.Vector3(-5, 0, -10);
let kitIndex = 3;
let textureUrl = "kitchen";
let kitEuler = new THREE.Euler(0, -Math.PI / 2, 0);
const room = new Room("厨房", kitIndex, textureUrl, kitPosition, kitEuler);
// 创建文字精灵
const text = new SpriteCanvas(camera, "厨房", new THREE.Vector3(-1, 0, -3));
// text.mesh.rotation.y = Math.PI / 3;
scene.add(text.mesh);
text.onClick(() => {
  console.log("厨房");
  gsap.to(camera.position, {
    x: kitPosition.x,
    y: kitPosition.y,
    z: kitPosition.z,
    duration: 1,
  });
  moveTag("厨房");
});

// 创建客厅文字精灵
const textLiving = new SpriteCanvas(
  camera,
  "客厅",
  new THREE.Vector3(-4, 0, -6)
);
scene.add(textLiving.mesh);
textLiving.onClick(() => {
  console.log("客厅");
  gsap.to(camera.position, {
    x: livingPosition.x,
    y: livingPosition.y,
    z: livingPosition.z,
    duration: 1,
  });
  moveTag("客厅");
});

// 创建阳台
let balconyPosition = new THREE.Vector3(0, 0, 15);
let balconyIndex = 8;
let balconyUrl = "balcony";
let balconyEuler = new THREE.Euler(0, Math.PI / 16, 0);
const balcony = new Room(
  "阳台",
  balconyIndex,
  balconyUrl,
  balconyPosition,
  balconyEuler
);

// 创建阳台文字精灵
const textBalcony = new SpriteCanvas(
  camera,
  "阳台",
  new THREE.Vector3(0, 0, 3)
);
scene.add(textBalcony.mesh);
textBalcony.onClick(() => {
  console.log("阳台");
  gsap.to(camera.position, {
    x: balconyPosition.x,
    y: balconyPosition.y,
    z: balconyPosition.z,
    duration: 1,
  });
  moveTag("阳台");
});

// 创建阳台回客厅文字精灵
const textBalconyToLiving = new SpriteCanvas(
  camera,
  "客厅",
  new THREE.Vector3(-1, 0, 11)
);
scene.add(textBalconyToLiving.mesh);
textBalconyToLiving.onClick(() => {
  console.log("客厅");
  gsap.to(camera.position, {
    x: livingPosition.x,
    y: livingPosition.y,
    z: livingPosition.z,
    duration: 1,
  });
  moveTag("客厅");
});

// 创建走廊
let hallwayPosition = new THREE.Vector3(-15, 0, 0);
let hallwayIndex = 9;
let hallwayUrl = "corridor";
let hallwayEuler = new THREE.Euler(0, -Math.PI + Math.PI / 16, 0);
const hallway = new Room(
  "走廊",
  hallwayIndex,
  hallwayUrl,
  hallwayPosition,
  hallwayEuler
);

// 走廊文字精灵
const textCorridor = new SpriteCanvas(
  camera,
  "走廊",
  new THREE.Vector3(-4, 0, 0.5)
);
scene.add(textCorridor.mesh);
textCorridor.onClick(() => {
  console.log("走廊");
  gsap.to(camera.position, {
    x: hallwayPosition.x,
    y: hallwayPosition.y,
    z: hallwayPosition.z,
    duration: 1,
  });
  moveTag("走廊");
});

// 创建走廊回客厅文字精灵
const textCorridorToLiving = new SpriteCanvas(
  camera,
  "客厅",
  new THREE.Vector3(-11, 0, 0)
);
scene.add(textCorridorToLiving.mesh);
textCorridorToLiving.onClick(() => {
  console.log("客厅");
  gsap.to(camera.position, {
    x: livingPosition.x,
    y: livingPosition.y,
    z: livingPosition.z,
    duration: 1,
  });
  moveTag("客厅");
});

// 创建主卧
let mainPosition = new THREE.Vector3(-25, 0, 2);
let mainIndex = 18;
let mainUrl = "bedroom";
// let mainEuler = new THREE.Euler(0, -Math.PI / 2, 0);
const main = new Room(
  "主卧",
  mainIndex,
  mainUrl,
  mainPosition
  // mainEuler
);
// 主卧文字精灵
const textMain = new SpriteCanvas(
  camera,
  "主卧",
  new THREE.Vector3(-19, 0, 2)
);
scene.add(textMain.mesh);
textMain.onClick(() => {
  console.log("主卧");
  gsap.to(camera.position, {
    x: mainPosition.x,
    y: mainPosition.y,
    z: mainPosition.z,
    duration: 1,
  });
  moveTag("主卧");
});
// 创建主卧回走廊文字精灵
const textMainToCorridor = new SpriteCanvas(
  camera,
  "走廊",
  new THREE.Vector3(-23, 0, -2)
);
scene.add(textMainToCorridor.mesh);
textMainToCorridor.onClick(() => {
  console.log("走廊");
  gsap.to(camera.position, {
    x: hallwayPosition.x,
    y: hallwayPosition.y,
    z: hallwayPosition.z,
    duration: 1,
  });
  moveTag("走廊");
})

let isMouseDown = false;

// 监听鼠标按下事件
window.addEventListener(
  "mousedown",
  () => {
    isMouseDown = true;
  },
  false
);
// 监听鼠标抬起事件
window.addEventListener(
  "mouseup",
  () => {
    isMouseDown = false;
  },
  false
);
// 监听鼠标移动事件
window.addEventListener(
  "mousemove",
  (e) => {
    if (isMouseDown) {
      camera.rotation.y += (e.movementX / window.innerWidth) * Math.PI;
      camera.rotation.x += (e.movementY / window.innerHeight) * Math.PI;
      camera.rotation.order = 'YXZ';
    }
  },
  false
);


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
container.appendChild(renderer.domElement)


function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

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