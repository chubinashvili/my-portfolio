import React, { useContext } from 'react';

import Project from '../../components/Project/Project.component';
import { ProjectsContainer, ProjectsHeader } from './Projects.styles';

import { SwitchContext } from '../../contexts/switch.context';

const PROJECTS = [
    {
      title: 'CRWN CLOTHING',
      body:
        'A web app for buying clothes.',
      web: 'https://crwn-clothing-application.netlify.app/',
      imageUrl: '/images/crwn-clothing.PNG',
      technologies: [
        'React',
        'Redux',
        'TYPESCRIPT',
        'FIREBASE',
        'STRIPE'
      ],
    },
    {
      title: 'EXPENSIFY',
      body: 'Manage your expenses using web app.',
      web: 'https://expensify5.herokuapp.com/',
      imageUrl: '/images/expensify.PNG',
      technologies: [
        'React', 
        'REDUX',
        'FIREBASE',
        'JEST'
    ],
    },
    {
      title: 'YELPCAMP',
      body: 'Discover campgrounds and new cool places',
      web: 'https://yelpcamp56.herokuapp.com/ ',
      imageUrl: '/images/yelpcamp.PNG',
      technologies: ['Node.js', 'MONGODB'],
    },
    {
        title: 'CHAT APP',
        body: 'Chat with your friends.',
        web: 'https://zura-chat-app.herokuapp.com/',
        imageUrl: '/images/chat-app.PNG',
        technologies: ['Node.js', 'SOCKET.IO'],
    },
    {
      title: 'WEATHER APP',
      body: 'Get weather information based on location input.',
      web: 'https://weather-application5.herokuapp.com/',
      imageUrl: '/images/weather-app.PNG',
      technologies: ['Node.js',],
    },
]

const Projects = () => {
  const { isThemeDark } = useContext(SwitchContext);
  return (
    <section id='projects'>
      <ProjectsHeader isThemeDark={isThemeDark}>Projects Created By Me</ProjectsHeader>
      <ProjectsContainer>
        {PROJECTS.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </ProjectsContainer>
    </section>
  )
}

export default Projects