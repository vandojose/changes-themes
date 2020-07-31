import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.25s linear, color 0.25s linear;
  }
  `;
