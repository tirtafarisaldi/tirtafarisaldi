import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import Fancybox from '../FancyBox'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h1>{project.name}</h1>

    <p className='project__description'>{project.description}</p>
    {project.images && <Fancybox options={{
      Carousel: {
        infinite: false
      }
    }} style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '12px'
    }}>{project.images.map((image) => (
        <img data-fancybox="gallery" alt="project-img" src={image} width="50%" style={{
          cursor: 'pointer'
        }} />
    ))}</Fancybox>}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
