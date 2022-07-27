import React, { useContext } from 'react'

import Projects from '../Projects/Projects.component';
import { HomeContainer, TextContainer, Text, Button } from './Home.styles';

import { SwitchContext } from '../../contexts/switch.context';

const Home = () => {
  const { isThemeDark } = useContext(SwitchContext);
  return (
    <section id='home'>
        <HomeContainer>
            <TextContainer>
              <Text isThemeDark={isThemeDark}>Hello there, I'm <span>Zura Chubinashvili</span>, Web developer. I'm passionate about creating web apps and seek to learn more</Text>
            </TextContainer>
            <Button isThemeDark={isThemeDark} href='#projects'>
                  View My Work
            </Button>
        </HomeContainer>
        <Projects />
    </section>
  )
}

export default Home;