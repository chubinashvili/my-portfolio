import styled, { css } from "styled-components";

const darkThemeStyles = css`
    color: #e6e6e6;
` 

export const Section = styled.section`
    padding: 2rem 0;
`
export const ProjectsContainer = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 20rem));
    grid-auto-columns: 1fr;
    justify-content: center;
    @media screen and (max-width: 800px) {
        grid-gap: 1.5rem;
    }
`

export const ProjectsHeader = styled.h2`
    text-align: center;
    margin-bottom: 3.8rem;
    color: #0f172a;
    font-weight: 600;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
`
