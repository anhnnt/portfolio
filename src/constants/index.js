import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    sql,
    express,
    restapi,
    docker,
    hive,
    fullstack,
    metro,
    portfolio,
    travelapp,
    threejs,
    web3,
    noteapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Rest API",
      icon: restapi,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    }
    ,
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Open",
      company_name: "University of Helsinki",
      icon: fullstack,
      iconBg: "#383E56",
      date: "Sep 2023 - Now",
      points: [
        "The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js",
        "Course covers testing, configuration and environment management, the use of databases",
      ],
    },
    {
      title: "Hive Helsinki",
      company_name: "",
      icon: hive,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jun 2023",
      points: [
        "Learn coding together with other students and work on practical projects.",
        "Build programming knowledge with C programming language as core foundation",
      ],
    },
    {
      title: "Helsinki Metropolia UAS",
      company_name: "Bachelor in Information Technology",
      icon: metro,
      iconBg: "#383E56",
      date: "Aug 2017 - Jun 2022",
      points: [
        "Major in IoT and Cloud Computing",
      ],
    },
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "3D fortfolio is my exploration into world of 3D graphics and animation. From here you will find projects that showcase my skills and passion in web development",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/anhnnt/portfolio",
      live_link: "https://portfolio-n9yrcjm9o-anh-nguyens-projects-eefa3467.vercel.app",
    },
    {
      name: "Travel application",
      description:
        "A responsive UI/UX-focused website elevates experience with cutting-edge design",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: travelapp,
      source_code_link: "https://github.com/anhnnt/travel-app",
      live_link: "https://travel-app-woad.vercel.app",
    },
    {
      name: "Note App",
      description:
        "In note application, with login functionality, user can create and toggle the importance of each note. Moreover, the application allows users to filter and focus on the important notes",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        },
      ],
      image: noteapp,
      source_code_link: "https://github.com/anhnnt/notes-app",
      live_link: "https://notes-app-houg.onrender.com"
    },
    {
      name: "Web 3.0",
      description:
        "A blockchain cryptocurrency application. The system is used to connect and send Ethereum through the network",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: web3,
      source_code_link: "https://github.com/anhnnt/web3",
      live_link: "",
    },
  ];
  
  export { technologies, experiences, projects };