import React, { useContext } from 'react'

import { AboutContainer, AboutTextContainer, AboutText } from './About.styles';

import { SwitchContext } from '../../contexts/switch.context';

const About = () => {
  const { isThemeDark } = useContext(SwitchContext);
  return (
    <section id='about'>
        <AboutContainer> 
          <AboutTextContainer>
            <AboutText isThemeDark={isThemeDark}>I'm Zura Chubinashvili, web developer from Tbilisi, Georgia. In my spare time I learn more and more about web development. My goal is to become one of the bests in this profession.</AboutText>
          </AboutTextContainer>
        </AboutContainer>
    </section>
  )
}

export default About