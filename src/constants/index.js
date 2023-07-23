import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    next,
    liceo,
    kodego,
    bootstrap,
    cert1,
    cert2,
    cert3,
    cert4,
    aprompt,
    achat,
    vajj,
    moviehub,
    maccafe,
    firstportfolio,
    arecipe,
    fonechat,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "FrontEnd Developer",
      icon: mobile,
    },
    {
      title: "BackEnd Developer",
      icon: backend,
    },
    {
      title: "Team Player",
      icon: creator,
    },
  ];
  
  const certificates = [
    {
      name: cert1,  
      img: cert1,
      icon: kodego,
      iconBg: "#ffff",
      date: "March 2023"
      
    },
    {
      name: cert2,  
      img: cert2,
      icon:kodego,
      iconBg: "#ffff",
      date: "March 2023"
    },
    {
      name: cert3,  
      img: cert3,
      icon:kodego,
      iconBg: "#ffff",
      date: "March 2023"
    },
    {
      name: cert4,  
      img: cert4,
      icon: liceo,
      iconBg: "#383E56",
      date: "March 2015"
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "nextjs",
      icon: next,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Aprompt",
      description:
        "Ai web inspired that allows posting via prompt, search post by profile, keywords, and tags. 1st Next JS project to get familiarize with its basic and CRUD functionalities",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aprompt,
      source_code_link: "https://a-aprompt.vercel.app",
    },
    {
      name: "Achat",
      description:
        "A messenger clone created for practice purposes. specially learning new tech stacks like typescript, prisma and pusher. It has a live everything a live chat can offer",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
      ],
      image: achat,
      source_code_link: "https://achat-ledeuadian.vercel.app/",
    },
    {
      name: "Vajj",
      description:
        "A comprehensive project management system which was created for the bootcamp final capstone project. It uses laravel and php framework and MySQL as its database",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: vajj,
      source_code_link: "https://vajj-system.devph.space/",
    },
    {
      name: "Movie Hub",
      description:
        "A Netflix inspired website which was targeted to be a semi free website and with some exclusive feature for those who subscribe. 2nd mini project during bootcamp.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: moviehub,
      source_code_link: "https://movies-hub-ten.vercel.app/",
    },
    {
      name: "MacCafe",
      description:
        "1st website created after going back to web developing path for so long. It is a static Cafe Shop Website and is presented as our 1st mini project for our 3 months bootcamp.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: maccafe,
      source_code_link: "https://ledeuadian.github.io",
    },
    {
      name: "1st Portfolio",
      description:
        "1st portfolio created during the 1st month of bootcamp training. Exploring the basics of vanilla javascript,html, and css with base media queries and keyframes.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: firstportfolio,
      source_code_link: "https://adrianabellanosa.devph.space/",
    },
    {
      name: "A-Recipes",
      description:
        "Recipe website using online Edamam API. it allows to search different recipe of your own accord. Created for a 5 days test & assessment purposes",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "rest API",
          color: "pink-text-gradient",
        },
      ],
      image: arecipe,
      source_code_link: "https://a-recipes.vercel.app/",
    },
    {
      name: "fonechat",
      description:
        "Another chat app for 3 days assessment purposes. A whatsapp inspired clone with call and video call feature. tried different approach from my 1st a-chat project ",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express JS",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: fonechat,
      source_code_link: "https://fonechat.vercel.app/",
    },
    
  ];
  
  export { services, technologies, testimonials, projects, certificates };