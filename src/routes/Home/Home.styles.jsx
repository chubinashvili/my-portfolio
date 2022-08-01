import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #e6e6e6;
` 
const darkThemeStylesBtn = css`
    background-color: #999e9e;
    color: #24272c;
` 

export const HomeContainer = styled.div`
    max-width: 70rem;
    margin-bottom: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 90%;
        margin-bottom: 14rem;
    }
`

export const TextContainer = styled.div`
    width: 70%;
    margin-left: 15rem;
    @media screen and (max-width: 800px) {
        margin-left: 4rem; 
        width: 100%;
    }
`

export const Text = styled.h1`
    line-height: 2.2rem;
    color: #435858;
    font-weight: 400;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTxt} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem
    }
`

export const Button = styled.a`
    ${({isThemeDark}) => isThemeDark && darkThemeStylesBtn} 
    margin-top: 1.5rem;
    margin-right: 24rem;
    display: inline-block;
    background-color: #435858;
    color: rgb(229 229 229);
    border-radius: 5px;
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: .8rem;
    font-weight: 700;
    @media screen and (max-width: 800px) {
        margin-right: 0;
        margin-left: 1.7rem
        
    }
`

