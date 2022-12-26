import styled, { css } from "styled-components";

const darkThemeStyles = css`
    color: #e6e6e6;
    font-weight: 300;
` 

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20rem;
    padding-top: 5rem;
`

export const AboutTextContainer = styled.div`
    text-align: left;
    @media screen and (max-width: 800px) {
        padding-inline: 1.2rem;
    }
`

export const AboutText = styled.h1`
    line-height: 2.5rem;
    color: #0f172a;    
    font-weight: 400;
    font-size: 1.5rem;
    max-width:60rem;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem;
        max-width: 50rem;
    }

`