import { createGlobalStyle } from "styled-components";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  ${normalizeCss};

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
