import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #e6e6e6;
    font-weight: 300;
    span {
        color: #e6e6e6;
    }
` 
const darkThemeStylesBtn = css`
    background-color: #1e293b;;
    color: rgb(229 229 229);
` 
    

export const HomeContainer = styled.div`
    padding-bottom: 20rem;
    padding-top: 5rem;
    margin: 0 auto;
    max-width: 66.6%;
    @media screen and (max-width: 811px) {
        max-width: 85%;
    }
    @media screen and (max-width: 480px) {
        max-width: 100%;
    }
`

export const ContentContainer = styled.div`
    text-align: left;
    @media screen and (max-width: 800px) {
        padding-inline: 1.2rem;
    }
`

export const Text = styled.h1`
    line-height: 2.4rem;
    color: #0f172a;
    font-weight: 400;
    font-size: 1.5rem;
    max-width: 38rem;
    margin-bottom: 2rem;
    span {
        color: #0f172a;
        font-weight: 700;
    }
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTxt} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem;
        max-width: 40rem;
    }
`

export const Button = styled.a`
    display: inline-block;
    background-color:  #334155;
    color: #fff;
    border-radius: .25rem;
    padding: .8rem 2rem;
    text-decoration: none;
    font-size: .8rem;
    font-weight: 700;
    line-height: 1.75;
    width: 10rem;
    filter: opacity(75%);
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    &:hover {
        opacity: .7;
    }
    ${({isThemeDark}) => isThemeDark && darkThemeStylesBtn} 
    @media screen and (max-width: 800px) {
        margin-right: 0rem;
    }
`

