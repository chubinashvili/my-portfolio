import styled, { css } from "styled-components";

const darkThemeStylesContainer = css`
    color: #e6e6e6;
    box-shadow: none;
    background-color: #2c2f35;   
` 

const darkThemeStylesList = css`
    border: 1px solid #222529;
    background-color: #24272c;
    color: #e6e6e6;
    font-weight: 400;
` 

export const ProjectLinkWrapper = styled.a`
    text-decoration: none;
`

export const ProjectContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: #444452;
    text-align: center;
    background-color: #fff;       
    height: 24.5rem;
    width: 20rem;
    border-radius: 0.35rem;
    border: none;
    box-shadow: 0 4px 10px 0 rgb(52, 52, 52, .3);
    ${({isThemeDark}) => isThemeDark && darkThemeStylesContainer} 
`

export const ContentContainer = styled.div`
    padding: 0 1rem;
    height: 100%;
    width: 100%;
`

export const Title = styled.h3`
    font-weight: 700;
`

export const TechList = styled.ul`
    text-align: left;
    padding-left: 0;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    li {
        border: 1px solid #24272c;
        display: inline-block;
        font-size: .75rem;
        color: #575a5a;
        font-weight: 700;
        border-radius: 0.35rem;
        padding: 0.5rem;
        margin: 0.5rem;
        ${({isThemeDark}) => isThemeDark && darkThemeStylesList} 
    }
`

export const Image = styled.img`
    flex: 0 0 auto;
    max-width: 100%;
    height: 11rem;
    border-top-left-radius: 0.35rem;
    border-top-right-radius: 0.35rem;
`

export const Txt = styled.p`
    font-size: .9rem;
    line-height: 1.4rem;
    font-weight: 400;
`
