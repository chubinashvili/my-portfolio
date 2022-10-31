import React, { useContext } from 'react'

import { ProjectLinkWrapper, ProjectContainer, Title, TechList, Image, Txt } from './Project.styles';

import { SwitchContext } from '../../contexts/switch.context';

const Project = ({ title, body, technologies, imageUrl, web}) => {
  const { isThemeDark } = useContext(SwitchContext);
  return (
    <ProjectLinkWrapper target='_blank' href={web}>
      <ProjectContainer isThemeDark={isThemeDark}>
        <Image 
          src={imageUrl}
          alt={title} 
        />
        <div>
          <Title>{title}</Title>
          <div>
            <Txt>{body}</Txt>
          </div>
          <TechList isThemeDark={isThemeDark}>
            {technologies.map((tech) => (
              <li key={tech} >
                {tech.toUpperCase()}
              </li>
            ))}
          </TechList>
        </div>
      </ProjectContainer>
    </ProjectLinkWrapper>
  )
}

export default Project