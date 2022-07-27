import React, { useContext } from 'react'

import { FooterContainer, Text, Link } from './Footer.styles';

import { SwitchContext } from '../../contexts/switch.context';

const Footer = () => {
  const { isThemeDark } = useContext(SwitchContext);
  return (
    <FooterContainer>
      <Text isThemeDark={isThemeDark}>© 2022 Created By <span>Zura Chubinashvili</span></Text>
      <div>
        <Link
          isThemeDark={isThemeDark} 
          href='mailto:chubinashvili2003@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          EMAIL
        </Link>
        <Link 
          isThemeDark={isThemeDark}
          href='https://github.com/chubinashvili/'
          rel='noopener noreferrer'
          target='_blank'
        >
          GITHUB
        </Link>
        <Link 
          isThemeDark={isThemeDark}
          href='https://www.linkedin.com/in/zura-chubinashvili/'
          rel='noopener noreferrer'
          target='_blank'
        >
          LINKEDIN
        </Link>
      </div>
    </FooterContainer>
  )
}

export default Footer;