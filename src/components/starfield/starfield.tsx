"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { createStarfield, type StarfieldHandle } from "./engine";

const Layer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export interface StarfieldRef {
  warp(duration?: number): void;
}

/** Fills its positioned parent with the hyperspace starfield. */
export const Starfield = forwardRef<StarfieldRef>(function Starfield(_, ref) {
  const layerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<StarfieldHandle | null>(null);

  useImperativeHandle(ref, () => ({
    warp: (duration) => handleRef.current?.warp(duration),
  }));

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let cancelled = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    createStarfield(layer, { reducedMotion }).then((handle) => {
      if (!handle) return;
      if (cancelled) {
        handle.destroy();
        return;
      }
      handleRef.current = handle;
    });

    return () => {
      cancelled = true;
      handleRef.current?.destroy();
      handleRef.current = null;
    };
  }, []);

  return <Layer ref={layerRef} aria-hidden="true" />;
});
