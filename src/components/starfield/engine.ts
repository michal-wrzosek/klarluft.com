import type { Sprite } from "pixi.js";

/**
 * The hyperspace starfield behind the hero.
 *
 * Stars live in a simple 3D field in front of a camera that flies forward
 * through them. Each frame a star is projected onto the screen with a
 * pinhole projection, then stretched along the line to the vanishing point
 * in proportion to how fast the camera is moving. At drift speed that is a
 * slow parallax; at warp speed the stretch turns every star into a streak
 * radiating from the centre — the Star Wars jump.
 *
 * The camera warps once when the field first appears, settles into a drift,
 * and jumps again now and then. `warp()` triggers a jump on demand.
 */

export interface StarfieldHandle {
  /** Kick the camera to warp speed for `duration` ms, then let it settle. */
  warp(duration?: number): void;
  destroy(): void;
}

export interface StarfieldOptions {
  /** Stars take on this colour as the camera approaches warp speed. */
  accent?: number;
  /** No jumps and a very slow drift — `prefers-reduced-motion`. */
  reducedMotion?: boolean;
}

interface Star {
  sprite: Sprite;
  x: number;
  y: number;
  z: number;
}

const FOV = 20;
const DEPTH = 2000;
const STRETCH = 4.5;
const BASE_SIZE = 0.05;
const INITIAL_WARP_MS = 2400;
const REPEAT_WARP_MS = 1500;
const REPEAT_EVERY_MS = 11000;
const REPEAT_JITTER_MS = 4000;

const lerpColor = (from: number, to: number, t: number) => {
  const mix = (shift: number) => {
    const a = (from >> shift) & 0xff;
    const b = (to >> shift) & 0xff;
    return Math.round(a + (b - a) * t) << shift;
  };
  return mix(16) | mix(8) | mix(0);
};

export async function createStarfield(
  container: HTMLElement,
  { accent = 0x35d3ff, reducedMotion = false }: StarfieldOptions = {},
): Promise<StarfieldHandle | null> {
  const PIXI = await import("pixi.js");

  // The caller may have unmounted while pixi was loading.
  let destroyed = false;
  const app = new PIXI.Application();
  await app.init({
    resizeTo: container,
    backgroundAlpha: 0,
    antialias: false,
    resolution: Math.min(window.devicePixelRatio || 1, 2),
    autoDensity: true,
  });
  if (destroyed) {
    app.destroy({ removeView: true }, { children: true });
    return null;
  }

  Object.assign(app.canvas.style, {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    display: "block",
  });
  container.appendChild(app.canvas);

  const texture = await PIXI.Assets.load("/star.png");
  if (destroyed) {
    app.destroy({ removeView: true }, { children: true });
    return null;
  }

  // Fewer stars on a narrow screen: the effect is the same, the phone is not.
  const starCount = container.clientWidth < 720 ? 450 : 900;
  const driftSpeed = reducedMotion ? 0.006 : 0.02;

  let cameraZ = 0;
  let speed = 0;
  let warpUntil = 0;

  const stars: Star[] = [];

  const placeStar = (star: Star, initial: boolean) => {
    star.z = initial ? Math.random() * DEPTH : cameraZ + Math.random() * 1000 + DEPTH;
    // Radial placement so no star flies straight through the camera.
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    star.x = Math.cos(angle) * distance;
    star.y = Math.sin(angle) * distance;
  };

  for (let i = 0; i < starCount; i++) {
    const sprite = new PIXI.Sprite(texture);
    sprite.anchor.set(0.5, 0.7);
    const star: Star = { sprite, x: 0, y: 0, z: 0 };
    placeStar(star, true);
    app.stage.addChild(sprite);
    stars.push(star);
  }

  app.ticker.add((ticker) => {
    const dt = ticker.deltaTime;
    const now = performance.now();
    const target = now < warpUntil ? 1 : 0;
    // Accelerate into a jump faster than the camera falls out of it.
    const ease = target > speed ? 0.06 : 0.03;
    speed += (target - speed) * ease * dt;
    cameraZ += dt * 10 * (speed + driftSpeed);

    const { width, height } = app.screen;
    const cx = width / 2;
    const cy = height / 2;
    const tint = lerpColor(0xffffff, accent, Math.min(1, speed * 0.6));

    for (const star of stars) {
      if (star.z < cameraZ) placeStar(star, false);

      const z = star.z - cameraZ;
      const scale = FOV / z;
      const sx = star.x * scale * width + cx;
      const sy = star.y * scale * width + cy;
      const { sprite } = star;
      sprite.x = sx;
      sprite.y = sy;

      const dx = sx - cx;
      const dy = sy - cy;
      const fromCentre = Math.sqrt(dx * dx + dy * dy);
      const depth = Math.max(0, (DEPTH - z) / DEPTH);

      sprite.scale.x = depth * BASE_SIZE;
      // The streak: longer the faster we go and the further from the centre we are.
      sprite.scale.y = depth * BASE_SIZE + (depth * speed * STRETCH * fromCentre) / width;
      sprite.rotation = Math.atan2(dy, dx) + Math.PI / 2;
      // Fade in from the far plane so stars never pop into existence.
      sprite.alpha = Math.min(1, depth * 1.8) * 0.95;
      sprite.tint = tint;
    }
  });

  const warp = (duration = REPEAT_WARP_MS) => {
    if (reducedMotion) return;
    warpUntil = Math.max(warpUntil, performance.now() + duration);
  };

  // One jump on arrival, then the occasional one while the hero is on screen.
  let repeatTimer: ReturnType<typeof setTimeout> | undefined;
  const scheduleRepeat = () => {
    repeatTimer = setTimeout(
      () => {
        warp();
        scheduleRepeat();
      },
      REPEAT_EVERY_MS + Math.random() * REPEAT_JITTER_MS,
    );
  };
  if (!reducedMotion) {
    warp(INITIAL_WARP_MS);
    scheduleRepeat();
  }

  // Only spend frames while the hero is actually visible.
  let onScreen = true;
  const syncRunning = () => {
    const shouldRun = onScreen && document.visibilityState === "visible";
    if (shouldRun && !app.ticker.started) app.ticker.start();
    if (!shouldRun && app.ticker.started) app.ticker.stop();
  };
  const observer = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    syncRunning();
  });
  observer.observe(container);
  document.addEventListener("visibilitychange", syncRunning);

  return {
    warp,
    destroy() {
      destroyed = true;
      clearTimeout(repeatTimer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncRunning);
      app.destroy({ removeView: true }, { children: true });
    },
  };
}
