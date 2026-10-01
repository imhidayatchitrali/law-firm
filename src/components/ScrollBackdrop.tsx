'use client';

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

type Keyframe = { at: number; scale: number; x: number; y: number };

type Scene = {
  section: string;
  src: string;
  position: string;
  mobilePosition: string;
  // Motion across the scene's life: at 0 it starts fading in, at 1 it has fully faded out.
  // x / y are translate percentages.
  motion: Keyframe[];
};

const scenes: Scene[] = [
  {
    section: ".abbo-hero",
    src: "/images/abbo-scroll-background-1.webp",
    position: "center center",
    mobilePosition: "38% center",
    motion: [
      { at: 0, scale: 1.08, x: 0, y: 0 },
      { at: 1, scale: 1.12, x: 0, y: -1.2 },
    ],
  },
  {
    section: "#practice-areas",
    src: "/images/abbo-scroll-background-2.webp",
    position: "60% center",
    mobilePosition: "72% center",
    motion: [
      { at: 0, scale: 1.12, x: 0, y: 0 },
      { at: 0.3, scale: 1.09, x: 0, y: -0.3 },
      { at: 0.7, scale: 1.09, x: 0, y: -0.5 },
      { at: 1, scale: 1.115, x: 0, y: -0.8 },
    ],
  },
  {
    section: "#commitment",
    src: "/images/abbo-scroll-background-3.webp",
    position: "center center",
    mobilePosition: "62% center",
    motion: [
      { at: 0, scale: 1.09, x: 0.4, y: 0.8 },
      { at: 1, scale: 1.115, x: -0.4, y: -0.8 },
    ],
  },
  {
    section: "#injury-guide",
    src: "/images/abbo-scroll-background-4.webp",
    position: "65% center",
    mobilePosition: "70% center",
    motion: [
      { at: 0, scale: 1.08, x: 0, y: 0 },
      { at: 1, scale: 1.105, x: 0, y: 0 },
    ],
  },
  {
    section: "#about",
    src: "/images/abbo-scroll-background-5.webp",
    position: "55% center",
    mobilePosition: "62% center",
    motion: [
      { at: 0, scale: 1.07, x: 0, y: 0 },
      { at: 1, scale: 1.1, x: -1, y: 0 },
    ],
  },
  {
    section: "#contact",
    src: "/images/abbo-scroll-background-6.webp",
    position: "55% center",
    mobilePosition: "68% center",
    motion: [
      { at: 0, scale: 1.08, x: 0, y: 0 },
      { at: 1, scale: 1.12, x: 0, y: -0.8 },
    ],
  },
];

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
// Mobile keeps 50% of the desktop zoom and drift.
const MOBILE_MOTION = 0.5;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smoothstep = (v: number) => v * v * (3 - 2 * v);

function sampleMotion(frames: Keyframe[], t: number) {
  if (t <= frames[0].at) return frames[0];
  for (let i = 1; i < frames.length; i++) {
    const b = frames[i];
    if (t <= b.at) {
      const a = frames[i - 1];
      const k = smoothstep((t - a.at) / (b.at - a.at));
      return {
        at: t,
        scale: a.scale + (b.scale - a.scale) * k,
        x: a.x + (b.x - a.x) * k,
        y: a.y + (b.y - a.y) * k,
      };
    }
  }
  return frames[frames.length - 1];
}

export function ScrollBackdrop() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const layers = layerRefs.current;
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const reducedQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    // Blend zones around each section boundary, measured once per layout change.
    let zones: { lo: number; hi: number }[] = [];
    let ranges: { start: number; end: number }[] = [];
    let measured = false;
    const last = layers.map(() => ({ opacity: "", transform: "", visibility: "" }));
    let frame = 0;

    const measure = () => {
      const sections = scenes.map((scene) => document.querySelector<HTMLElement>(scene.section));
      if (sections.some((el) => !el)) {
        measured = false;
        return;
      }
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const boxes = (sections as HTMLElement[]).map((el) => {
        const rect = el.getBoundingClientRect();
        return { top: rect.top + scrollY, height: rect.height };
      });
      const maxCenter = document.documentElement.scrollHeight - vh * 0.5;
      const minCenter = vh * 0.5;

      zones = boxes.slice(1).map((box, i) => {
        const prev = boxes[i];
        // Start dissolving before the next section arrives; never let neighbouring zones overlap.
        const width = Math.min(vh * 0.75, prev.height * 0.8, box.height * 0.8);
        const hi = Math.min(box.top + width * 0.35, maxCenter);
        const lo = Math.max(Math.min(box.top - width * 0.65, hi - 60), minCenter);
        return { lo, hi: Math.max(hi, lo + 1) };
      });

      ranges = scenes.map((_, i) => ({
        start: i === 0 ? minCenter : zones[i - 1].lo,
        end: i === scenes.length - 1 ? maxCenter : zones[i].hi,
      }));
      measured = true;
    };

    const write = (i: number, opacity: string, transform: string, visibility: string) => {
      const el = layers[i];
      if (!el) return;
      const prev = last[i];
      if (prev.opacity !== opacity) el.style.opacity = prev.opacity = opacity;
      if (prev.transform !== transform) el.style.transform = prev.transform = transform;
      if (prev.visibility !== visibility) el.style.visibility = prev.visibility = visibility;
    };

    const render = () => {
      frame = 0;
      if (!measured) measure();
      if (!measured) return;

      const center = window.scrollY + window.innerHeight * 0.5;
      // Continuous scene position: 2.4 means 40% of the way from scene 3 to scene 4.
      let position = 0;
      for (const zone of zones) {
        position += smoothstep(clamp01((center - zone.lo) / (zone.hi - zone.lo)));
      }
      const base = Math.min(Math.floor(position), scenes.length - 1);
      const blend = position - base;
      const reduced = reducedQuery.matches;
      const amount = mobileQuery.matches ? MOBILE_MOTION : 1;

      scenes.forEach((scene, i) => {
        // The lower scene stays fully opaque while the next one dissolves in on top of it,
        // so there is never a gap between images.
        const opacity = i === base ? 1 : i === base + 1 ? blend : 0;
        if (opacity === 0) {
          write(i, "0", last[i].transform, "hidden");
          return;
        }
        let transform = "none";
        if (!reduced) {
          const range = ranges[i];
          const life = clamp01((center - range.start) / Math.max(1, range.end - range.start));
          const m = sampleMotion(scene.motion, life);
          const scale = 1 + (m.scale - 1) * amount;
          transform = `translate3d(${(m.x * amount).toFixed(3)}%, ${(m.y * amount).toFixed(3)}%, 0) scale(${scale.toFixed(4)})`;
        }
        write(i, opacity.toFixed(3), transform, "visible");
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const remeasure = () => {
      measured = false;
      schedule();
    };

    const resizeObserver = new ResizeObserver(remeasure);
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    mobileQuery.addEventListener("change", remeasure);
    reducedQuery.addEventListener("change", remeasure);
    render();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      mobileQuery.removeEventListener("change", remeasure);
      reducedQuery.removeEventListener("change", remeasure);
    };
  }, []);

  return (
    <div className="abbo-backdrop" aria-hidden="true">
      {scenes.map((scene, i) => (
        <div
          key={scene.src}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          className="abbo-backdrop-layer"
          data-scene={i + 1}
          style={
            {
              opacity: i === 0 ? 1 : 0,
              visibility: i === 0 ? "visible" : "hidden",
              "--scene-pos": scene.position,
              "--scene-pos-mobile": scene.mobilePosition,
            } as CSSProperties
          }
        >
          <Image
            src={scene.src}
            alt=""
            fill
            sizes="100vw"
            preload={i === 0}
            loading={i === 0 ? undefined : "eager"}
            fetchPriority={i === 0 ? "high" : "low"}
            className="abbo-backdrop-image"
          />
        </div>
      ))}
    </div>
  );
}
