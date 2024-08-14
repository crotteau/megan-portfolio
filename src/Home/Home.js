import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid';
import Contact from '../Contact/Contact';
import './Home.css';

function Home() {

    return (
        <React.Fragment>
            <AboutMe />
            <ProjectsGrid />
            <Contact />
        </React.Fragment>
    )
}

export default Home;