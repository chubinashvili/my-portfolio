import { createGlobalStyle, css } from 'styled-components';

const darkThemeStyles = css`
    background-color: rgb(36, 39, 44);
` 

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 20px 30px;
        ${({isThemeDark}) => isThemeDark && darkThemeStyles}
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }
    html {
        scroll-behavior: smooth;
    }
    #root {
        transition: background .2s ease-out;    
    }
`