import './ProjectsGrid.css';
import grid from '../assets/green-squares.png';
import projects from '../projectsData';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
      if (currentIndex === projects.length - 1) {
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
               <h3 className='project-name'>{project.name}</h3>
               <p>{project.description}</p>
               <p>
                  <span className='project-tech'>Technologies Used: </span>
                  {project.technologies}
               </p>
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
      <section className='projects-section'>
         <div className='projects-section-header'>
            <h2 className='projects'>Projects</h2>
            <p className='projects-description'>Some things I've recently worked on.</p>
         </div>
         <article className='projects-container'>
            <button onClick={() => carouselScrollLeft()}>
               <FontAwesomeIcon
                  className='projects-grid-arrow'
                  icon={faArrowLeft}
               />
            </button>
            <section className='projects-grid'>
               {myProjects}
            </section>
            <button onClick={() => carouselScrollRight()}>
               <FontAwesomeIcon
                  className='projects-grid-arrow'
                  icon={faArrowRight}
               />
            </button>
         </article>
      </section>
   )
}

export default ProjectsGrid;