import { createGlobalStyle, css } from 'styled-components';

const darkThemeStyles = css`
    background-color: #24272c;
` 

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 20px 30px;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ${({isThemeDark}) => isThemeDark && darkThemeStyles}
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }
    html {
        scroll-behavior: smooth;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }   
    * {
        box-sizing: border-box;
        transition: background 0.2s ease-out;    
    }
`