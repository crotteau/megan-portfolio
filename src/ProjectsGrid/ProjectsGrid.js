import './ProjectsGrid.css';
import grid from '../assets/green-squares.png';
import habitat from '../assets/habitat.png';
import projects from '../projectsData';
import React, { useState, useEffect } from 'react';

function ProjectsGrid() {
   const [myProjects, setProjects] = useState([])

   useEffect(() => {
      showProjects()
   }, [])

   const showProjects = () => {
      const projectInfo = projects.map(project => {
         return (
            <article>
               <p>{project.name}</p>
               <p>{project.description}</p>
               <img src={project.image} alt='website-homepage' className='project-image'/>
            </article>
         )
      })
      setProjects(projectInfo)
   }
   console.log(myProjects)
   return (
      //  <section className='projects-grid' style={{ backgroundImage: `url(${grid})` }}> 
      <section className='projects-grid'>
         {myProjects}
      </section>
   )
}

export default ProjectsGrid;