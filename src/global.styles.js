import { createGlobalStyle, css } from "styled-components";

const darkThemeStyles = css`
  background-color: rgb(36, 39, 44);
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 20px 30px;
        font-weight: 400;
        transition: 0.3s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        ${({ isThemeDark }) => isThemeDark && darkThemeStyles}
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }
    html {
        scroll-behavior: smooth;
    }
    #root {
        transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
`;
