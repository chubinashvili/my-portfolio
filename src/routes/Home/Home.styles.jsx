import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #e6e6e6;
` 
const darkThemeStylesBtn = css`
    background-color: #999e9e;
    color: #24272c;
` 
    

export const HomeContainer = styled.div`
    margin-bottom: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
`

export const ContentContainer = styled.div`
    text-align: left;
    @media screen and (max-width: 800px) {
        padding-inline: 1.2rem;
    }
`

export const Text = styled.h1`
    line-height: 2.2rem;
    color: #435858;
    font-weight: 400;
    max-width: 60rem;
    margin-bottom: 2rem;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTxt} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem;
        max-width: 40rem;
    }
`

export const Button = styled.a`
    ${({isThemeDark}) => isThemeDark && darkThemeStylesBtn} 
    display: inline-block;
    background-color:  #435858;
    color: rgb(229 229 229);
    border-radius: 5px;
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: .8rem;
    font-weight: 700;
    width: 10rem;
    @media screen and (max-width: 800px) {
        margin-right: 0rem;
        /* margin-left: .8rem; */
    }
`

