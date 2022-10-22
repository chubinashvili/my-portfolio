import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const darkThemeStyles = css`
    color: rgb(229 229 229);   
` 

export const NavContainer = styled.nav`
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    height: 12rem;
    align-items: center;
`

export const IconContainer = styled.div`
    cursor: pointer;

`
export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    @media screen and (max-width: 800px) {
        width: 75%;
        justify-content: space-around;
    }
`

export const Navlink = styled(Link)`
    text-decoration: none;
    margin-left: 2rem;
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        margin-left: 0rem;
    }
`
