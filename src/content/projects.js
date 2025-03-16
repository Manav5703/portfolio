import calculator from '../images/VocalCalc.png';
import portfolio from '../images/portfolio.png';
import taskflowpro from '../images/taskflowpro.png';


// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'TaskFlow Pro',
    description: 'TaskFlow Pro is a modern task management application built with Angular and TypeScript. The app features an intuitive interface for creating, organizing, and tracking tasks with customizable priorities and deadlines. Users can easily categorize tasks, update their status (to-do, in-progress, completed), and sort them based on priority levels. The responsive design ensures a seamless experience across all devices, while the clean UI enhances productivity.',
    skills: ['Angular', 'TypeScript', 'Sass', 'JavaScript', 'HTML'],
    image: taskflowpro,
    links: {
      github: 'https://github.com/Manav5703/task-manager',
      preview: 'https://taskflowpros.netlify.app/',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/Manav5703/portfolio',
      preview: 'https://manavprofile.netlify.app/',
    },
  },
  {
    title: 'VocalCalc',
    description: 
      'VocalCalc is a Voice-Activated Calculator that allows users to perform basic arithmetic operations using voice commands. This application processes voice input to perform operations like addition, subtraction, multiplication, and division, while providing both visual and audible feedback.',
    skills: ['Python'],
    image: calculator,
    links: {
      github: 'https://github.com/Manav5703/VocalCalc',
    },
  },
];
