import habitat from './assets/habitat.png';
import asteroid from './assets/asteroid.png';
import travel from './assets/traveltracker.png';
import cocktails from './assets/mixmaster1.png';

const projects = [
    {
        name: "Habit-at",
        github: "https://github.com/Habit-at-2311/fe-habit-at",
        deployed:"https://habit-at-2.vercel.app/",
        description: "Visualize tracked habits through 3D flower models.",
        image: habitat
    },
    {
        name: "Asteroid Patrol",
        github: "https://github.com/crotteau/asteroids",
        deployed:"https://asteroids-blond.vercel.app/",
        description: "Daily updates of nearby asteroids!",
        image: asteroid
    },
    {
        name: "Travel Tracker",
        github: "https://github.com/crotteau/travelTracker",
        deployed:"https://crotteau.github.io/travelTracker/",
        description: "Track upcoming and past vacations.",
        image: travel
    },
    {
        name: "Mix Master",
        github: "https://github.com/crotteau/mix-master-fe",
        deployed: null,
        description: "A source for finding mocktail and cocktail recipes.",
        image: cocktails
    }
];

export default projects;