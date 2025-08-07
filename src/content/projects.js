import calculator from '../images/vocalcalcc.png';
import portfolio from '../images/portfolio.png';
import taskflowpro from '../images/taskflowpro.png';
import worthit from '../images/worthit.png';


// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'WorthIt - Cleaning & Maintenance Services',
    description: 'A professional website for WorthIt, a real cleaning and maintenance business. Features a modern, responsive design with working appointment booking system, email notifications, and comprehensive service showcase. Built with HTML, CSS, JavaScript, and Node.js backend with Netlify Functions for serverless deployment.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Netlify Functions', 'Email Integration'],
    image: worthit,
    links: {
      github: 'https://github.com/Manav5703/WorthIT',
      preview: 'https://worthiit.netlify.app/',
    },
  },
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
      'VocalCalc is a modern voice-activated calculator that lets you perform calculations simply by speaking. No more typing complex equations - just say what you want to calculate!',
    skills: ['Python',  'HTML', 'CSS', 'JavaScript'],
    image: calculator,
    links: {
      github: 'https://github.com/Manav5703/VocalCalc',
      preview: 'https://vocalcalc.onrender.com',
    },
  },
];
