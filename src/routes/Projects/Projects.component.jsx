import React, { useContext } from 'react'

import Project from '../../components/Project/Project.component'
import { Section, ProjectsContainer, ProjectsHeader } from './Projects.styles'

import { SwitchContext } from '../../contexts/switch.context'

const PROJECTS = [
  {
    title: 'Jobify Nextjs',
    github: 'https://github.com/chubinashvili/jobify-nextjs',
    web: 'https://jobify-app.vercel.app/landing',
    imageUrl: '/images/jobify-nextjs.png',
    technologies: ['Nextjs', 'TypeScript', 'Node.js', 'MONGODB', 'Redux'],
  },
  {
    title: 'Jobify',
    github: 'https://github.com/chubinashvili/jobify',
    web: 'https://jobify-k454.onrender.com/',
    imageUrl: '/images/jobify.PNG',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MONGODB', 'React Testing Library'],
  },
  {
    title: 'Crwn Clothing',
    github: 'https://github.com/chubinashvili/crwn-clothing',
    web: 'https://crwn-clothing-application.netlify.app/',
    imageUrl: '/images/crwn-clothing.PNG',
    technologies: ['React', 'Redux', 'TYPESCRIPT', 'FIREBASE', 'STRIPE'],
  },
  {
    title: 'The Dojo',
    github: 'https://github.com/chubinashvili/the-dojo',
    web: 'https://projectt-management.netlify.app/',
    imageUrl: '/images/the-dojo.PNG',
    technologies: ['React', 'FIREBASE'],
  },
  {
    title: 'Finance Tracker',
    github: 'https://github.com/chubinashvili/finance-tracker',
    web: 'https://track-every-dollar.web.app/',
    imageUrl: '/images/finance-tracker.PNG',
    technologies: ['React', 'FIREBASE'],
  },
  {
    title: 'Cooking Ninja',
    github: 'https://github.com/chubinashvili/cooking-ninja',
    web: 'https://cooking-ninja-app.netlify.app/',
    imageUrl: '/images/cooking-ninja.PNG',
    technologies: ['React', 'firebase'],
  },
  {
    title: 'YelpCamp',
    github: 'https://github.com/chubinashvili/yelp-camp',
    web: 'https://yelpcamp-application.onrender.com/',
    imageUrl: '/images/yelpcamp.PNG',
    technologies: ['Javascript', 'Node.js', 'MONGODB'],
  },
  {
    title: 'Magic Memory',
    github: 'https://github.com/chubinashvili/magic-memory',
    web: 'https://magic-memory-app.netlify.app/',
    imageUrl: '/images/magic-memory.PNG',
    technologies: ['React'],
  },
  {
    title: 'Chat App',
    github: 'https://github.com/chubinashvili/chat-app',
    web: 'https://chat-application-bphi.onrender.com/',
    imageUrl: '/images/chat-app.PNG',
    technologies: ['Node.js', 'SOCKET.IO'],
  },
  {
    title: 'Weather App',
    github: 'https://github.com/chubinashvili/weather-app',
    web: 'https://weather-application-7saf.onrender.com/',
    imageUrl: '/images/weather-app.PNG',
    technologies: ['Node.js'],
  },
  {
    title: 'Expensify',
    github: 'https://github.com/chubinashvili/expensify',
    web: 'https://expensify5.herokuapp.com/',
    imageUrl: '/images/expensify.PNG',
    technologies: ['React', 'REDUX', 'FIREBASE', 'JEST'],
  },
]

const Projects = () => {
  const { isThemeDark } = useContext(SwitchContext)
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
