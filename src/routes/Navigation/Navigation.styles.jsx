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
        flex-direction: column;
        justify-content: left;  
        height: 15rem;
        width: 85%;
    }
`

export const IconContainer = styled.div`
    cursor: pointer;
    @media screen and (max-width: 800px) {
        margin-left: 1.2rem  
    }
`
export const NavLinks = styled.ul`
    list-style-type: none;
    display: flex;
    @media screen and (max-width: 800px) {
        flex-direction: column;    
    }
`

export const Navlink = styled(Link)`
    text-decoration: none;
    margin-left: 2rem;
    color: #435858;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        margin-left: 0;  
    }
`
