import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #d3d4d4; 
` 

const darkThemeStylesLink = css`
    color: #e6e6e6;    
` 


export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }

`   
export const Text = styled.h4`
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTxt} 
    span {
        font-weight: bold;
    }
`

export const Link = styled.a`
    text-decoration: none;
    margin-left: 1.2rem;  
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesLink} 


`