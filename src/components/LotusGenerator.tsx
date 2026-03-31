import { useCallback, useEffect, useRef, useState } from "react";

// --- Seeded PRNG (mulberry32) ---
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --- Color palettes ---
const PALETTES: Record<string, string[]> = {
  Indigo: ["#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe", "#4f46e5"],
  Sunset: ["#f97316", "#fb923c", "#fbbf24", "#ef4444", "#f59e0b"],
  Ocean: ["#06b6d4", "#22d3ee", "#67e8f9", "#3b82f6", "#0ea5e9"],
  Monochrome: ["#e4e4e7", "#a1a1aa", "#71717a", "#d4d4d8", "#52525b"],
};

type PetalType = "elliptical" | "pointed" | "rounded";

interface LayerConfig {
  petalCount: number;
  petalType: PetalType;
  innerRadius: number;
  outerRadius: number;
  color: string;
  rotationOffset: number;
}

interface LotusConfig {
  layers: LayerConfig[];
  centerRadius: number;
  decorativeRingRadius: number;
  decorativeDotCount: number;
}

function generateLotusConfig(
  rand: () => number,
  petalsPerLayer: number,
  layerCount: number,
  symmetry: number,
  palette: string[],
  maxRadius: number
): LotusConfig {
  const petalTypes: PetalType[] = ["elliptical", "pointed", "rounded"];
  const layers: LayerConfig[] = [];

  for (let i = 0; i < layerCount; i++) {
    const t = i / layerCount;
    layers.push({
      petalCount: symmetry,
      petalType: petalTypes[Math.floor(rand() * petalTypes.length)],
      innerRadius: maxRadius * (0.08 + t * 0.15),
      outerRadius: maxRadius * (0.2 + t * 0.18),
      color: palette[i % palette.length],
      rotationOffset: (rand() * Math.PI) / petalsPerLayer,
    });
  }

  return {
    layers,
    centerRadius: maxRadius * 0.07,
    decorativeRingRadius: maxRadius * (0.2 + layerCount * 0.18 + 0.06),
    decorativeDotCount: symmetry * 2,
  };
}

function drawPetal(
  ctx: CanvasRenderingContext2D,
  type: PetalType,
  innerR: number,
  outerR: number,
  width: number,
  progress: number
) {
  const effectiveOuter = innerR + (outerR - innerR) * progress;
  const w = width * progress;

  ctx.beginPath();
  if (type === "elliptical") {
    ctx.moveTo(innerR, 0);
    ctx.bezierCurveTo(innerR + (effectiveOuter - innerR) * 0.3, -w, innerR + (effectiveOuter - innerR) * 0.7, -w, effectiveOuter, 0);
    ctx.bezierCurveTo(innerR + (effectiveOuter - innerR) * 0.7, w, innerR + (effectiveOuter - innerR) * 0.3, w, innerR, 0);
  } else if (type === "pointed") {
    ctx.moveTo(innerR, 0);
    ctx.quadraticCurveTo(innerR + (effectiveOuter - innerR) * 0.5, -w * 1.2, effectiveOuter, 0);
    ctx.quadraticCurveTo(innerR + (effectiveOuter - innerR) * 0.5, w * 1.2, innerR, 0);
  } else {
    ctx.moveTo(innerR, 0);
    ctx.bezierCurveTo(innerR, -w * 0.8, effectiveOuter - w * 0.3, -w * 0.8, effectiveOuter, 0);
    ctx.bezierCurveTo(effectiveOuter - w * 0.3, w * 0.8, innerR, w * 0.8, innerR, 0);
  }
  ctx.closePath();
}

function drawCenterOrnament(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  palette: string[],
  progress: number
) {
  const p = Math.min(progress * 2, 1);
  for (let i = 3; i >= 0; i--) {
    const r = radius * ((i + 1) / 4) * p;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = palette[i % palette.length] + "60";
    ctx.fill();
  }

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const dotCount = 21;
  for (let i = 0; i < dotCount; i++) {
    const t = i / dotCount;
    if (t > p) break;
    const angle = i * goldenAngle;
    const r = radius * 0.8 * Math.sqrt(t);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.03 * p, 0, Math.PI * 2);
    ctx.fillStyle = palette[0] + "aa";
    ctx.fill();
  }
}

function drawDecorativeRing(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  dotCount: number,
  palette: string[],
  progress: number
) {
  for (let i = 0; i < dotCount; i++) {
    const t = i / dotCount;
    if (t > progress) break;
    const angle = (Math.PI * 2 * i) / dotCount;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = palette[i % palette.length] + "80";
    ctx.fill();
  }
}

function drawLotus(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  config: LotusConfig,
  palette: string[],
  progress: number
) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const totalLayers = config.layers.length;
  const centerSlice = 0.1;
  const ringSlice = 0.1;
  const layerSlice = (1 - centerSlice - ringSlice) / totalLayers;

  for (let li = totalLayers - 1; li >= 0; li--) {
    const layer = config.layers[li];
    const layerStart = centerSlice + li * layerSlice;
    const layerEnd = layerStart + layerSlice;
    const layerProgress = Math.max(0, Math.min(1, (progress - layerStart) / (layerEnd - layerStart)));

    if (layerProgress <= 0) continue;

    const petalWidth = (layer.outerRadius - layer.innerRadius) * 0.35;

    for (let p = 0; p < layer.petalCount; p++) {
      const petalT = p / layer.petalCount;
      const petalProgress = Math.max(0, Math.min(1, (layerProgress - petalT * 0.3) / 0.7));
      if (petalProgress <= 0) continue;

      const angle = (Math.PI * 2 * p) / layer.petalCount + layer.rotationOffset;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      drawPetal(ctx, layer.petalType, layer.innerRadius, layer.outerRadius, petalWidth, petalProgress);
      ctx.fillStyle = layer.color + "55";
      ctx.fill();
      ctx.strokeStyle = layer.color + "88";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
  }

  const centerProgress = Math.min(1, progress / centerSlice);
  drawCenterOrnament(ctx, cx, cy, config.centerRadius, palette, centerProgress);

  const ringStart = 1 - ringSlice;
  const ringProgress = Math.max(0, Math.min(1, (progress - ringStart) / ringSlice));
  if (ringProgress > 0) {
    drawDecorativeRing(ctx, cx, cy, config.decorativeRingRadius, config.decorativeDotCount, palette, ringProgress);
  }
}

export function LotusGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const [petals, setPetals] = useState(8);
  const [layers, setLayers] = useState(4);
  const [palette, setPalette] = useState<string>("Indigo");
  const [symmetry, setSymmetry] = useState(6);
  const [speed, setSpeed] = useState(1);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 100000));

  const drawFrame = useCallback(
    (canvasW: number, canvasH: number, dpr: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rand = mulberry32(seed);
      const maxRadius = Math.min(canvasW, canvasH) * 0.45;
      const colors = PALETTES[palette];
      const config = generateLotusConfig(rand, petals, layers, symmetry, colors, maxRadius);

      const cx = canvasW / 2;
      const cy = canvasH / 2;

      const animDuration = 3000 / speed;

      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(1, elapsed / animDuration);

        ctx.save();
        ctx.scale(dpr, dpr);
        drawLotus(ctx, cx, cy, config, colors, progress);
        ctx.restore();

        if (progress < 1) {
          animRef.current = requestAnimationFrame(animate);
        }
      };

      startTimeRef.current = 0;
      cancelAnimationFrame(animRef.current);
      animRef.current = requestAnimationFrame(animate);
    },
    [seed, petals, layers, palette, symmetry, speed]
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        drawFrame(width, height, dpr);
      }
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  }, [drawFrame]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `lotus-${seed}.png`;
    a.click();
  };

  const handleRegenerate = () => {
    setSeed(Math.floor(Math.random() * 100000));
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div
        ref={containerRef}
        className="aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 lg:w-[70%]"
      >
        <canvas ref={canvasRef} className="h-full w-full" aria-label="Generative lotus pattern" />
      </div>

      <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:w-[30%]">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Controls</h2>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-zinc-400">
            Petals per layer <span className="font-mono text-zinc-500">{petals}</span>
          </span>
          <input type="range" min={4} max={24} value={petals} onChange={(e) => setPetals(Number(e.target.value))} className="accent-indigo-500" aria-label="Petals per layer" />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-zinc-400">
            Layers <span className="font-mono text-zinc-500">{layers}</span>
          </span>
          <input type="range" min={2} max={6} value={layers} onChange={(e) => setLayers(Number(e.target.value))} className="accent-indigo-500" aria-label="Layers" />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-zinc-400">
            Symmetry <span className="font-mono text-zinc-500">{symmetry}</span>
          </span>
          <input type="range" min={2} max={12} value={symmetry} onChange={(e) => setSymmetry(Number(e.target.value))} className="accent-indigo-500" aria-label="Symmetry" />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-zinc-400">
            Speed <span className="font-mono text-zinc-500">{speed}x</span>
          </span>
          <input type="range" min={0.5} max={3} step={0.5} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="accent-indigo-500" aria-label="Animation speed" />
        </label>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm text-zinc-400">Color scheme</span>
          <div className="flex flex-wrap gap-2">
            {Object.keys(PALETTES).map((name) => (
              <button
                key={name}
                onClick={() => setPalette(name)}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  palette === name
                    ? "border-indigo-500 bg-indigo-500/20 text-white"
                    : "border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600"
                }`}
                aria-label={`Color scheme: ${name}`}
                aria-pressed={palette === name}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-3 pt-4">
          <button onClick={handleRegenerate} className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white">
            Regenerate
          </button>
          <button onClick={handleDownload} className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white transition-colors hover:bg-indigo-500">
            Download PNG
          </button>
        </div>
      </div>
    </div>
  );
}
