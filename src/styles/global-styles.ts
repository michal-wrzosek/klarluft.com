import { createGlobalStyle } from "styled-components";
import { normalizeCss } from "./normalize-css";
import { color, font } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  ${normalizeCss};

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${font.body};
    background: ${color.bg};
    color: ${color.text};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  a {
    color: ${color.accent};
    text-decoration: none;
  }

  a:hover {
    color: ${color.accentHover};
  }

  :focus-visible {
    outline: 2px solid ${color.accent};
    outline-offset: 3px;
  }

  ::selection {
    background: ${color.accent};
    color: ${color.accentInk};
  }

  img {
    max-width: 100%;
  }
`;
