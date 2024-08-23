import habitat from './assets/habitat.png';
import asteroid from './assets/asteroidsLow.jpg';
import travel from './assets/traveltracker.png';
import cocktails from './assets/mixmaster1.png';

const projects = [
    {
        name: "Habit-at | Group Project",
        github: "https://github.com/Habit-at-2311/fe-habit-at",
        deployed:"https://habit-at-2.vercel.app/",
        description: "Visualize tracked habits through 3D flower models.",
        technologies: "React, Three.js, Tailwind CSS, Circle CI, and Cypress",
        image: habitat 
    },
    {
        name: "Asteroid Patrol | Solo Project",
        github: "https://github.com/crotteau/asteroids",
        deployed:"https://asteroids-blond.vercel.app/",
        description: "Daily updates of nearby asteroids!",
        technologies: "React, Cypress, CSS, and Lighthouse", 
        image: asteroid
    },
    {
        name: "Travel Tracker | Solo Project",
        github: "https://github.com/crotteau/travelTracker",
        deployed:"https://crotteau.github.io/travelTracker/",
        description: "Track upcoming and past vacations.",
        technologies: "Vanilla JavaScript, HTML, CSS, Mocha and Chai",
        image: travel
    },
    {
        name: "Mix Master | Group Project",
        github: "https://github.com/crotteau/mix-master-fe",
        deployed: null,
        description: "A source for finding mocktail and cocktail recipes.",
        technologies: "React, Cypress, PostgreSQL, Express, and Knex",
        image: cocktails
    }
];

export default projects;