import { createGlobalStyle, css } from "styled-components";

const darkThemeStyles = css`
  background-color: rgb(36, 39, 44);
`;

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        transition: 0.3s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        padding: 0 20px;

        ${({ isThemeDark }) => isThemeDark && darkThemeStyles}
        @media screen and (max-width: 667px) {
            padding: 0 20px;
        }
    }
    html {
        scroll-behavior: smooth;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }
    #root {
        transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
`;
