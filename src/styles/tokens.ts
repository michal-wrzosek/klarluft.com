export const color = {
  black: "#000000",
  bg: "#0a0a0a",
  bgDeep: "#070707",
  card: "#0d0d0d",
  cardInset: "#0f0f0f",
  line: "#1e1e1e",
  lineSoft: "#171717",
  lineStrong: "#262626",
  lineChip: "#232323",
  text: "#ffffff",
  textSoft: "#d0d0d0",
  muted: "#adadad",
  mutedSoft: "#9a9a9a",
  dim: "#6b6b6b",
  faint: "#5c5c5c",
  accent: "#35d3ff",
  accentHover: "#7fe3ff",
  accentInk: "#04222c",
} as const;

export const font = {
  display: "var(--font-roboto), 'Helvetica Neue', Arial, sans-serif",
  body: "var(--font-plex-sans), 'Segoe UI', Helvetica, Arial, sans-serif",
  mono: "var(--font-plex-mono), ui-monospace, Menlo, monospace",
} as const;

/** Max-width of the content column on desktop. */
export const contentWidth = "1160px";

export const media = {
  tablet: "@media (max-width: 1220px)",
  phone: "@media (max-width: 720px)",
} as const;
