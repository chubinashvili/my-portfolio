import styled, { css } from "styled-components";

const darkThemeStyles = css`
    color: #e6e6e6;
` 

export const AboutContainer = styled.div`
    max-width: 70rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 13rem;
    @media screen and (max-width: 800px) {
        width: 90%;
        margin-bottom: 9rem;
    }
`

export const AboutTextContainer = styled.div`
    width: 70%;
    margin-left: 15rem;
    @media screen and (max-width: 800px) {
        margin-left: 5rem;  
    }
`

export const AboutText = styled.h1`
    line-height: 2.2rem;
    color: #435858;
    font-weight: 400;
    text-align: left;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem
    }

`