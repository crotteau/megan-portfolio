import './ProjectsGrid.css';
import grid from '../assets/green-squares.png';
import projects from '../projectsData';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectsGrid() {
   const [myProjects, setProjects] = useState([])
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      showProjects()
   }, [currentIndex])

   const carouselScrollLeft = () => {
      if (currentIndex === 0) {
         return setCurrentIndex(projects.length - 1)
      } else {
         return setCurrentIndex(currentIndex - 1)
      }
   }

   const carouselScrollRight = () => {
      console.log('current index', currentIndex)
      if (currentIndex === projects.length-1) {
         return setCurrentIndex(0)
      } else {
         return setCurrentIndex(currentIndex + 1)
      }
   }

   const showProjects = () => {
      const projectInfo = projects.map(project => {
         return (
            <article className='project'
               key={project.name}
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
               <p>{project.name}</p>
               <p>{project.description}</p>
               <div>
                  <a href={project.github} target='_blank' rel='noopener noreferrer'>
                     <img src={project.image} alt='website-homepage' className='project-image' />
                     <FontAwesomeIcon
                        className='project-icon'
                        icon={faGithub}
                        style={{ fontSize: '30px', padding: '5px' }}
                     />
                  </a>
                  {project.deployed &&
                     <a href={project.deployed} target='_blank' rel='noopener noreferrer'>
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
      <React.Fragment>
         <h2>Projects</h2>
         <article className='projects-container'>
            <button onClick={() => carouselScrollLeft()}>previous</button>
            <section className='projects-grid'>
               {myProjects}
               {/* <img src={squiggle}/> */}
            </section>
            <button onClick={() => carouselScrollRight()}>next</button>
         </article>
      </React.Fragment>
   )
}

export default ProjectsGrid;