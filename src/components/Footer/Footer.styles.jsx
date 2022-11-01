import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #d3d4d4; 
` 

const darkThemeStylesLink = css`
    color: #e6e6e6;    
` 
export const FooterContainer = styled.div`
    bottom: 0;
    width: 100%; 
    clear: both;
`  

export const ContentContainer = styled.div`
    display: flex;
    max-width: 100vw;
    height: 6rem;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 522px) {
        flex-direction: column-reverse;
    }

`   
export const Text = styled.h4`
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTxt} 
    span {
        font-weight: bold;
    }
    @media screen and (max-width: 528px) {
        max-width: 100%;
    }
`

export const Link = styled.a`
    text-decoration: none;
    margin-left: 1.2rem;  
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesLink} 
`