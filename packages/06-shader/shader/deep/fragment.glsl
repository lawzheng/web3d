precision lowp float;

varying vec2 vUv;

#define PI 3.14159265354

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

// 旋转函数
vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
  return vec2(
    cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
    cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
  );
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

uniform float uTime;

void main() {
  // gl_FragColor = vec4(vUv,0.0,1.0);

  // gl_FragColor = vec4(vUv, 1, 1);

  // 渐变
  // float strength = vUv.x;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);
  // float strength = 1.0 - vUv.y;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 剧烈变化
  // float strength = vUv.y * 10.0;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 取模，反复显示
  // float strength = mod(vUv.y * 10.0, 1.0);
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 步进，斑马效果
  // float strength = mod(vUv.y * 10.0, 1.0);
  // strength = step(0.8, strength);
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 条纹相加（格子）,相乘（点阵），等等，就是取交集并集等过程
  // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
  // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
  
  // 箭头
  // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
  // float barY = step(0.4, mod(vUv.y * 10.0, 1.0)) * step(0.8, mod(vUv.x * 10.0, 1.0));
  // float strength = barX + barY;
  // gl_FragColor = vec4(vUv, 1.0, strength);

  // 绝对值 abs min max
  // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 方块
  // float strength = 1.0 - step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 取整 阶段渐变 floor ceil
  // float strength = ceil(vUv.x * 10.0) / 10.0;
  // strength *= ceil(vUv.y * 10.0) / 10.0;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 随机格子
  // float strength = ceil(vUv.x * 10.0) / 10.0 * ceil(vUv.y * 10.0) / 10.0;
  // float rnd = random( vec2(strength, strength) );
  // gl_FragColor = vec4(vec3(rnd),1.0);

  // 长度 距离
  // float strength = length(vUv);
  // 光晕
  // float strength = 0.15 / distance(vUv, vec2(0.5,0.5)) - 1.0;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 压扁
  // float strength = 0.15 / distance(vec2(vUv.x, vUv.y * 5.0), vec2(0.5,0.5)) - 1.0;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 十字交叉星星
  // float strength = 0.15 / distance(
  //   vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5),
  //   vec2(0.5,0.5)
  // ) - 1.0;
  // strength += 0.15 / distance(
  //   vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5),
  //   vec2(0.5,0.5)
  // ) - 1.0;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);


  // 旋转飞镖
  // vec2 rotateUv = rotate(vUv, -uTime * 5.0, vec2(0.5));
  // float strength = 0.15 / distance(
  //   vec2(rotateUv.x, (rotateUv.y - 0.5) * 5.0 + 0.5),
  //   vec2(0.5,0.5)
  // ) - 1.0;
  // strength += 0.15 / distance(
  //   vec2(rotateUv.y, (rotateUv.x - 0.5) * 5.0 + 0.5),
  //   vec2(0.5,0.5)
  // ) - 1.0;
  // gl_FragColor = vec4(strength, strength, strength, strength);

  // 日本国旗 画圆
  // float strength = step(0.5, distance(vUv, vec2(0.5)) + 0.25);
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 圆环
  // float strength = step(0.5, distance(vUv, vec2(0.5)) + 0.35);
  // strength *= 1.0 - step(0.5, distance(vUv, vec2(0.5)) + 0.25);
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 渐变环
  // float strength = abs(distance(vUv, vec2(0.5)) - 0.25);
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 圆环
  // float strength = step(0.1, abs(distance(vUv, vec2(0.5)) - 0.25));
  // gl_FragColor = vec4(strength, strength, strength, 1.0);


  // 改变半径就可以做光圈扫描效果
  // float strength = 1.0 - step(0.1, abs(distance(vUv, vec2(0.5)) - 0.25));
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 波浪环
  // vec2 waveUv = vec2(
  //   vUv.x,
  //   vUv.y + sin(vUv.x * 30.0) * 0.1
  // );
  // float strength = 1.0 - step(0.1, abs(distance(waveUv, vec2(0.5)) - 0.25));
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 随机图案
  // vec2 waveUv = vec2(
  //   vUv.x + sin(vUv.y * 100.0) * 0.1,
  //   vUv.y + sin(vUv.x * 100.0) * 0.1
  // );
  // float strength = 1.0 - step(0.1, abs(distance(waveUv, vec2(0.5)) - 0.25));
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 根据角度显示视图
  // float angle = atan(vUv.x, vUv.y);
  // float strength = angle;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 根据角度实现螺旋渐变
  // float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
  // float strength = (angle + 3.14) / 6.28;
  // gl_FragColor = vec4(strength, strength, strength, 1.0);

  // 雷达扫描
  // vec2 rotateUv = rotate(vUv, -uTime * 5.0, vec2(0.5));
  // float alpha = 1.0 - step(0.5, distance(rotateUv, vec2(0.5)));
  // float angle = atan(rotateUv.x - 0.5, rotateUv.y - 0.5);
  // float strength = (angle + 3.14) / 6.28;
  // gl_FragColor = vec4(strength, strength, strength, alpha);

  // 万花筒
  // float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / PI;
  // float strength = mod(angle * 20.0, 1.0);
  // gl_FragColor = vec4(strength, strength, strength, 1);

  // 光芒四射
  // float angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (2.0 * PI);
  // float strength = sin(angle * 100.0);
  // gl_FragColor = vec4(strength, strength, strength, 1);

  // 噪声
  // float strength = step(0.5, noise(vUv * 10.0 + uTime));
  // gl_FragColor = vec4(strength, strength, strength, 1);

  // 颜色混合
  vec3 blackColor = vec3(1.0,0.0,1.0);
  vec3 yellowColor = vec3(0.0,1.0,0.0);
  vec3 uvColor = vec3(vUv,1.0);
  float strength = noise(vUv * 100.0);
  vec3 mixColor = mix(uvColor, yellowColor, strength);
  gl_FragColor = vec4(mixColor, 1);
}