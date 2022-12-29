
varying vec2 vUv;
attribute float imgIndex;
attribute float aScale;
uniform vec3 uColor;
uniform float uTime;
varying float vImgIndex;
varying vec3 vColors;
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1);

  float angle = atan(modelPosition.x, modelPosition.z);
  float distanceToCenter = length(modelPosition.xz);
  float angleOffset = 1.0 /distanceToCenter * uTime;
  angle+= angleOffset;
  modelPosition.x = cos(angle)*distanceToCenter;
  modelPosition.z = sin(angle)*distanceToCenter;

  vec4 viewPosition = viewMatrix * modelPosition;

  gl_Position = projectionMatrix * viewPosition;

  gl_PointSize = 200.0 / -viewPosition.z * aScale;

  vImgIndex = imgIndex;
  vColors = uColor;
}