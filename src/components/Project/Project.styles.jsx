import styled, { css } from "styled-components";

const darkThemeStylesContainer = css`
    color: #24272c;
    border: none;
    box-shadow: none;
    background-color: #999e9e;   
` 

const darkThemeStylesList = css`
    border: 1px solid #24272c;
` 

export const ProjectLinkWrapper = styled.a`
    text-decoration: none;
`

export const ProjectContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: #3e4343;
    text-align: center;
    background-color: #cfd8d8;       
    height: 26rem;
    width: 20rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(0,0,0,.125);
    box-shadow: 0px 4px 8px 0;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesContainer} 
`

export const Title = styled.h3`
    font-weight: bold;
`

export const TechList = styled.ul`
    text-align: left;
    li {
        border: 1px solid #575a5a;
        display: inline-block;
        list-style: none;
        font-size: .8rem;
        font-weight: 400;
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin: 0.5rem;
        ${({isThemeDark}) => isThemeDark && darkThemeStylesList} 
    }
`

export const Image = styled.img`
    flex: 0 0 auto;
    max-width: 100%;
    height: 11rem;
`

export const Txt = styled.p`
    font-size: .9rem;
    line-height: 1.4rem;
`