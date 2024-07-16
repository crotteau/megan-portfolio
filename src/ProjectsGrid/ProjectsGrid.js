import './ProjectsGrid.css';
import grid from '../assets/green-squares.png';
import projects from '../projectsData';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectsGrid() {
   const [myProjects, setProjects] = useState([])

   useEffect(() => {
      showProjects()
   }, [])

   const showProjects = () => {
      const projectInfo = projects.map(project => {
         return (
            <article key={project.name}>
               <p>{project.name}</p>
               <p>{project.description}</p>
               <img src={project.image} alt='website-homepage' className='project-image' />
               <div>
                  <a href={project.github}>
                     <FontAwesomeIcon
                        className='project-icon'
                        icon={faGithub}
                        style={{ fontSize: '30px', padding: '5px' }}
                     />
                  </a>
                  {project.deployed &&
                     <a href={project.deployed}>
                        <FontAwesomeIcon
                           className='project-icon'
                           icon={faLink}
                           style={{ fontSize: '30px', padding: '5px' }}
                        />
                     </a>
                  }
               </div>
            </article>
         )
      })
      setProjects(projectInfo)
   }

   return (
      //  <section className='projects-grid' style={{ backgroundImage: `url(${grid})` }}> 
      <section className='projects-grid'>
         {myProjects}
         {/* <img src={squiggle}/> */}
      </section>
   )
}

export default ProjectsGrid;