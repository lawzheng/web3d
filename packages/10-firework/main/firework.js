import * as THREE from 'three';
import startVertexShader from '../shader/startPoint/vertex.glsl';
import startFragmentShader from '../shader/startPoint/fragment.glsl';
import fireworkVertexShader from '../shader/firework/vertex.glsl';
import fireworkFragmentShader from '../shader/firework/fragment.glsl';

export default class Firework {
  constructor(color, to, from = { x: 0, y: 0, z: 0 }) {
    this.color = new THREE.Color(color);

    this.startGeometry = new THREE.BufferGeometry();
    const startPositionArray = new Float32Array(3);
    startPositionArray[0] = from.x;
    startPositionArray[1] = from.y;
    startPositionArray[2] = from.z;
    this.startGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(startPositionArray, 3)
    )

    const aStepArray = new Float32Array(3);
    aStepArray[0] = to.x - from.x;
    aStepArray[1] = to.y - from.y;
    aStepArray[2] = to.z - from.z;
    this.startGeometry.setAttribute(
      'aStep',
      new THREE.BufferAttribute(aStepArray, 3)
    )

    this.startMaterial = new THREE.ShaderMaterial({
      vertexShader: startVertexShader,
      fragmentShader: startFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: {
          value: 0,
        },
        uSize: {
          value: 20,
        },
        uColor: {
          value: this.color
        }
      }
    })

    this.startPoint = new THREE.Points(this.startGeometry, this.startMaterial)

    this.clock = new THREE.Clock();

    this.fireworkGeometry = new THREE.BufferGeometry();
    this.FireworkCount = 180 + Math.floor(Math.random() * 180);
    const positionFireworksArray = new Float32Array(this.FireworkCount * 3);
    const scaleFireArray = new Float32Array(this.FireworkCount);
    const directionArray = new Float32Array(this.FireworkCount * 3);
    for (let i = 0; i < this.FireworkCount; i++) {
      positionFireworksArray[i * 3 + 0] = to.x;
      positionFireworksArray[i * 3 + 1] = to.y;
      positionFireworksArray[i * 3 + 2] = to.z;

      scaleFireArray[i] = Math.random();

      let theta = Math.random() * 2 * Math.PI;
      let beta = Math.random() * 2 * Math.PI;
      let r = Math.random();

      directionArray[i * 3 + 0] = r * Math.sin(theta) + r * Math.sin(beta);
      directionArray[i * 3 + 1] = r * Math.cos(theta) + r * Math.cos(beta);
      directionArray[i * 3 + 2] = r * Math.sin(theta) + r * Math.cos(beta);
    }
    this.fireworkGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionFireworksArray, 3)
    )
    this.fireworkGeometry.setAttribute(
      'aScale',
      new THREE.BufferAttribute(scaleFireArray, 1)
    )
    this.fireworkGeometry.setAttribute(
      'aRandom',
      new THREE.BufferAttribute(directionArray, 3)
    )

    this.fireworkMaterial = new THREE.ShaderMaterial({
      vertexShader: fireworkVertexShader,
      fragmentShader: fireworkFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uSize: {
          value: 0,
        },
        uTime: {
          value: 0,
        },
        uColor: {
          value: this.color
        }
      }
    })

    this.firework = new THREE.Points(this.fireworkGeometry, this.fireworkMaterial)

    this.listener = new THREE.AudioListener();
    this.listenerSend = new THREE.AudioListener();

    this.sound = new THREE.Audio(this.listener);
    this.soundSend = new THREE.Audio(this.listenerSend);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(
      '/textures/firework.mp3',
      (buffer) => {
        this.sound.setBuffer(buffer);
        this.sound.setLoop(false);
        this.sound.setVolume(1);
      }
    );

    audioLoader.load(
      '/textures/send.mp3',
      (buffer) => {
        this.soundSend.setBuffer(buffer);
        this.soundSend.setLoop(false);
        this.soundSend.setVolume(1);
      }
    );

  }

  addScene(scene, camera) {
    scene.add(this.startPoint);
    scene.add(this.firework);
    this.scene = scene;
  }

  update() {
    const elapsedTime = this.clock.getElapsedTime();
    if (elapsedTime < 0.2) return;
    if (elapsedTime < 1) {
      this.startMaterial.uniforms.uTime.value = elapsedTime;
      this.startMaterial.uniforms.uSize.value = 20;

      if (!this.soundSend.isPlaying && !this.playSend) {
        this.soundSend.play();
        this.playSend = true;
      }
    } else {
      const time = elapsedTime - 1;
      this.startMaterial.uniforms.uSize.value = 0;
      this.startPoint.clear();
      this.startGeometry.dispose();
      this.startMaterial.dispose();

      if (!this.sound.isPlaying && !this.play) {
        this.sound.play();
        this.play = true;
      }

      this.fireworkMaterial.uniforms.uSize.value = 20;
      this.fireworkMaterial.uniforms.uTime.value = time;

      if (time > 5) {
        this.fireworkMaterial.uniforms.uSize.value = 0;
        this.firework.clear();
        this.fireworkGeometry.dispose();
        this.fireworkMaterial.dispose();
        this.scene.remove(this.firework);
        this.scene.remove(this.startPoint);

        return 'remove';
      }
    }
  }
}