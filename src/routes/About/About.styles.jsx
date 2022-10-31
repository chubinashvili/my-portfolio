import styled, { css } from "styled-components";

const darkThemeStyles = css`
    color: #e6e6e6;
` 

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20rem;
`

export const AboutTextContainer = styled.div`
    text-align: left;

`

export const AboutText = styled.h1`
    line-height: 2.2rem;
    color: #435858;
    font-weight: 400;
    max-width:60rem;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem;
        max-width: 50rem;
        margin-left: .8rem;
    }

`