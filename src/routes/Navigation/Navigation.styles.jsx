import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const darkThemeStyles = css`
    color: rgb(229 229 229);   
` 

export const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 12rem;
    align-items: center;
    @media screen and (max-width: 800px) {
        justify-content: flex-start;
    }
`

export const IconContainer = styled.div`
    cursor: pointer;
    @media screen and (max-width: 800px) {
        margin-left: 1.2rem;
    }
`
export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
`

export const Navlink = styled(Link)`
    text-decoration: none;
    margin-left: 2rem;
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        margin-left: .8rem;  
    }
`
