// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import cpsLogo from './assets/education_logo/cpsLogo.png'
import juscoLogo from './assets/education_logo/juscoLogo.jpeg'
import marwadiLogo from './assets/education_logo/marwadiLogo.jpeg'

// Project Section Logo's
import Swiggy from './assets/work_logo/swiggy.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
  
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
  export const education = [
    {
      id: 0,
      img: marwadiLogo,
      school: "Marwadi University",
      date: "Sept 2022 - Feb 2026",
      grade: "7.5 CGPA",
      desc: "I'm a final-year B.Tech Computer Science student at Marwadi University, with a strong foundation in Data Structures, Algorithms, OOP, DBMS, and Web Development. I've actively participated in workshops, hackathons, and tech communities, which have sharpened my technical skills and collaborative mindset. My academic journey has been key to shaping my problem-solving abilities and career readiness.",
      degree: "B.Tech -CSE",
    },
    {
      id: 1,
      img: juscoLogo,
      school: "Jusco School SouthPark, Bistupur",
      date: "Apr 2019 - March 2021",
      grade: "78%",
      desc: "I completed my class 12 education from Jusco School SouthPark, Bistupur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: cpsLogo,
      school: "Central Public School",
      date: "Apr 2018 - March 2019",
      grade: "90.20%",
      desc: "I completed my class 10 education from Central Public School, Adityapur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CodeSphere-online coding platform",
      description:
        "A fullstack project where both backend and frontend has been implemented from scratch, user authentication and authorization were implemented using JWT token to handle user session, logout and rate-limiter fetaure implemented using redis db , for code submition used judge0 ,helps in reducing load from server  ",
      image: imagesearchLogo,
      tags: ["React JS","Tailwind CSS","DaisyUI","Node JS","Express JS","Redis db","mongoDB","Judge0", "API", "CSS", "Javascript"],
      github: "https://github.com/Satyam8409/Leetcode-frontend",
      webapp: "https://leetcode-frontend-six.vercel.app/signup",
    },
    {
      id: 1,
      title: " Swiggy Clone– Food Delivery Web",
      description:"Developed a full-stack Swiggy clone with a React.js frontend and Node.js/Express backend, featuring restaurant search, dynamic menus, cart management, and secure API proxying. Deployed on Vercel with CI/CD workflows and a responsive UI built using Tailwind CSS.",
      image: Swiggy,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "live API", "Tailwind"],
      github: "https://github.com/Satyam8409/Swiggy-Project",
      webapp: "https://swiggy-project-steel.vercel.app/",
    },
    {
      id: 2,
      title: "Github Profile Fetcher",
      description:
        "A web application that fetches and displays detailed GitHub profile information including repositories, followers, and contribution stats. Users can search any GitHub username to view an organized profile summary.",
      image: csprepLogo,
      tags: ["React", "Tailwind", "API", "React-Router"],
      github: "https://github.com/Satyam8409/Github-Profile-Detective",
      webapp: "https://github-profile-detective-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Infinite-bubble",
      description:
    "A fun and interactive web game where users can pop infinite bubbles dynamically rendered on the screen. The project demonstrates JavaScript DOM manipulation and smooth animations.",
      image: movierecLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyam8409/Infinite-bubble-project",
      webapp: "https://infinite-bubble-project.vercel.app/",
    },
    
    {
      id: 4,
      title: "Dynamic-Quiz",
      description:
    "A full-stack quiz platform that allows users to take dynamic quizzes, track scores,. Built with Javascript.",
      image: npmLogo,
      tags: [ "Html","css", "Javascript"],
      github: "https://github.com/Satyam8409/Dynamic-Quiz",
      webapp: "https://dynamic-quiz-ruddy.vercel.app/",
    },
    
    {
      id: 5,
      title: "Weather-Fetcher",
      description:
    "A weather application that fetches real-time weather data for any location. Users can search by city to view temperature, humidity, and weather conditions with a clean and responsive UI.",
      image: taskremLogo,
      tags: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/Satyam8409/Weather-fetcher",
      webapp: "https://weather-fetcher-six.vercel.app/",
    },
    
    {
      id: 6,
      title: "Astrology-Hub",
      description:
    "A modern astrology website where users can explore zodiac signs, daily horoscopes, and astrological predictions. Built with HTML, CSS, and JavaScript animations for an engaging experience.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/Satyam8409/Astrology-Hub",
      webapp: "https://astrology-hub.vercel.app/",
    },
    
    {
      id: 7,
      title: "Portfolio",
      description:
    "A personal portfolio website showcasing projects, skills, and contact information. Designed with React and styled components to create a professional and visually appealing profile.",
      image: cmLogo,
      tags: ["React JS", "Tailwind", "Email JS", "DaisyUI"],
      github: "https://github.com/Satyam8409/Portfolio",
      webapp: "https://portfolio-inky-nu-96.vercel.app/",
    },
  ];  