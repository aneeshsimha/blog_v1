import { useEffect, useRef, useState, useCallback } from "react";

// --- Types ---

interface Pattern {
  name: string;
  label: string;
  /** [inhale, hold1, exhale, hold2] in seconds */
  phases: [number, number, number, number];
}

interface Ripple {
  radius: number;
  opacity: number;
  startTime: number;
}

// --- Constants ---

const PATTERNS: Pattern[] = [
  { name: "478", label: "4-7-8", phases: [4, 7, 8, 0] },
  { name: "box", label: "Box", phases: [4, 4, 4, 4] },
  { name: "simple", label: "Simple", phases: [4, 0, 6, 0] },
];

const PHASE_LABELS = ["breathe in", "hold", "breathe out", "hold"];
const FADE_DURATION = 0.3; // seconds
const RIPPLE_DURATION = 2; // seconds
const CONTROLS_FADE_DELAY = 5000; // ms
const MIN_RADIUS_RATIO = 0.3;
const PULSE_AMPLITUDE = 0.02;

// --- Helpers ---

function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace("#", "");
  const n = parseInt(cleaned, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function getPhaseIndex(
  cycleTime: number,
  phases: [number, number, number, number]
): number {
  let acc = 0;
  for (let i = 0; i < 4; i++) {
    acc += phases[i];
    if (cycleTime < acc) return i;
  }
  return 0;
}

function getPhaseProgress(
  cycleTime: number,
  phases: [number, number, number, number]
): { index: number; progress: number } {
  let acc = 0;
  for (let i = 0; i < 4; i++) {
    if (phases[i] === 0) {
      acc += phases[i];
      continue;
    }
    if (cycleTime < acc + phases[i]) {
      return { index: i, progress: (cycleTime - acc) / phases[i] };
    }
    acc += phases[i];
  }
  return { index: 0, progress: 0 };
}

// --- Component ---

export default function BreatheCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const ripplesRef = useRef<Ripple[]>([]);
  const prevPhaseRef = useRef<number>(-1);
  const cycleCountRef = useRef<number>(1);
  const colorsRef = useRef({
    accent: [194, 65, 12] as [number, number, number],
    bg: [248, 245, 240] as [number, number, number],
    muted: [120, 113, 108] as [number, number, number],
  });

  const [patternIdx, setPatternIdx] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const patternRef = useRef(PATTERNS[0]);

  // Keep patternRef in sync
  useEffect(() => {
    patternRef.current = PATTERNS[patternIdx];
    // Reset cycle on pattern change
    startTimeRef.current = performance.now() / 1000;
    cycleCountRef.current = 1;
    prevPhaseRef.current = -1;
    ripplesRef.current = [];
  }, [patternIdx]);

  // Read CSS vars
  const readColors = useCallback(() => {
    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue("--accent").trim();
    const bg = style.getPropertyValue("--background").trim();
    const muted = style.getPropertyValue("--muted").trim();
    if (accent) colorsRef.current.accent = hexToRgb(accent);
    if (bg) colorsRef.current.bg = hexToRgb(bg);
    if (muted) colorsRef.current.muted = hexToRgb(muted);
  }, []);

  // Controls auto-hide
  const resetControlsTimer = useCallback(() => {
    setControlsVisible(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, CONTROLS_FADE_DELAY);
  }, []);

  useEffect(() => {
    resetControlsTimer();
    const onMove = () => resetControlsTimer();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchstart", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onMove);
      if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    };
  }, [resetControlsTimer]);

  // Main canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    readColors();

    // Observe theme changes
    const observer = new MutationObserver(() => readColors());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Resize handler
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    startTimeRef.current = performance.now() / 1000;

    function draw(timestamp: number) {
      const now = timestamp / 1000;
      const elapsed = now - startTimeRef.current;
      const pattern = patternRef.current;
      const totalCycle =
        pattern.phases[0] +
        pattern.phases[1] +
        pattern.phases[2] +
        pattern.phases[3];
      const cycleTime = elapsed % totalCycle;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.min(w, h) * 0.28;
      const colors = colorsRef.current;

      // Clear
      ctx!.clearRect(0, 0, w, h);

      // Phase info
      const { index: phaseIdx, progress } = getPhaseProgress(
        cycleTime,
        pattern.phases
      );

      // Detect phase transitions
      if (prevPhaseRef.current !== -1 && prevPhaseRef.current !== phaseIdx) {
        // Spawn ripple
        const currentRadius = computeRadius(
          prevPhaseRef.current,
          1,
          maxRadius
        );
        ripplesRef.current.push({
          radius: currentRadius,
          opacity: 0.3,
          startTime: now,
        });

        // Count completed cycles
        if (phaseIdx === 0 && prevPhaseRef.current !== -1) {
          cycleCountRef.current += 1;
        }
      }
      prevPhaseRef.current = phaseIdx;

      // Compute circle radius
      function computeRadius(
        phase: number,
        prog: number,
        maxR: number
      ): number {
        const minR = maxR * MIN_RADIUS_RATIO;
        if (phase === 0) {
          // inhale: expand
          const eased = easeInOutSine(prog);
          return minR + (maxR - minR) * eased;
        } else if (phase === 1) {
          // hold at max with subtle pulse
          const pulse =
            Math.sin(prog * Math.PI * 4) * maxR * PULSE_AMPLITUDE;
          return maxR + pulse;
        } else if (phase === 2) {
          // exhale: contract
          const eased = easeInOutSine(prog);
          return maxR - (maxR - minR) * eased;
        } else {
          // hold at min with subtle pulse
          const pulse =
            Math.sin(prog * Math.PI * 4) * maxR * PULSE_AMPLITUDE;
          return minR + pulse;
        }
      }

      const radius = computeRadius(phaseIdx, progress, maxRadius);

      // Draw radial gradient circle
      const grad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, radius);
      const [ar, ag, ab] = colors.accent;
      grad.addColorStop(0, `rgba(${ar}, ${ag}, ${ab}, 0.6)`);
      grad.addColorStop(0.5, `rgba(${ar}, ${ag}, ${ab}, 0.2)`);
      grad.addColorStop(1, `rgba(${ar}, ${ag}, ${ab}, 0)`);
      ctx!.beginPath();
      ctx!.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx!.fillStyle = grad;
      ctx!.fill();

      // Draw ripples
      const activeRipples: Ripple[] = [];
      for (const ripple of ripplesRef.current) {
        const age = now - ripple.startTime;
        if (age > RIPPLE_DURATION) continue;
        const t = age / RIPPLE_DURATION;
        const rippleRadius = ripple.radius + maxRadius * 0.6 * easeInOutSine(t);
        const rippleOpacity = ripple.opacity * (1 - t);
        ctx!.beginPath();
        ctx!.arc(cx, cy, rippleRadius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${ar}, ${ag}, ${ab}, ${rippleOpacity})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
        activeRipples.push(ripple);
      }
      ripplesRef.current = activeRipples;

      // Phase text with fade
      const phaseDuration = pattern.phases[phaseIdx];
      let textOpacity = 1;
      if (phaseDuration > 0) {
        const phaseElapsed = progress * phaseDuration;
        const phaseRemaining = phaseDuration - phaseElapsed;
        if (phaseElapsed < FADE_DURATION) {
          textOpacity = phaseElapsed / FADE_DURATION;
        } else if (phaseRemaining < FADE_DURATION) {
          textOpacity = phaseRemaining / FADE_DURATION;
        }
      }

      // Only draw label if phase duration > 0
      if (phaseDuration > 0) {
        const [mr, mg, mb] = colors.muted;
        ctx!.save();
        ctx!.globalAlpha = Math.max(0, Math.min(1, textOpacity));
        ctx!.font = '1.2rem "Geist Sans", system-ui, sans-serif';
        ctx!.fillStyle = `rgb(${mr}, ${mg}, ${mb})`;
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(PHASE_LABELS[phaseIdx], cx, cy);
        ctx!.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [readColors]);

  const controlsOpacity = controlsVisible ? 0.7 : 0.05;

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, display: "block" }}
      />

      {/* Back link — top left */}
      <a
        href="/"
        style={{
          position: "fixed",
          top: 24,
          left: 24,
          zIndex: 10,
          fontFamily: '"Geist Sans", system-ui, sans-serif',
          fontSize: "0.875rem",
          color: "var(--muted)",
          textDecoration: "none",
          opacity: controlsOpacity,
          transition: "opacity 0.5s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.opacity = String(controlsOpacity))
        }
      >
        &larr; back
      </a>

      {/* Pattern selector — bottom center */}
      <div
        style={{
          position: "fixed",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: 8,
          opacity: controlsOpacity,
          transition: "opacity 0.5s ease",
        }}
      >
        {PATTERNS.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setPatternIdx(i)}
            style={{
              fontFamily: '"Geist Mono", monospace',
              fontSize: "0.75rem",
              padding: "4px 12px",
              border: "1px solid var(--border)",
              borderRadius: 6,
              background:
                i === patternIdx ? "var(--accent)" : "transparent",
              color:
                i === patternIdx
                  ? "var(--background)"
                  : "var(--muted)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Cycle counter — bottom right */}
      <CycleCounter opacity={controlsOpacity} cycleCountRef={cycleCountRef} />
    </div>
  );
}

/** Separate component so cycle count re-renders via RAF without re-rendering the whole tree */
function CycleCounter({
  opacity,
  cycleCountRef,
}: {
  opacity: number;
  cycleCountRef: React.RefObject<number>;
}) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cycleCountRef.current !== count) {
        setCount(cycleCountRef.current!);
      }
    }, 250);
    return () => clearInterval(interval);
  }, [count, cycleCountRef]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        right: 24,
        zIndex: 10,
        fontFamily: '"Geist Mono", monospace',
        fontSize: "0.75rem",
        color: "var(--muted)",
        opacity,
        transition: "opacity 0.5s ease",
      }}
    >
      breath {count}
    </div>
  );
}
