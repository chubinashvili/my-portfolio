import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const darkThemeStyles = css`
    color: rgb(229 229 229);   
` 

export const NavContainer = styled.nav`
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    height: 16rem;
    align-items: center;
`

export const IconContainer = styled.div`
    cursor: pointer;
    @media screen and (max-width: 480px) {
        width: 14%;
        justify-content: space-between;
    }
`
export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    @media screen and (max-width: 480px) {
        justify-content: space-between;
        width: 70%;
    }
`

export const Navlink = styled(Link)`
    text-decoration: none;
    margin-left: 2rem;
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 480px) {
        margin-left: 0;  
    }
`
