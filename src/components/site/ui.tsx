"use client";

import styled from "styled-components";
import { color, contentWidth, font, media } from "@/styles/tokens";

export const Container = styled.div`
  width: 100%;
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: 0 22px;
`;

export const Section = styled.section<{ $deep?: boolean }>`
  background: ${({ $deep }) => ($deep ? color.bgDeep : color.bg)};
  padding: 116px 0;

  ${media.phone} {
    padding: 68px 0;
  }
`;

export const Eyebrow = styled.div`
  font-family: ${font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${color.accent};
  margin-bottom: 20px;

  ${media.phone} {
    font-size: 10px;
    letter-spacing: 0.16em;
    margin-bottom: 16px;
  }
`;

export const Display = styled.h2`
  margin: 0;
  font-family: ${font.display};
  font-size: 47px;
  line-height: 1.05;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.028em;
  text-wrap: pretty;

  ${media.phone} {
    font-size: 35px;
    line-height: 1.06;
  }
`;

export const Lede = styled.p`
  margin: 0;
  font-size: 16.5px;
  line-height: 1.6;
  color: #9e9e9e;
  text-wrap: pretty;

  ${media.phone} {
    font-size: 15.5px;
  }
`;

export const Card = styled.div`
  border: 1px solid ${color.line};
  border-radius: 12px;
  background: ${color.card};
`;

export const Chip = styled.span`
  font-family: ${font.mono};
  font-size: 11.5px;
  color: #8a8a8a;
  border: 1px solid ${color.lineChip};
  border-radius: 5px;
  padding: 5px 9px;

  ${media.phone} {
    font-size: 11px;
  }
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const Mono = styled.span`
  font-family: ${font.mono};
`;

/** The K in a square from the favicon, as an inline mark. */
export function KMark({ size = 26, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", opacity, flexShrink: 0 }}
      aria-hidden="true"
    >
      <g transform="translate(0,500) scale(0.1,-0.1)" fill="#ffffff" stroke="none">
        <path d="M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0 -2500z m2346 1623 c-3 -16 -55 -314 -116 -663 -61 -349 -113 -651 -117 -670 -5 -31 12 -15 148 140 85 96 372 410 638 697 l483 523 416 0 416 0 -55 -57 c-31 -32 -321 -337 -644 -678 -323 -341 -606 -639 -628 -662 l-39 -41 406 -860 c223 -473 406 -863 406 -866 0 -4 -163 -5 -362 -4 l-362 3 -280 627 c-155 345 -284 628 -287 628 -9 0 -419 -380 -419 -388 0 -4 -34 -200 -75 -437 -41 -236 -75 -431 -75 -432 0 -7 -629 -2 -633 5 -2 4 119 711 269 1572 150 861 273 1571 274 1578 0 9 71 12 321 12 l321 0 -6 -27z" />
      </g>
    </svg>
  );
}

export function ArrowRight({ color: stroke = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={stroke} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12" />
      <path d="M11 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowOut({ color: stroke = "currentColor", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 13L13 7" />
      <path d="M7.5 7H13v5.5" />
    </svg>
  );
}
