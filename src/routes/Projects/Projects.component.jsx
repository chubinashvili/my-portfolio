import React, { useContext } from 'react';

import Project from '../../components/Project/Project.component';
import { Section, ProjectsContainer, ProjectsHeader } from './Projects.styles';

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
    }, {
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
      title: 'THE DOJO',
      body: 'A Project Management Web App.',
      web: 'https://projectt-management.netlify.app/',
      imageUrl: '/images/the-dojo.PNG',
      technologies: ['React', 'FIREBASE'],
    },
    {
      title: 'FINANCE TRACKER',
      body: 'A Finance Tracker App for tracking every dollar you spend.',
      web: 'https://track-every-dollar.web.app/',
      imageUrl: '/images/finance-tracker.PNG',
      technologies: ['React', 'FIREBASE'],
    }, {
      title: 'YELPCAMP',
      body: 'Discover campgrounds and new cool places.',
      web: 'https://yelpcamp56.herokuapp.com/',
      imageUrl: '/images/yelpcamp.PNG',
      technologies: ['Javascript', 'Node.js', 'MONGODB'],
    }, {
      title: 'COOKING NINJA',
      body: 'A web app about recipes for cooking.',
      web: 'https://cooking-ninja-app.netlify.app/',
      imageUrl: '/images/cooking-ninja.PNG',
      technologies: ['React', 'firebase'],
    }, {
      title: 'MAGIC MEMORY',
      body: 'Try to match all cards in the fewest attempts.',
      web: 'https://magic-memory-app.netlify.app/',
      imageUrl: '/images/magic-memory.PNG',
      technologies: ['React'],
    }, {
      title: 'CHAT APP',
      body: 'Chat with your friends.',
      web: 'https://zura-chat-app.herokuapp.com/',
      imageUrl: '/images/chat-app.PNG',
      technologies: ['Node.js', 'SOCKET.IO'],
    }, {
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
    <Section id='projects'>
      <ProjectsHeader isThemeDark={isThemeDark}>Projects Created By Me</ProjectsHeader>
      <ProjectsContainer>
        {PROJECTS.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </ProjectsContainer>
    </Section>
  )
}

export default Projects