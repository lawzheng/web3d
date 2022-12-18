import * as THREE from 'three'
// 轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'dat.gui'

import deepVertexShader from '../shader/vertex.glsl'
import deepFragmentShader from '../shader/fragment.glsl'

import ca from '../assets/imgs/ca.jpg'

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

const params = {
  uWareFrequency: 14,
  uScale: 0.03,
  uXzScale: 0.6,
  uNoiseFrequency: 10,
  uNoiseScale: 1.5,
  uLowColor: '#0077ff',
  uHighColor: '#004aff',
  uXSpeed: 1,
  uZSpeed: 1,
  uNoiseSpeed: 1,
  uOpacity: 1,
}

// const material = new THREE.MeshBasicMaterial({ color: '#00ff00' })
// 创建着色器
const shaderMaterial= new THREE.ShaderMaterial({
  vertexShader: deepVertexShader,
  fragmentShader: deepFragmentShader,
  side: THREE.DoubleSide,
  uniforms: {
    uWareFrequency: {
      value: params.uWareFrequency,
    },
    uScale: {
      value: params.uScale,
    },
    uXzScale: {
      value: params.uXzScale,
    },
    uNoiseFrequency: {
      value: params.uNoiseFrequency,
    },
    uNoiseScale: {
      value: params.uNoiseScale,
    },
    uTime: {
      value: params.uTime,
    },
    uLowColor: {
      value: new THREE.Color(params.uLowColor),
    },
    uHighColor: {
      value: new THREE.Color(params.uHighColor),
    },
    uXSpeed: {
      value: params.uXSpeed,
    },
    uZSpeed: {
      value: params.uZSpeed,
    },
    uNoiseSpeed: {
      value: params.uNoiseSpeed,
    },
    uOpacity: {
      value: params.uOpacity,
    },
  },
  transparent: true
})

gui
  .add(params, 'uWareFrequency')
  .min(1)
  .max(100)
  .step(0.1)
  .onChange(value => {
    shaderMaterial.uniforms.uWareFrequency.value = value;
  });

gui
  .add(params, 'uScale')
  .min(0)
  .max(0.2)
  .step(0.001)
  .onChange(value => {
    shaderMaterial.uniforms.uScale.value = value;
  });

gui
  .add(params, 'uNoiseFrequency')
  .min(0)
  .max(100)
  .step(0.1)
  .onChange(value => {
    shaderMaterial.uniforms.uNoiseFrequency.value = value;
  });
  
gui
  .add(params, 'uNoiseScale')
  .min(0)
  .max(10)
  .step(0.001)
  .onChange(value => {
    shaderMaterial.uniforms.uNoiseScale.value = value;
  });
  
  
gui
  .add(params, 'uXzScale')
  .min(0)
  .max(5)
  .step(0.1)
  .onChange(value => {
    shaderMaterial.uniforms.uXzScale.value = value;
  });


gui
  .addColor(params, 'uHighColor').onFinishChange(value => {
    shaderMaterial.uniforms.uHighColor.value = new THREE.Color(value);
  })
gui
  .addColor(params, 'uLowColor').onFinishChange(value => {
    shaderMaterial.uniforms.uLowColor.value = new THREE.Color(value);
  })


gui
  .add(params, 'uXSpeed')
  .min(0)
  .max(5)
  .step(0.001)
  .onChange(value => {
    shaderMaterial.uniforms.uXSpeed.value = value;
  });

gui
  .add(params, 'uZSpeed')
  .min(0)
  .max(5)
  .step(0.001)
  .onChange(value => {
    shaderMaterial.uniforms.uZSpeed.value = value;
  });
  
gui
.add(params, 'uNoiseSpeed')
.min(0)
.max(5)
.step(0.001)
.onChange(value => {
  shaderMaterial.uniforms.uNoiseSpeed.value = value;
});

gui
  .add(params, 'uOpacity')
  .min(0)
  .max(1)
  .step(0.01)
  .onChange(value => {
    shaderMaterial.uniforms.uOpacity.value = value;
  });
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(1,1,1024,1024),
  shaderMaterial
)
floor.rotation.x = -Math.PI / 2;
scene.add(floor)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);
// renderer.setClearColor('#383539', 1);

const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼 更真实
controls.enableDamping = true;

// 坐标轴
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

controls.update();

const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();
  shaderMaterial.uniforms.uTime.value = elapsedTime;

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