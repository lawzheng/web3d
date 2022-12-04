precision lowp float;

varying vec2 vUv;

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
  vec2 rotateUv = rotate(vUv, -uTime * 5.0, vec2(0.5));
  float strength = 0.15 / distance(
    vec2(rotateUv.x, (rotateUv.y - 0.5) * 5.0 + 0.5),
    vec2(0.5,0.5)
  ) - 1.0;
  strength += 0.15 / distance(
    vec2(rotateUv.y, (rotateUv.x - 0.5) * 5.0 + 0.5),
    vec2(0.5,0.5)
  ) - 1.0;
  gl_FragColor = vec4(strength, strength, strength, strength);
}