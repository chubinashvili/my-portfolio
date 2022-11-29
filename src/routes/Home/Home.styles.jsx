import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #e6e6e6;;
    span {
        color: #e6e6e6;;
    }
` 
const darkThemeStylesBtn = css`
    background-color:  #3c4b4b;
    color: rgb(229 229 229);
` 
    

export const HomeContainer = styled.div`
    padding-bottom: 20rem;
    padding-top: 5rem;
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
    line-height: 2.5rem;
    color: #435858;
    font-weight: 400;
    max-width: 60rem;
    margin-bottom: 2rem;
    span {
        color: #444452;
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
    background-color:  #435858;
    color: #fff;
    border-radius: 5px;
    padding: .8rem 1.8rem;
    text-decoration: none;
    font-size: .9rem;
    font-weight: 700;
    line-height: 1.6;
    width: 10rem;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesBtn} 
    @media screen and (max-width: 800px) {
        margin-right: 0rem;
    }
`

