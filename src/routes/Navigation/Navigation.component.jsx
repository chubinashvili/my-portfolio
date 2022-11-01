import React, { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/Footer/Footer.component';
import { ReactComponent as SunIcon } from '../../assets/sunIcon.svg';
import { ReactComponent as MoonIcon } from '../../assets/moonIcon.svg';

import { NavContainer, NavLinks, Navlink, IconContainer } from './Navigation.styles';
import { SwitchContext } from '../../contexts/switch.context';

const Navigation = () => {
  const { isThemeDark, setIsThemeDark } = useContext(SwitchContext);
  const handleThemeChange = () => {
    setIsThemeDark(!isThemeDark);
  }
  return (
    <Fragment>
        <NavContainer>
            <NavLinks>
                <li>
                    <Navlink className='first-link' isThemeDark={isThemeDark} to='/'>HOME</Navlink>
                </li>
                <li>
                    <Navlink isThemeDark={isThemeDark} to='/projects'>PROJECTS</Navlink>
                </li>
                <li>
                    <Navlink isThemeDark={isThemeDark} to='/about'>ABOUT</Navlink>
                </li>
            </NavLinks>
                <IconContainer role='button' onClick={handleThemeChange}>
                    {
                        isThemeDark ? (
                            <SunIcon />
                        ) : (
                            <MoonIcon />
                        )
                    }
                </IconContainer>
        </NavContainer> 
        <Outlet />
        <Footer />
    </Fragment>
  )
}

export default Navigation