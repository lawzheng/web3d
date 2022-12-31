import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';

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
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// const effect1 = new ShaderPass(DotScreenShader);
// effect1.uniforms['scale'].value = 4;
// composer.addPass(effect1);

const shaderPasss = new ShaderPass({
  uniforms: {
    tDiffuse: {
      value: null
    },
    uColor: {
      value: new THREE.Color(0,0,0)
    }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix*vec4(position,1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform vec3 uColor;
    void main() {
      vec4 color = texture2D(tDiffuse,vUv);
      color.xyz += uColor;
      gl_FragColor = color;
    }
  `,
});
composer.addPass(shaderPasss);

new RGBELoader().load('/model/royal_esplanade_1k.hdr', function (texture) {

  texture.mapping = THREE.EquirectangularReflectionMapping;

  scene.background = texture;
  scene.environment = texture;
});


const gltfLoader = new GLTFLoader();
gltfLoader.load('/model/DamagedHelmet/glTF/DamagedHelmet.gltf', (gltf) => {
  scene.add(gltf.scene);
})







function animate() {
  controls.update();
  renderer.render(scene, camera);
  composer.render();
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
  composer.setSize(window.innerWidth, window.innerHeight);
})