import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const hexToRGB = (hex) => {
  const c = hex.replace('#', '').padEnd(6, '0');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const MetaballCanvas = ({
  className = '',
  dpr,
  paused = false,
  // Array of hex colors for the blobs
  gradientColors = ['#cd6b78', '#4688F0'],
  // Background color behind the blobs
  backgroundColor = '#ffffff',
  // Number of blobs (2-6)
  blobCount = 5,
  // How large the blobs are (0.1 - 1.0)
  blobSize = 0.45,
  // Speed of blob movement (0.1 - 2.0)
  speed = 0.35,
  // How smooth/soft the blob edges are (higher = softer)
  softness = 1.5,
  // Mouse influence radius
  mouseInfluence = 0.3,
  // Mouse dampening for smooth follow
  mouseDampening = 0.15,
  // Noise grain amount
  noise = 0.03,
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const geometryRef = useRef(null);
  const rendererRef = useRef(null);
  const mouseTargetRef = useRef([0.5, 0.5]);
  const lastTimeRef = useRef(0);
  const firstResizeRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1),
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    const canvas = gl.canvas;

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    // Prepare colors (up to 6 blob colors)
    const maxColors = 6;
    const colors = (gradientColors && gradientColors.length ? gradientColors : ['#cd6b78', '#4688F0']).slice(0, maxColors);
    while (colors.length < maxColors) colors.push(colors[colors.length - 1]);
    const colorArr = colors.map(hexToRGB);
    const bgColor = hexToRGB(backgroundColor);

    const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

    const fragment = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform vec3 uBgColor;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform int  uBlobCount;
uniform float uBlobSize;
uniform float uSpeed;
uniform float uSoftness;
uniform float uMouseInfluence;
uniform float uNoise;

varying vec2 vUv;

// Simplex-like noise for organic motion
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Blob position based on time — each blob has unique orbital motion
vec2 blobPos(int index, float t) {
  float fi = float(index);
  float speed = uSpeed;
  
  // Each blob has a unique frequency and phase
  float ax = 0.3 + 0.15 * sin(fi * 1.7);
  float ay = 0.25 + 0.15 * cos(fi * 2.3);
  float px = sin(t * speed * (0.4 + fi * 0.13) + fi * 2.094) * ax;
  float py = cos(t * speed * (0.35 + fi * 0.11) + fi * 1.571) * ay;
  
  // Add secondary wobble
  px += sin(t * speed * 0.7 + fi * 3.14) * 0.08;
  py += cos(t * speed * 0.6 + fi * 2.71) * 0.08;
  
  return vec2(0.5 + px, 0.5 + py);
}

void main() {
  vec2 uv = vUv;
  float aspect = iResolution.x / iResolution.y;
  
  // Correct for aspect ratio
  vec2 p = uv;
  p.x *= aspect;
  
  // Mouse position (normalized 0-1, aspect corrected)
  vec2 mouse = iMouse.xy / iResolution.xy;
  mouse.x *= aspect;
  
  float t = iTime;
  
  // Accumulate metaball field
  float field = 0.0;
  vec3 colorAccum = vec3(0.0);
  float colorWeight = 0.0;
  
  vec3 blobColors[6];
  blobColors[0] = uColor0;
  blobColors[1] = uColor1;
  blobColors[2] = uColor2;
  blobColors[3] = uColor3;
  blobColors[4] = uColor4;
  blobColors[5] = uColor5;
  
  for (int i = 0; i < 6; i++) {
    if (i >= uBlobCount) break;
    
    vec2 bp = blobPos(i, t);
    bp.x *= aspect;
    
    // Add mouse influence — blobs are slightly attracted/repelled by mouse
    vec2 toMouse = mouse - bp;
    float mouseDist = length(toMouse);
    bp += toMouse * uMouseInfluence * smoothstep(0.8, 0.0, mouseDist);
    
    // Distance from this pixel to blob center
    float d = length(p - bp);
    
    // Metaball contribution: inverse-square falloff
    float size = uBlobSize * (0.8 + 0.2 * sin(t * 0.5 + float(i) * 1.5));
    float contribution = (size * size) / (d * d + 0.001);
    
    field += contribution;
    colorAccum += blobColors[i] * contribution;
    colorWeight += contribution;
  }
  
  // Normalize color by weight
  vec3 blobColor = colorWeight > 0.0 ? colorAccum / colorWeight : uBgColor;
  
  // Threshold the field to create the metaball "merge" effect
  // Use smoothstep for soft edges
  float threshold = 1.0;
  float edge = smoothstep(threshold - uSoftness, threshold + 0.1, field);
  
  // Mix background with blob color based on field
  vec3 col = mix(uBgColor, blobColor, edge);
  
  // Add subtle inner glow / brightness variation
  float glow = smoothstep(threshold, threshold + uSoftness * 2.0, field);
  col = mix(col, blobColor * 1.1, glow * 0.3);
  
  // Add very subtle noise/grain for texture
  float grain = (hash(gl_FragCoord.xy + fract(t)) - 0.5) * uNoise;
  col += grain;
  
  // Clamp output
  col = clamp(col, 0.0, 1.0);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

    const uniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iMouse: { value: [gl.drawingBufferWidth * 0.5, gl.drawingBufferHeight * 0.5] },
      iTime: { value: 0 },
      uBgColor: { value: bgColor },
      uColor0: { value: colorArr[0] },
      uColor1: { value: colorArr[1] },
      uColor2: { value: colorArr[2] },
      uColor3: { value: colorArr[3] },
      uColor4: { value: colorArr[4] },
      uColor5: { value: colorArr[5] },
      uBlobCount: { value: Math.min(maxColors, Math.max(2, blobCount)) },
      uBlobSize: { value: blobSize },
      uSpeed: { value: speed },
      uSoftness: { value: softness },
      uMouseInfluence: { value: mouseInfluence },
      uNoise: { value: noise },
    };

    const program = new Program(gl, { vertex, fragment, uniforms });
    programRef.current = program;

    const geometry = new Triangle(gl);
    geometryRef.current = geometry;
    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];

      if (firstResizeRef.current) {
        firstResizeRef.current = false;
        uniforms.iMouse.value = [gl.drawingBufferWidth * 0.5, gl.drawingBufferHeight * 0.5];
        mouseTargetRef.current = [gl.drawingBufferWidth * 0.5, gl.drawingBufferHeight * 0.5];
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scale = renderer.dpr || 1;
      const x = (e.clientX - rect.left) * scale;
      const y = (rect.height - (e.clientY - rect.top)) * scale;
      mouseTargetRef.current = [x, y];
      if (mouseDampening <= 0) {
        uniforms.iMouse.value = [x, y];
      }
    };
    window.addEventListener('pointermove', onPointerMove);

    const loop = (t) => {
      rafRef.current = requestAnimationFrame(loop);
      uniforms.iTime.value = t * 0.001;

      if (mouseDampening > 0) {
        if (!lastTimeRef.current) lastTimeRef.current = t;
        const dt = (t - lastTimeRef.current) / 1000;
        lastTimeRef.current = t;
        const tau = Math.max(1e-4, mouseDampening);
        let factor = 1 - Math.exp(-dt / tau);
        if (factor > 1) factor = 1;
        const target = mouseTargetRef.current;
        const cur = uniforms.iMouse.value;
        cur[0] += (target[0] - cur[0]) * factor;
        cur[1] += (target[1] - cur[1]) * factor;
      } else {
        lastTimeRef.current = t;
      }

      if (!paused && programRef.current && meshRef.current) {
        try {
          renderer.render({ scene: meshRef.current });
        } catch (e) {
          console.error(e);
        }
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onPointerMove);
      ro.disconnect();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
      const callIfFn = (obj, key) => {
        if (obj && typeof obj[key] === 'function') {
          obj[key].call(obj);
        }
      };
      callIfFn(programRef.current, 'remove');
      callIfFn(geometryRef.current, 'remove');
      callIfFn(meshRef.current, 'remove');
      callIfFn(rendererRef.current, 'destroy');
      programRef.current = null;
      geometryRef.current = null;
      meshRef.current = null;
      rendererRef.current = null;
    };
  }, [
    dpr,
    paused,
    gradientColors,
    backgroundColor,
    blobCount,
    blobSize,
    speed,
    softness,
    mouseInfluence,
    mouseDampening,
    noise,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full overflow-hidden relative ${className}`}
    />
  );
};

export default MetaballCanvas;
