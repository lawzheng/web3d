varying vec2 vUv;

uniform sampler2D UTexture;
uniform sampler2D UTexture1;
uniform sampler2D UTexture2;


varying float vImgIndex;
varying vec3 vColors;

void main() {
  // gl_FragColor = vec4(gl_PointCoord,0,1.0);

  // float strength = 1.0 - distance(gl_PointCoord, vec2(0.5)) * 2.0;
  // strength = step(0.5, strength);
  // gl_FragColor = vec4(strength);

  vec4 textureColor;
  if (vImgIndex == 0.0) {
    textureColor = texture2D(UTexture, gl_PointCoord);
  } else if (vImgIndex == 1.0) {
    textureColor = texture2D(UTexture1, gl_PointCoord);
  } else {
    textureColor = texture2D(UTexture2, gl_PointCoord);
  }

  gl_FragColor = vec4(vColors, textureColor.r);
}