precision lowp float;

uniform float uWareFrequency;
uniform float uScale;
uniform float uXzScale;
uniform float uNoiseFrequency;
uniform float uNoiseScale;
uniform float uTime;
uniform float uXSpeed;
uniform float uZSpeed;
uniform float uNoiseSpeed;

varying float vElevation;


float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

float noise (in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  // Smooth Interpolation

  // Cubic Hermine Curve.  Same as SmoothStep()
  vec2 u = f*f*(3.0-2.0*f);
  // u = smoothstep(0.,1.,f);

  // Mix 4 coorners percentages
  return mix(a, b, u.x) +
          (c - a)* u.y * (1.0 - u.x) +
          (d - b) * u.x * u.y;
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1);

  float elevation = sin(modelPosition.x * uWareFrequency + uTime * uXSpeed) * sin(modelPosition.z * uWareFrequency * uXzScale + uTime * uZSpeed);

  elevation += -abs(noise(vec2(modelPosition.xz * uNoiseFrequency + uTime * uNoiseSpeed))) * uNoiseScale;

  vElevation = elevation;

  elevation *= uScale;

  modelPosition.y += elevation;
  
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}