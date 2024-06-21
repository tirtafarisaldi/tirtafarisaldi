/* eslint-disable react/no-unescaped-entities */
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='projects'>
      <h1 className='section__title'>Projects <p>several projects that I have worked on and developed personally using different technologies in almost each project ranging from small MVPs to full-scale applications</p></h1>
  
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
